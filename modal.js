var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyAtAFrpEpIhMVwH'}).base('app3Tm4gwhICcWsqb');

var modalTemplate =

    '<div id="###modaleRestiko###"class="modal-body">' +
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
    '<h4>Personne (Initiales)</h4>'+
    '<div class="personnal">###Personne (Initiales)###</div>' +
    '<h4>A la place du formateur?</h4>'+
    '<div class="formateur">###formateur###</div>'+
    '<h4>Objectif Atteins ou pas ?</h4>'+
    '<div class="Atteint">###Objectif Atteins ou pas ?###</div>' +
    '<h4>Notre sur la journée sur /5</h4>'+
    '<div class="Note">###Notre sur la journée sur /5###</div>' +
'</div>';


function retrieveData(){
    base('RESTIKO').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 100,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            console.log('Retrieved', record.get('Date'));
            var Date = record.get("Date")
            var nameRestiko = record.get("Ce que j'ai aimé");
            var likeRestiko = record.get("Ce que j'ai fait");
        
        
            var newTemplate = modalTemplate.replace("###like###",nameRestiko); 
            new
            // newTemplate = newteplate.replace("###Ce que j\'aifait###",likeRestiko);
           
            $("#modaleRestiko").prepend(newTemplate);
        
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
        
}







