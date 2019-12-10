var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user1', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

//ajout d'un schema et d'un modele (creation bdd)

const userSchema = new mongoose.Schema({
  prenom:{
    type: String,
    required: true,
  },
  nom:{
    type: String,
    required: true,
  },
  statut:{
    type: String,
    required: true,
  },
})

var User = mongoose.model('User', userSchema);

//Ajout d'un utilisateur a notre bdd

var pers = new User({prenom:'Jean', nom:'Némar', statut:'Vendeur'});

pers.save(function(err, pers){
  if (err) return console.error(err);
});
