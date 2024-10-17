import express from "express";
const contactPage = (req,res)=>{
   return res.render("contact",{
    data:{
        title:'contact page',
        page:'contact'
    }
   })
}
export default contactPage