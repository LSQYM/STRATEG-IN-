import express from 'express';
import Post from "../models/post.js";



const router1=express.Router();


router1.post('/',async (req, res) => {
    //créer un compte
    const user=new Post ({
        nom : req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        mdp: req.body.mdp
    });

    //sauvegarder les données
        await user.save().then(data => { res.json(data)});


});


//exporter le module
export default router1;
