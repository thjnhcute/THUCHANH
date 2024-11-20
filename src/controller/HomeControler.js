import express from "express";
const getHomePage = (req,res)=>{
    return res.send("home",{
        data:{
            title:'Home page',
            page:'main'
        }
    })
}
export default getHomePage