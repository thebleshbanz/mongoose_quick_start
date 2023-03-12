// getting started 

import mongoose from "mongoose";
import Blog from "./model/Blog.js"

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb+srv://ngs-myblog:NuDrRHtK7quS3Cpn@myblog.tfrtibr.mongodb.net/?retryWrites=true');
}

// Create new Blog post object
/* const article = new Blog({
    title: "Awesome Post 1",
    slug: "awesome-post-1",
    published: true,
    content: 'this is the best post 1 ever',
    tags : ['featured', 'announcement'],
});

// Insert the article in out MongoDB database
await article.save();

// find Single blog post
const firstArticle = await Blog.findOne({}); */

// Create new Blog post object - Alternative method

/* const article = await Blog.create({
    title: "Awesome Post 1",
    slug: "awesome-post-1",
    published: true,
    content: 'this is the best post 1 ever',
    tags : ['featured', 'announcement'],
});

article.title = "The Most Awesome post-5"
article.save(); */

// const article = await Blog.findById("640c7fb395d1f13d32a41395").exec();
const article = await Blog.findById("640c7fb395d1f13d32a41395", "title slug content").exec();

// const blog  = await Blog.deleteOne({title: "Awesome Post 1"}); // Delete single document which first matchedd
// const blog  = await Blog.deleteMany({slug: "awesome-post-1"});


console.log(article);
