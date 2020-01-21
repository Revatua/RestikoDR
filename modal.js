var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyAtAFrpEpIhMVwH'}).base('app3Tm4gwhICcWsqb');

var modalTemplate =

    '<div id="c"class="modal-body">' +
    '<h4>Ce que j\'ai aimé</h4>' +
    '<div class="like">###like###</div>' +
    '<h4>Ce que j\'ai fait</h4>'+
    '<div class="make">###Ce que j\'aifait###</div>' +
    '<h4>Ce que j\'ai appris</h4>'+
    '<div class="learn">###Ce que j\'ai appris###</div>' +
    '<h4>Ce que j\'ai utilisé de nouveaux</h4>'+
    '<div class="newUsed">###Ce que j\'ai utilisé de nouveaux###</div>' +
    '<h4>Problématiques rencontrées</h4>'+
    '<div class="Problems">###Problématiques rencontrées###</div>' +
    '<h4>Quels sont les objectifs ?</h4>'+
    '<div class="Objectifs">###Quels sont les objectifs ?###</div>' +
    '<h4>Qu\'est-ce qui m\'a manqué ?</h4>'+
    '<div class="forget">###Qu\'est-ce qui m\'a manqué ?###</div>' +
    '<h4>A la place du formateur?</h4>'+
    '<div class="formateur">###formateur###</div>'+
    '<h4>Objectif Atteins ou pas ?</h4>'+
    '<div class="Atteint">###Objectif Atteins ou pas ?###</div>' +
    '<h4>Notre sur la journée sur /5</h4>'+
    '<div class="Note">###Notre sur la journée sur /5###</div>' +
'</div>';


//mes record restiko stocker dans des var, pour remplacer mes marqueur par les champs de mes restiko
//pour les injecter dans mon nouveau template qui reprend l'ancien et avoir la bonne donné affiché.
    base('RESTIKO').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 100,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            console.log('Retrieved', record.get('Date'));
            
            var likeRestiko = record.get("Ce que j'ai aimé");
            var doRestiko = record.get("Ce que j'ai fait");
            var learnRestiko = record.get("Ce que j'ai appris");
            var newUsed = record.get("Ce que j'ai utilisé de nouveaux");
            var problemsRestiko =record.get("Problématiques  rencontrées");
            var objectifs= record.get("Quels sont les objectifs ?");
            var missRestiko= record.get("Qu'est-ce qui m'a manqué ?");
            var formateurRestiko = record.get("Qu'est-ce que tu ferais à la place du formateur ?")
            var objectiftarget = record.get("Objectif Atteins ou pas ?");
            var noteRestiko = record.get("Notre sur la journée sur /5");

        
            var newTemplate = modalTemplate.replace("###like###",likeRestiko); 
                newTemplate = newTemplate.replace("###Ce que j\'aifait###",doRestiko);
                newTemplate = newTemplate.replace("###Ce que j\'ai appris###",learnRestiko);
                newTemplate = newTemplate.replace("###Ce que j\'ai utilisé de nouveaux###",newUsed);
                newTemplate = newTemplate.replace("###Problématiques rencontrées###",problemsRestiko);
                newTemplate = newTemplate.replace("###Quels sont les objectifs ?###",objectifs)
                newTemplate = newTemplate.replace("###Qu\'est-ce qui m\'a manqué ?###",missRestiko);
                newTemplate = newTemplate.replace("###formateur###",formateurRestiko);
                newTemplate = newTemplate.replace("###Objectif Atteins ou pas ?###",objectiftarget);
                newTemplate = newTemplate.replace("###Notre sur la journée sur /5###",noteRestiko);
        
            $("#modaleRestiko").html(newTemplate);
       
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
        
// pour mon boutton avec onclick= retrieved('###id###') récupérer avec chaque boutton chaque retiko avec l'id.
function retrieved(id){
    base('RESTIKO').find(id, function(err, record) {
        if (err) { console.error(err); return; }
        console.log('Retrieved', record.id);

        var likeRestiko = record.get("Ce que j'ai aimé");
        var doRestiko = record.get("Ce que j'ai fait");
        var learnRestiko = record.get("Ce que j'ai appris");
        var newUsed = record.get("Ce que j'ai utilisé de nouveaux");
        var problemsRestiko =record.get("Problématiques  rencontrées");
        var objectifs= record.get("Quels sont les objectifs ?");
        var missRestiko= record.get("Qu'est-ce qui m'a manqué ?");
        var formateurRestiko = record.get("Qu'est-ce que tu ferais à la place du formateur ?")
        var objectiftarget = record.get("Objectif Atteins ou pas ?");
        var noteRestiko = record.get("Notre sur la journée sur /5");

    
        var newTemplate = modalTemplate.replace("###like###",likeRestiko); 
            newTemplate = newTemplate.replace("###Ce que j\'aifait###",doRestiko);
            newTemplate = newTemplate.replace("###Ce que j\'ai appris###",learnRestiko);
            newTemplate = newTemplate.replace("###Ce que j\'ai utilisé de nouveaux###",newUsed);
            newTemplate = newTemplate.replace("###Problématiques rencontrées###",problemsRestiko);
            newTemplate = newTemplate.replace("###Quels sont les objectifs ?###",objectifs)
            newTemplate = newTemplate.replace("###Qu\'est-ce qui m\'a manqué ?###",missRestiko);
            newTemplate = newTemplate.replace("###formateur###",formateurRestiko);
            newTemplate = newTemplate.replace("###Objectif Atteins ou pas ?###",objectiftarget);
            newTemplate = newTemplate.replace("###Notre sur la journée sur /5###",noteRestiko);
    
        $("#modaleRestiko").html(newTemplate);
    });
}






