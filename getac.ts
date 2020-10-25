import * as express from 'express';
import * as mongodb from "mongodb";
let ac_client=mongodb.MongoClient;
let acModule=express.Router().get('/',(req,res)=>{
 ac_client.connect("mongodb+srv://admin:admin@employeemanagementsyste.ccfym.mongodb.net/<Ecommerce>?retryWrites=true&w=majority",(err,client)=>{
     if (err) throw err;
     else{
         let db=client.db("Ecommerce");
         db.collection("Ac").find().toArray((err,db)=>{
             if (err) throw err;
             else{
                 res.send(db) 
             }
         })
     }
 })
})
export default acModule;