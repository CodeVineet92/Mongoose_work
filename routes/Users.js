const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/blogs', async(req, res) => {
    try{
    const blog = await Blog.find();
    res.status(200).json(blog);
    }
    catch(error){
        res.status(500).json({success: true, message: error.message});
    }
});

router.post('/blogs', async(req, res) => {
    try{
    const {name,phone,address} = req.body;
    const newBlog = new Blog({name,phone,address});
    await newBlog.save();
    res.status(200).json(newBlog);
    }
    catch(error){
        res.status(500).json({success: false, message: error.message});
    }
});

module.exports = router;