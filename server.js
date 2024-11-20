import express from 'express';// thư viện express
import date from './date.js';// hàm date
import dotenv from 'dotenv'
import getURL from './getURL.js';
import viewEngine from './src/config/viewEngine.js';// thêm viewEngine
dotenv.config();
const port = process.env.PORT;// gọi cổng 
const app = express();
// gọi viewEngine
viewEngine(app);

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/date', (req, res)=> {
    res.send(date()+ ' hello KTPM0121 , chúc bạn thành công với NodeJS');
   })
   app.get('/getPath', (req, res) => {
    res.send(getURL.getPath(req)); // Truyền 'req' từ callback Express
});
  app.get('/getParamsURL',(req,res)=>{
    res.send(getURL.getParamsURL(req));
  })
  app.get('/getURL',(req,res)=>{
    res.send(getURL.getParamsURL(req));
  })

  app.get('/about', (req, res) => {
    res.send('Hello World!. Page about')
  })
  app.get('/contact', (req, res) => {
    res.render('contact')
  })
  app.get('/ejs', (req, res) => {
    res.render("test")
  })
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})