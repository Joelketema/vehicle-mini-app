import mongoose from "mongoose";
import "dotenv/config";
export const connectDB = async () => {
    console.log(process.env.MONGO_DB);
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
