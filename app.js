const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const dbConnect = require('./db');
const Blog = require('./models/blog');
const users = require('./routes/Users');

app.use(express.json());

dbConnect();

app.use('/api', users);

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.post('/blogs', async(req, res) => {
    try{
    const blog = await Blog.create(req.body);
    res.status(200).json(blog);
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});