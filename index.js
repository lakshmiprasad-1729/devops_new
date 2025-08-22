import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("it is Paas "+new Date());
})

app.listen(4000,()=>{
    console.log("app listening on port 4000");
})