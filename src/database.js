import mongoose from "mongoose";
import { MONGODB_URI } from "./config";

(async() => {

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log('db connected to', db.connection.name)
    } catch (error) {
        console.error(error)
    }

})();