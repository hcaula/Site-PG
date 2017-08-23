var file, periodo, horario, sala, professor;
var monitores = [], links = [], referencias = [];
var data = {};

/* Função para requisitar JSON (caledário) */
var requestJSON = function(){
  var xhs = new XMLHttpRequest();
  xhs.open("GET", "https://jsonblob.com/api/jsonBlob/4447f9fc-8784-11e7-8b46-11785453a17b", false);
  xhs.onreadystatechange = function () {
    if(xhs.readyState === 4) {
      if(xhs.status === 200 || xhs.status == 0) {
        var file = xhs.responseText;
        data = JSON.parse(file);
        console.log(data);
      }
    }
  }
  xhs.send(null);
}

requestJSON();
