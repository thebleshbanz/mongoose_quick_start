// getting started 

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb+srv://ngs-myblog:NuDrRHtK7quS3Cpn@myblog.tfrtibr.mongodb.net/?retryWrites=true');
}

const kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak(){
    const greeting = this.name ? "Meaow name is " + this.name : "I don't have name";
    console.log(greeting);
}

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name : "Silence" });
// console.log(silence.name);

/* const fluffy = new Kitten({name: 'manjuBilli'});
fluffy.save();
// Meaow name is fluffy
fluffy.speak();  */

const kittens = Kitten.find({ name : /^fluff/});
console.log(kittens);
