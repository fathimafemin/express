const express=require('express')
const path=require('path')  //get directory path
const app=express()
const port=3000
app.use(express.static('public'))
app.use(express.urlencoded())

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))   //html page join
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'contact.html'))   //contact page join
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'))   //about page join
})

app.get('/news',(req,res)=>{
    res.sendFile(path.join(__dirname,'news.html'))   //html page join
})
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/news',(req,res)=>{
    res.send('News page')
})

app.post('/news',(req,res)=>{
    res.send('News posted')
})

app.put('/news',(req,res)=>{
    res.send('News edited')
})

app.delete('/news',(req,res)=>{
    res.send('News deleted')
})
app.get('/download',)


app.get('/about',(req,res)=>{
    res.send('About page')
})
app.get('/contact',(req,res)=>{
    res.send('Contact page')
})

app.get('/download',(req,res)=>{
    res.download(path.join(__dirname,'public/images/image.png'))  
})
app.get('/English',(req,res)=>{
    res.sendFile(path.join(__dirname,'sylabus.html'))   //contact page join
})
app.get('/downloads',(req,res)=>{
        res.download(path.join(__dirname,'public/files/Grammar .pdf'))  
    })
app.get('/regi',(req,res)=>{
        res.sendFile(path.join(__dirname,'form.html'))
    })
app.post('/submit',(req,res)=>{
    formData=req.body
    console.log(formData)
    email=formData.email
    Name=formData.Name
    password=formData.password
    console.log(`Name1:${Name}`);
    console.log(`Email:${email}`);
    console.log(`Password:${password}`);
})
app.listen(port,()=>{
    console.log('Example app listening on port ${port}')
})