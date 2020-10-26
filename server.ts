import * as express from 'express'
import * as mogodb from "mongodb";
import * as cors from "cors";
import  acModule from './ac/getac';
import  PhoneModule from './phones/getphone';

let app=express();
app.use(cors());
app.use('/ac',acModule);
app.use('/phones',PhoneModule);
let port= process.env.PORT ||8081
app.listen(port,()=>{
    console.log("server started")
});
