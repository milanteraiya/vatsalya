const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Mongo Connection
mongoose.connect('mongodb://127.0.0.1:27017/Vatsalya');
let db = mongoose.connection;

app.post('/data',(req,res)=>{
    console.log('Data clicked');
    const name=req.body.name;
    const id=req.body.id;
    const mob=req.body.mob;
    const email=req.body.email;
    const ename=req.body.ename;
    
    let data={
        "Name":name,
        "Icard":id,
        "Mobile":mob,
        "Email":email,
        "Event":ename
    }
    db.collection('React').insertOne(data,()=>{
        res.redirect('http://127.0.0.1:3000/welcome');
    });
});

//feedback
app.post('/dataa',(req,res)=>{
    console.log('Data clicked');
    const uname=req.body.uname;
    const mail=req.body.mail;
    const msg=req.body.msg;
    
    let dataa={
        "Name":uname,
        "Email":mail,
        "Message":msg
    }
    db.collection('Feedback').insertOne(dataa,()=>{
        res.redirect('http://127.0.0.1:3000/feedback');
    });
});
app.listen(1008,(err)=>{console.log('Server start')});