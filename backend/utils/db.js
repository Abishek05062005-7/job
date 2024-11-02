import mongoose from "mongoose";

const connectDB = async () => {
    try {
         const url="mongodb://localhost:27017/";
        await mongoose.connect(url);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;