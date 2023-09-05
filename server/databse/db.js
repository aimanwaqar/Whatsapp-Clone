import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async ()=>{
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-dyoriwr-shard-00-00.ibcovyg.mongodb.net:27017,ac-dyoriwr-shard-00-01.ibcovyg.mongodb.net:27017,ac-dyoriwr-shard-00-02.ibcovyg.mongodb.net:27017/?ssl=true&replicaSet=atlas-hnfs34-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL, {
            useUnifiedTopology: true,
        });
        console.log("Successfully connected with database");
    }catch(error){
        console.log("error while connecting database cloud",error.message);
    }
}

export default Connection;