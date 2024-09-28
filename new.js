const express=require('express')
const path=require('path')  //get directory path
const app1=express()
const port=3000
const fs=require('fs')
app1.use(express.json())
app1.use(express.static('public'))
app1.use(express.urlencoded())
app1.post('/submit',(req,res)=>{
    formData=req.body
    console.log(formData)
    email=formData.email
    Name=formData.Name
    password=formData.password
    console.log(`Name1:${Name}`);
    console.log(`Email:${email}`);
    console.log(`Password:${password}`);

    fs.appendFile('signupform.txt',JSON.stringify(formData,null,2),function(err)//call back function
{
    if(err){
        console.error(err);
        return;
    }
    console.log('File written successfully!');
    });
    //below code for for each we can print without culy braceswe use
    fs.appendFile('message.txt','',(err)=>{
        if(err){
            console.error(err);
            res.status(500).send('Error writing to file');
        }
        else{
            Object.keys(formData).forEach((key)=>{
                const data=`${key}:${formData[key]}\n`;
                fs.appendFile('message.txt',data,(err)=>{
                    if(err){
                        console.error(err);
                    }
                });
            });
            res.send('Form submitted successfully')
        }
    })
    })

app1.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'inde2.html'))   //html page join
})
app1.get('/sign',(req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
})


app1.listen(port,()=>{
    console.log('Example app listening on port ${port}')
})