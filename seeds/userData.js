const { User } = require('../models');

const userData = [
    {
       username : "alka",
       password : "alka123456"

    },
    {
        username : "sal",
        password : "sal123456" 
    }   

       
    
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;