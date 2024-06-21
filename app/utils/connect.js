import mongoose from "mongoose";

function connectDB() {
 mongoose.connect(process.env.DB_URL)
  .then(()=> console.log('Database connected successfully'))
  .catch((error)=> console.log('Hey there is some error', error))
}

export default connectDB