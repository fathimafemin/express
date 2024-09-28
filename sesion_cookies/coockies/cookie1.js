//import required packages
const express=require('express')
const cookieParser=require('cookie-parser')
const app3=express();
const PORT=3000;

//USE COOKIE-PARSER TO PARSECOOKIES
app3.use(cookieParser())

//route to set a cookie
app3.get('/setcookie',(req,res)=>{
    res.cookie('username','German')
    res.send('cookie has been set!')

})

//route to read a cookie
app3.get('/getcookie',(req,res)=>{
    let username=req.cookies['username']
    if(username){
        res.send(`cookie retreived:${username}`)
    }
    else{
        res.send('no cookie is found')
    }
    
})

app3.listen(PORT,()=>{
    console.log('Example app listening on port ${PORT}')
})