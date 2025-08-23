import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("it is Paas "+new Date());
    
    // Change this line
    res.send('Hello from my PaaS! Deployed on: ' + new Date().toLocaleString());
    // To this
    res.send('AUTO-DEPLOYMENT IS AWESOME! Deployed on: ' + new Date().toLocaleString());
})

app.listen(9001,()=>{
    console.log("app listening on port 9001");
})