import app from "./app.js";
import {PORT} from "./configs/app.config.js"
import connectDB from "./configs/mongo.config.js";

connectDB()

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})