var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyAtAFrpEpIhMVwH'}).base('app3Tm4gwhICcWsqb');

var TemplateRestiko=

'<div id="RestikoDR">'+
    '<div id="Restiko" class="card-body">'+
        '<h5 class="card-title">Restiko DR</h5>'+
        '<div class="card-body ">'+
        '<p>###date###</p>'+
    '</div>'+
        '<p class="card-text">Mes comptes rendu de chaque jour passer à la formation</p>'+
        '<button type="button" class="btn btn-primary" data-toggle="modal"onclick = retrieveData() data-target="#exampleModalLong">'+
            'Détails'+
        '</button>'+
    '</div>'+
    '</div>';

base('RESTIKO').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 100,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        
        
       //pour tout les champs du record je l'est rentre dans des var ! 

       var date = record.get("Date");
       var newTemplate = TemplateRestiko.replace("###date###", date);

    $('#RestikoDR').prepend(newTemplate);

    
    });
   
   
             
     
       
       

          
        
        
    
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});


// C'est good ça marche Tini ! 

