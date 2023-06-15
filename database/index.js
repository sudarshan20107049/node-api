import { connect } from "mongoose";

const connectDb = async () =>{
    try {
        await connect(process.env.DB_URI);
        console.log("database will Connect Succesfully")
        
    } catch (error) {
        console.log("something Went Wrong In Db")
    }
}

export default connectDb;