var file, periodo, horario, sala, professor;
var monitores = [], links = [];
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

        /* Variáveis auxiliares */
        var numMonitores = parseInt(split[5]);
        var lastLine = 5;

        /* Pegue os monitores */
        for(var i=0; i < numMonitores; i++){
          var monitor = {};
          monitor.nome = split[lastLine+i*3+1];
          monitor.face = split[lastLine+i*3+2];
          monitor.img = split[lastLine+i*3+3]
          monitores.push(monitor);
        }

        /* Crie um objeto data para mais fácil manipulação */
        data = {
          periodo: periodo,
          professor: professor,
          horario: horario,
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
