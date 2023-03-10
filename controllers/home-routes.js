const router = require("express").Router();
const User = require("../models/User");
const Project = require("../models/Project");
const withAuth = require("../utils/auth");

// GET all projects for explore page
router.get("/exploreportfolio", async (req, res) => {
  try {
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: [
            "first_name",
            "last_name",
            "github",
            "user_technology",
            "location",
            "user_pic",
          ],
        },
      ],
    });

    // randomization of array
    const projectgallery = projectData.map((project) =>
      project.get({ plain: true })
    );
    console.log(projectgallery);
    // Render Explore Page
    res.render("./partials/exploreportfolio", {
      projectgallery,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all users for explore page
router.get("/homepage", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: Project,
        },
      ],
    });

    // randomization of array
    const usergallery = userData.map((user) => user.get({ plain: true }));
    console.log(usergallery);
    // Render Explore Page
    res.render("./partials/homepage", {
      usergallery,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/profile/:id", async (req, res) => {
  try {
    const projectData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Project,
          attributes: ["name", "description", "link", "project_technology"],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render("./partials/profile", {
      ...project,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Edit a single user
router.get("/editprofile/:id", async (req, res) => {
  try {
    const projectData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Project,
          attributes: ["name", "description", "link", "project_technology"],
        },
      ],
    });

    const project = projectData.get({ plain: true });
    console.log(project);
    console.log(project.projects);
    res.render("./partials/editUser", {
      ...project,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    res.render("./partials/login", {
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/addproject/:id", async (req, res) => {
  try {
    const projectData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Project,
          attributes: ["name", "description", "link", "project_technology"],
        },
      ],
    });

    const project = projectData.get({ plain: true });
    console.log(project);
    console.log(project.projects);
    res.render("./partials/addproject2.handlebars", {
      ...project,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
