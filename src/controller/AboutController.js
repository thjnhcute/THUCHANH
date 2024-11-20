import express from "express";
const aboutPage = (req,res)=>{
   return res.render("contact",{
    data:{
        title:'About page',
        page:'about'
    }
   })
}
export default aboutPage