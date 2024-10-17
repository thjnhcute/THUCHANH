import express from 'express'
import dotenv from 'dotenv/config'
import date from './date.js'
import {getPath,getParamsURL} from './getURL.js'
import viewEngine  from './viewEngine.js'

import webRouter from './route/webRoute.js'

const app = express()

viewEngine(app);
const port = process.env.PORT
// app.get('/',(req,res) => {
//     res.end('Hello World')
// })

// app.get('/about',(req,res)=> {
//     res.send('hello this is Page about')
// })

app.get('/date',(req,res)=> {
    res.send(date());
})

// app.get('/getURL',(req,res)=> {
//     res.send(getParamsURL(req));
// })

// app.get('/ejs',(req,res)=>{
//     res.render("test");
// })

app.get('/home',(req,res)=>{
    res.render("home");
})
app.get('/about',(req,res)=>{
    res.render("about");
})
app.get('/contact',(req,res)=>{
    res.render("contact");
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})