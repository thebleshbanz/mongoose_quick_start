const mongoose = require('mongoose');
const { Schema } = mongoose;
const Blog = require('./model/Blog');


main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb+srv://ngs-myblog:NuDrRHtK7quS3Cpn@myblog.tfrtibr.mongodb.net/?retryWrites=true');
}

const  blogSchema = new Schema({
    title: String, // String is shorthand for {type:Sring}
    author: {
        type:String
    },
    body: String,
    comments:[{ body:String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

const Blog = mongoose.model('Blog', blogSchema);