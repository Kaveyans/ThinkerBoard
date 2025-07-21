import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export const connectdb= async () => {
    try{
        await mongoose.connect(process.env.uri);
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    }
};