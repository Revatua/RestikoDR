var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyAtAFrpEpIhMVwH'}).base('app3Tm4gwhICcWsqb');

function createRestiko()
{

    var dateRestiko = $("#date").val();
    var likeRestiko = $("#restikoLike").val();
    var doRestiko = $("#restikoDoit").val();
    var learnRestiko = $("#restikoLearn").val();
    var newUsed = $("#restikoNew").val();
    var problemsRestiko =$("#restikoProblems").val();
    var objectifs= $("#restikoTarget").val();
    var missRestiko= $("#restikoMiss").val();
    var formateurRestiko = $("#restikoFormateur").val();
    var objectiftarget = $("#targetRestiko").val();
    var noteRestiko = $("#restikoNote").val();

    base('RESTIKO').create({
        "Date": dateRestiko,
        "Ce que j'ai aimé": likeRestiko,
        "Ce que j'ai fait": doRestiko,
        "Ce que j'ai appris": learnRestiko,
        "Ce que j'ai utilisé de nouveaux":newUsed ,
        "Problématiques  rencontrées": problemsRestiko,
        "Quels sont les objectifs ?": objectifs ,
        "Qu'est-ce qui m'a manqué ?": missRestiko,
        "Qu'est-ce que tu ferais à la place du formateur ?": formateurRestiko,
        "Personne (Initiales)": {
          "id": "usrvPFLztg7wvWoqL",
          "email": "revatua1@gmail.com",
          "name": "Descamps Revatua"
        },
        "Objectif Atteins ou pas ?":objectiftarget,
        "Notre sur la journée sur /5": noteRestiko
      }, function(err, record) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(record.getId());
      });

      setTimeout(function()
      { 
        location.reload(); 
        }, 1000);
}