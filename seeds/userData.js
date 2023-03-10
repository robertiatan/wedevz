const { User } = require('../models');

const userData = 
[
   {
      "id": 1,
      "email": "lcade@gmail.com",
      "password": "12345678",
      "first_name": "Lauren",
      "last_name": "Cade",
      "age": 30,
      "location": "Hamilton",
      "user_pic": "",
      "user_technology": "Javascript, HTML, CSS",
      "education":"",
      "employer": "Google",
      "bio": "I am a software developer with 5 years of experience. I am looking for a new opportunity to grow my career.",
      "github": "lcade@github.com"
 },
 {
   "id": 2,
   "email": "laaa@gmail.com",
   "password": "12345678",
   "first_name": "Santino",
   "last_name": "Russo",
   "age": 30,
   "location": "Hamilton",
   "user_pic": "",
   "user_technology": "Javascript, HTML, CSS",
   "employer": "Google",
   "job_title": "Senior Software Developer",
   "bio": "I am a software developer with 5 years of experience. I am looking for a new opportunity to grow my career.",
   "github": "lcade@github.com"
},
{
   "id": 3,
   "email": "mattga@gmail.com",
   "password": "12345678",
   "first_name": "Matt",
   "last_name": "Galanis",
   "age": 30,
   "location": "Hamilton",
   "user_pic": "",
   "user_technology": "Javascript, HTML, CSS",
   "employer": "Google",
   "job_title": "Senior Software Developer",
   "bio": "I am a software developer with 5 years of experience. I am looking for a new opportunity to grow my career.",
   "github": "lcade@github.com"
},
{
   "id": 4,
   "email": "cparsons@gmail.com",
   "password": "12345678",
   "first_name": "Christine",
   "last_name": "Parsons",
   "age": 30,
   "location": "Hamilton",
   "user_pic": "",
   "user_technology": "Javascript, HTML, CSS",
   "employer": "Google",
   "job_title": "Senior Software Developer",
   "bio": "I am a software developer with 5 years of experience. I am looking for a new opportunity to grow my career.",
   "github": "lcade@github.com"
},
{
   "id": 5,
   "email": "lmenon@gmail.com",
   "password": "12345678",
   "first_name": "Leena",
   "last_name": "Menon",
   "age": 30,
   "location": "Hamilton",
   "user_pic": "",
   "user_technology": "Javascript, HTML, CSS",
   "employer": "Google",
   "job_title": "Senior Software Developer",
   "bio": "I am a software developer with 5 years of experience. I am looking for a new opportunity to grow my career.",
   "github": "lcade@github.com"
},
{
   "id": 6,
   "email": "asimmons@gmail.com",
   "password": "12345678",
   "first_name": "Alex",
   "last_name": "Simmons",
   "age": 30,
   "location": "Hamilton",
   "user_pic": "",
   "user_technology": "Javascript, HTML, CSS",
   "employer": "Google",
   "job_title": "Senior Software Developer",
   "bio": "I am a software developer with 5 years of experience. I am looking for a new opportunity to grow my career.",
   "github": "lcade@github.com"
},
{
   "id": 7,
   "email": "kfranklin@gmail.com",
   "password": "12345678",
   "first_name": "Katie",
   "last_name": "Franklin",
   "age": 30,
   "location": "Hamilton",
   "user_pic": "",
   "user_technology": "Javascript, HTML, CSS",
   "employer": "Google",
   "job_title": "Senior Software Developer",
   "bio": "I am a software developer with 5 years of experience. I am looking for a new opportunity to grow my career.",
   "github": "lcade@github.com"
},
{
   "id": 8,
   "email": "hkong@gmail.com",
   "password": "12345678",
   "first_name": "Howard",
   "last_name": "Kong",
   "age": 30,
   "location": "Hamilton",
   "user_pic": "",
   "user_technology": "Javascript, HTML, CSS",
   "employer": "Google",
   "job_title": "Senior Software Developer",
   "bio": "I am a software developer with 5 years of experience. I am looking for a new opportunity to grow my career.",
   "github": "lcade@github.com"
},
{
   "id": 9,
   "email": "bstew@gmail.com",
   "password": "12345678",
   "first_name": "Benji",
   "last_name": "Stewart",
   "age": 30,
   "location": "Hamilton",
   "user_pic": "",
   "user_technology": "Javascript, HTML, CSS",
   "employer": "Google",
   "job_title": "Senior Software Developer",
   "bio": "I am a software developer with 5 years of experience. I am looking for a new opportunity to grow my career.",
   "github": "lcade@github.com"
},
{
   "id": 10,
   "email": "bwayne@gmail.com",
   "password": "12345678",
   "first_name": "Bruce",
   "last_name": "Wayne",
   "age": 30,
   "location": "Hamilton",
   "user_pic": "",
   "user_technology": "Javascript, HTML, CSS",
   "employer": "Google",
   "job_title": "Senior Software Developer",
   "bio": "I am a software developer with 5 years of experience. I am looking for a new opportunity to grow my career.",
   "github": "lcade@github.com"
}
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;