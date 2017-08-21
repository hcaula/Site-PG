var file, periodo, horario, sala, professor;
var monitores = [], links = [], referencias = [];
var data = {};

function readTextFile(file) {

  /* Crie o objeto XMLHTttpRequest */
  var rawFile = new XMLHttpRequest();

  /* Especifique o tipo de requisição e seus atributos */
  rawFile.open("GET", file, false);

  /* Chame essa função sempre que o estado da requisição HTTP mudar */
  rawFile.onreadystatechange = function () {

    /* Estado 4 significa "requisição concluída e a resposta está pronta" */
    if(rawFile.readyState === 4) {

      /* Estados comuns do HTTP */
      if(rawFile.status === 200 || rawFile.status == 0) {

        /* Pegue o resultado da requisição */
        file = rawFile.responseText;

        /* Colete os dados do data.txt */
        var split = file.split('\n');
        periodo = split[0];
        professor = split[1];
        horario = split[2];
        sala = split[3];

        var linkString = split[4].split(' | ');
        linkString.forEach(function(link){
          links.push(link);
        });

        var referenciasString = split[5].split(' | ');
        referenciasString.forEach(function(referencia){
          referencias.push(referencia);
        });

        /* Variáveis auxiliares */
        var numMonitores = parseInt(split[6]);
        var lastLine = 6;

        /* Pegue os monitores */
        for(var i=0; i < numMonitores; i++){
          var monitor = {};
          monitor.nome = split[lastLine+i*4+1];
          monitor.login = split[lastLine+i*4+2]
          monitor.face = split[lastLine+i*4+3];
          monitor.img = split[lastLine+i*4+4]
          monitores.push(monitor);
        }

        /* Crie um objeto data para mais fácil manipulação */
        data = {
          periodo: periodo,
          professor: professor,
          horario: horario,
          referencias: referencias,
          sala: sala,
          links: links,
          monitores: monitores
        }
        console.log(data);
      }
    }
  }
  rawFile.send(null);
}

readTextFile("data.txt");

/* Função para requisitar outros arquivos HTML */
var requestHTML = function(html) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", html, false);
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if(rawFile.status === 200 || rawFile.status == 0) {
        var file = rawFile.responseText;
        document.getElementById('body').innerHTML = file;
      }
    }
  }
  rawFile.send(null);
}

/* Função para requisitar JSON (caledário) */
var requestJSON = function(){
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", "https://api.myjson.com/bins/8pa21", false);
  rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4) {
      if(rawFile.status === 200 || rawFile.status == 0) {
        var file = rawFile.responseText;
        console.log(file);
      }
    }
  }
  rawFile.send(null);
}

requestJSON();
