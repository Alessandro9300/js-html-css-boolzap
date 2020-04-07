// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde (quindi solo quello NON aggiungiamo dinamicamente anche quello bianco di risposta)

$(document).ready(function(){


var input = $("#text-send");


input.keypress(function(event){


  var messaggio = input.val();


  if (event.keyCode == 13){

    $(".display-chat").append("<div class='messaggio inviato'>" + messaggio + "</div>");
    input.val("");
    console.log("all'invio il messaggio valeva" + messaggio);
  }




})





})
