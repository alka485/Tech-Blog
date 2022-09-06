const router = require('express').Router();
const { User,Post,Comment } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await Post.findAll({
        include: [
          {
            model: Comment,
            attributes: ['comment_text', 'created_at'],
          },
        ],
      
      });
  
      const posts = userData.map((Post) => Post.get({ plain: true }));
  
      res.render('homepage', {
        posts,
        // Pass the logged in flag to the template
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;
  








//Route "/"



//Route "/login"

//Route "/dashboard"

//Route "/dashboard/new"

//Route "/dashboard/edit/id"

//Route "/post/id"

