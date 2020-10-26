import * as express from 'express';
import * as mongodb from "mongodb";
let phone_client=mongodb.MongoClient;
let PhoneModule=express.Router().get('/',(req,res)=>{
 phone_client.connect("mongodb+srv://admin:admin@employeemanagementsyste.ccfym.mongodb.net/<Ecommerce>?retryWrites=true&w=majority",(err,client)=>{
     if (err) throw err;
     else{
         let db=client.db("Ecommerce");
         db.collection("Phones").find().toArray((err,db)=>{
             if (err) throw err;
             else{
                 res.send(db) 
             }
         })
     }
 })
})
export default PhoneModule;