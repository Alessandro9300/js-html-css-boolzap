// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)


$(document).ready(function(){


  var input = $("#text-send");
  var search = $(".inp-search");
  var nomi = $(".utente");


  // FUNZIONE FILTRO CON SEARCH

  search.keyup(function(searchWords){

    nomi.each(function(){

      var testoNome = $(this).find(".nomi").text();
      var minTestoNome = testoNome.toLowerCase();
      var maxTestoNome = testoNome.toUpperCase();

      if (testoNome.includes(search.val()) || minTestoNome.includes(search.val()) || maxTestoNome .includes(search.val())){

        $(this).show();

      } else {
        $(this).hide();
      }

    })

  })


  // FUNZIONE RISPOSTA

  function risposta(){

    var risposta = ["Ok", "Fact: McDonald’s once made bubblegum-flavored broccoli.", "Fact: Scotland has 421 words for 'snow'.", "Fact: most Disney characters wear gloves to keep animation simple.", "Fact: the # symbol isn’t officially called hashtag or pound.", "Fact: medical errors are a top cause of death.", "Fact: bees can fly higher than Mount Everest."]
    var numRandom = Math.floor((Math.random() * 7));

    $(".display-chat").append("<div class='messaggio'>" + risposta[numRandom] + "</div>");
  }

  // FUNZIONE PER MANDARE MESSAGGIO

  function sendMessage(messaggio){

    var messaggio = input.val();


    if (messaggio != ""){

        $(".display-chat").append("<div class='messaggio inviato'>" + messaggio + "</div>");
        input.val("");
        console.log("all'invio il messaggio valeva" + messaggio);
        $(".fas.fa-microphone").css("display", "block");
        $(".fas.fa-paper-plane").css("display", "none");

        setTimeout(risposta, 1000);

        input.val("");
    }

  }

  // EVENTO PER SCRIVERE CON INVIO

  input.keypress(function(event){

    $(".fas.fa-microphone").css("display", "none");
    $(".fas.fa-paper-plane").css("display", "block");

    if (event.keyCode == 13){
      sendMessage();

    }

  })

  // EVENTO PER SCRIVERE CON IL CLICK

  $(".fas.fa-paper-plane").click(
    sendMessage
  );


})
