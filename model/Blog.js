import mongoose from "mongoose";
const {Schema, model} = mongoose;

// Define mongoDB Schema
const blogSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    comments : [
        {
            user: String,
            content: String,
            votes: Number,
        },
    ]
});


// Now define model
const Blog = model("Blog", blogSchema);

export default Blog;