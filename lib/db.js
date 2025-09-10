import mongoose from "mongoose";

const mongodburi = process.env.MONGODB_URI
console.log(mongodburi)

if(!mongodburi){
  throw new Error("Please define mongodb uri")
}

let cached = global.mongoose
if(!cached){
  cached = global.mongoose = {
    connection: null,
    promise: null
  }
}

export async function connectionToDB(){
  if(cached.connection){
    return cached.connection
  }

  if(!cached.promise){
    const opts = {
      bufferCommands: true,
      maxPoolSize: 10
    }

    cached.promise = mongoose.connect(mongodburi, opts).then(() => mongoose.connection)
  }

  try {
    cached.connection = await cached.promise
  } catch (error) {
    cached.promise = null
    throw error
  }
  return cached.connection
}