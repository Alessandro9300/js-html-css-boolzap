// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)


$(document).ready(function(){


  var input = $("#text-send");


  function risposta(){

    var risposta = ["Ok", "Fact: McDonald’s once made bubblegum-flavored broccoli", "Fact: Scotland has 421 words for 'snow'", "Fact: Most Disney characters wear gloves to keep animation simple", "Fact: The # symbol isn’t officially called hashtag or pound", "Fact: Medical errors are a top cause of death", "Fact: Bees can fly higher than Mount Everest"]
    var numRandom = Math.floor((Math.random() * 7));

    console.log(numRandom);

    $(".display-chat").append("<div class='messaggio'>" + risposta[numRandom] + "</div>");
  }

  function sendMessage(messaggio){

    var messaggio = input.val();


    if (messaggio != ""){

        $(".display-chat").append("<div class='messaggio inviato'>" + messaggio + "</div>");
        input.val("");
        console.log("all'invio il messaggio valeva" + messaggio);
        $(".fas.fa-microphone").css("display", "block");
        $(".fas.fa-paper-plane").css("display", "none");

        setTimeout(risposta, 1);

        input.val("");
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
