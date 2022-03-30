import express from 'express';
import user from "../models/post.js";
import jwt from 'jsonwebtoken';

const router2=express.Router();
const key="nbvjkfdbvmfssdq465465c4sd56c46";

// login pour recuperer le token
router2.post('/', async (req, res) => {
    console.log(req.body);
    //je cherche le compte avec le mail fourni en body
    user.findOne({email: req.body.email})
        .exec()
        .then( user => {
            console.log(user);
            // si trouvé je compare le mot de passe fourni avec celui trouvé
            if(req.body.mdp === user.mdp) {
                //creer token
                const token = jwt.sign  (
                    {
                        email: user.email,
                        UserId: user._id
                    },
                    key,
                    {
                        // key expire dans 1 heure
                        expiresIn: "1h"
                    }
                )
                // afficher authentification et le tozkn
                res.status(200).json({
                    message: 'Authentification réussie',
                    token: token
                });
            } else {
                res.sendStatus(401);
            }

        })
        .catch(err => {
            console.log(err);
            res.json({error :err})
        })
});

// exporter le router pour l'utiliser
  export default router2;
