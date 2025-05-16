import { Router } from "express";
import passport from "passport";
import { registerUser } from "../controllers/registerController.js";
import { homePage, loginPage, registerPage } from "../controllers/pages.js";

const router = Router();

/**
 * --------------- POST ROUTES --------------- 
 */

router.post('/login', passport.authenticate('local'), (req, res, next) => {

});
router.post('/register', registerUser);

/**
 * --------------- GET ROUTES --------------- 
 */

router.get('/', homePage);
router.get('/login', loginPage);
router.get('/register', registerPage);


export default router;

