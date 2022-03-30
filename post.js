import mongoose from 'mongoose';

//pas de doublon
import unique from 'mongoose-unique-validator';

const user=new mongoose.Schema({
    nom: String,
    prenom: String,
    email:{
        type: String,
        //required pour mail, si il  est pas saisi l'utilisateur reçoit une erreur
        reuired: true,
        //unique pour ne pas avoir des doublons des mails en base de données
        unique: true
    },
    mdp:{
        type: String,
        reuired: true
    }

});

// applique méthode de plugin
user.plugin(unique);



export default mongoose.model('Test', user);
