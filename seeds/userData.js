const { User } = require('../models');

const userData = [
    {
      
       username : "alka",
       password : "alka123456"

    },
    {
      
        username: "sal",
        password: "password12345"
      },
      {
        
        username: "lernantino",
        password: "password12345"
      },
      {
        
        username: "amiko",
        password: "password12345"
      },
      {
        
        username: "jordan",
        password: "password12345"
      }    
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;