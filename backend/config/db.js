import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB is Connected on Port: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1);
    }
}

export default connectDB