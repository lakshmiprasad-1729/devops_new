import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("it is Paas "+new Date());
})

app.listen(9001,()=>{
    console.log("app listening on port 9001");
})