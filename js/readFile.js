var file, periodo, horario, sala, professor;
var monitores = [], links = [], referencias = [];
var data = {};
var cronograma = {};

/* Função para requisitar JSON (caledário) */
var requestJSON = function(){
  var xhs = new XMLHttpRequest();
  xhs.open("GET", "https://api.github.com/gists/f41afdcb2da2801ee7f0f21c5a4a2aba", false);
  xhs.onreadystatechange = function () {
    if(xhs.readyState === 4) {
      if(xhs.status === 200 || xhs.status == 0) {
        var file = xhs.responseText;
        data = JSON.parse(file);
        data = JSON.parse(data.files.siteInfo.content);
        console.log(data);
        requestCalendar();
      }
    }
  }
  xhs.send(null);
}

var requestCalendar = function(){
  var xhs = new XMLHttpRequest();
  xhs.open('GET', "https://api.github.com/gists/250348f30528f1861576a142c6f3e9fa", false);
  xhs.onreadystatechange = function() {
    if(xhs.readyState === 4) {
      if(xhs.status === 200 || xhs.status == 0) {
        var file = xhs.responseText;
        cronograma = JSON.parse(file);
        cronograma = JSON.parse(cronograma.files.cronograma.content);
        // console.log(cronograma);
      }
    }
  }
  xhs.send(null);
}
requestJSON();
