import express from 'express';
import post from '../models/post.js';

const router3=express.Router();

//récuperer les autres users
router3.get('/', async (req, res) => {
    try {
        // afficher que le nom et prénom des personnes déjà inscrites
        const users=await post.find({}, {nom : 1, prenom: 1});
        res.json(users);

    } catch (err){
        res.json({ message: err});
    }
});

export default router3;
