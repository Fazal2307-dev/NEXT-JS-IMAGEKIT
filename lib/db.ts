import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI!

if(!MONGODB_URI){
    throw new Error("Please define mongodb_uri in env variables")
}

let cached = global.mangoose;

if(!cached){
  cached =   global.mangoose = {conn:null,promise:null};
}