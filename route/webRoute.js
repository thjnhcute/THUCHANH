import express from "express";
import HomeController from "../controller/HomeControler.js";
import AboutController from "../controller/AboutController.js";
import ContactController from "../controller/ContactController.js"


const router = express.Router();

const initWebRoute = (app) => {
    router.get('/',HomeController)
    router.get('/about',AboutController)
    router.get('/contact',ContactController)

    return app.use('/',router)
}
export default initWebRoute