// Click sul contatto mostra la conversazione del contatto cliccato,
// è possibile inserire nuovi messaggi per ogni conversazione
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato


$(document).ready(function(){

  var input = $("#text-send");
  var search = $(".inp-search");
  var nomi = $(".utente");
  var rispostaInCorso = $(".risposta-utente");


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

  // EVENTO PER UTILIZZARE IL SEARCH

  search.keyup(
    filtro
  );

  // EVENTO PER CAMBIARE LA CHAT ATTIVA IN BASE ALL'UTENTE SELEZIONATO

  $(".utente").click(
    cambio
  );

  // FUNZIONI

  // FUNZIONI PER CANCELLARE I MESSAGGIO

  $(".cont-chat-active").on("click", ".messaggio", function(){
    $(this).find(".actions").toggle();
    $(this).siblings(".messaggio").find(".actions").hide();

  })

  $(".cont-chat-active").on("click", ".actions", function(){
    $(this).parent(".messaggio").hide();
  })


  // FUNZIONE PER FAR VEDERE CHE CI STANNO RISPONDENDO

  function messaggioRispostaShow (){
    var utenteAttivo = $(".left-utente.head-utente-left.active").find(".nomi").text();
    rispostaInCorso.html(utenteAttivo + " sta scrivendo...");
    rispostaInCorso.show();
  }

  function messaggioRispostaHide (){
    rispostaInCorso.hide();
  }

  // funzione per avere orario aggiornato

  function oraPrecisa(){

    var orario = new Date();

    function minuti(){

      var minuti = orario.getMinutes();

      if (minuti < 10){
        return "0" + minuti
      } else if (minuti >= 10) {
        return minuti
      }
    }

    return orario.getHours() + ":" + minuti();
  }


  // FUNZIONI RICHIAMATE DA ALTRI EVENTI

  // FUNZIONE RISPOSTA

  function risposta(){


    var risposta = ["Ok", "Fact: McDonald’s once made bubblegum-flavored broccoli.", "Fact: Scotland has 421 words for 'snow'.", "Fact: most Disney characters wear gloves to keep animation simple.", "Fact: the # symbol isn’t officially called hashtag or pound.", "Fact: medical errors are a top cause of death.", "Fact: bees can fly higher than Mount Everest.", "Ma chi è quel mona che sbatte la porta entrando!"]
    var numRandom = Math.floor((Math.random() * 7));

    if ($(".active").find(".nomi").text() == "Germano"){
      var numRandom = 7;
    }

    $(".display-chat.active").append('<div class="messaggio">' + risposta[numRandom] + '<div class="orario">' + oraPrecisa() + '</div><div class="actions"><div class="cancella"> Cancella messaggio </div></div></div>');
  }

  // FUNZIONE PER MANDARE MESSAGGIO

  function sendMessage(messaggio){

    var messaggio = input.val();

    if (messaggio != ""){

        $(".display-chat.active").append('<div class="messaggio inviato">' + messaggio + '<div class="orario">' + oraPrecisa() + '</div><div class="actions"><div class="cancella">Cancella messaggio</div></div></div>');
        input.val("");
        console.log("all'invio il messaggio valeva" + messaggio);
        $(".fas.fa-microphone").css("display", "block");
        $(".fas.fa-paper-plane").css("display", "none");

        setTimeout(risposta, 2500);
        setTimeout(messaggioRispostaShow, 750);
        setTimeout(messaggioRispostaHide, 2500);

        input.val("");
    }

  }

  // FUNZIONE FILTRO

  function filtro(){
    nomi.each(function(){

      var minSearch = search.val().toLowerCase();

      var testoNome = $(this).find(".nomi").text();
      var minTestoNome = testoNome.toLowerCase();

      if (minTestoNome.includes(minSearch)){

        $(this).show();

      } else {
        $(this).hide();
      }

    })
  }

  // FUNZIONE PER CAMBIARE LA CHAT ATTIVA IN BASE ALL'UTENTE SELEZIONATO

  function cambio(){
    $(".utente").css("background","unset")
    $(".display-chat").removeClass("active");
    $(".head-utente-left").removeClass("active")

    var valoreIndex = $(this).index();

    $(".display-chat").eq(valoreIndex).addClass("active");
    $(".head-utente-left").eq(valoreIndex).addClass("active");

    $(this).css({"background": "rgba(0, 0, 0, 0.1)"})

  }



})
