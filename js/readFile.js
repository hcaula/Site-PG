var file, periodo, horario, sala, drive, facebook;
var monitores = [];
var data = {};
var loaded = false;

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
        drive = split[4];
        facebook = split[5];

        /* Variáveis auxiliares */
        var numMonitores = parseInt(split[6]);
        var lastLine = 6;

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
          horario: horario,
          sala: sala,
          drive: drive,
          facebook: facebook,
          monitores: monitores
        }
      }
    }
  }
  rawFile.send(null);
}

readTextFile("data.txt");
