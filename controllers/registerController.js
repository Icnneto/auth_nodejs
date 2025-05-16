import { genPassword } from "../lib/passwordUtils.js";
import User from "../database/usersSchema.js";
import connection from "../database/dbConnect.js";

export async function registerUser (req, res, next) {
    const saltHash = genPassword(req.body.pw);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.uname,
        hash: hash,
        salt: salt
    });

    try {
        const userCreated = await User.create({ 
            username: newUser.username,
            hash: newUser.hash,
            salt: newUser.salt
         });
        console.log(userCreated);
        
        res.redirect('/login');
    } catch (error) {
        res.status(500).send(`Erro on creating user: ${error}`);
    };
};
