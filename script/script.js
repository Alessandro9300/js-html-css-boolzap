// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde (quindi solo quello NON aggiungiamo dinamicamente anche quello bianco di risposta)

$(document).ready(function(){


  var input = $("#text-send");


  function sendMessage(messaggio){

    var messaggio = input.val();
  if (messaggio != ""){

      $(".display-chat").append("<div class='messaggio inviato'>" + messaggio + "</div>");
      input.val("");
      console.log("all'invio il messaggio valeva" + messaggio);
      $(".fas.fa-microphone").css("display", "block");
      $(".fas.fa-paper-plane").css("display", "none");
  }
  }


  input.keypress(function(event){

    $(".fas.fa-microphone").css("display", "none");
    $(".fas.fa-paper-plane").css("display", "block");

    if (event.keyCode == 13){
      sendMessage();
    }

  })

  $(".fas.fa-paper-plane").click(
    sendMessage
  );





})
