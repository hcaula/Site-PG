var file, periodo, horario, sala, professor;
var monitores = [], links = [], referencias = [];
var data = {};
var cronograma = {};

/* Função para requisitar siteInfo */
var requestJSON = function(){
  var xhs = new XMLHttpRequest();
  xhs.open("GET", "https://api.github.com/gists/88537bf7372495ced9bbb854d24ccef2", false);
  // xhs.open("GET", "https://api.github.com/gists/f41afdcb2da2801ee7f0f21c5a4a2aba", false);
  xhs.onreadystatechange = function () {
    if(xhs.readyState === 4) {
      if(xhs.status === 200 || xhs.status == 0) {
        var file = xhs.responseText;
        data = JSON.parse(file);
        data = JSON.parse(data.files.siteInfo.content);
        requestCalendar();
      }
    }
  }
  xhs.send(null);
}

/* Função para requisitar cronograma */
var requestCalendar = function(){
  var xhs = new XMLHttpRequest();
  xhs.open('GET', "https://api.github.com/gists/cb2372cf46da4a5b4b1d5a59478cea68", false);
  xhs.onreadystatechange = function() {
    if(xhs.readyState === 4) {
      if(xhs.status === 200 || xhs.status == 0) {
        var file = xhs.responseText;
        cronograma = JSON.parse(file);
        cronograma = JSON.parse(cronograma.files.cronograma.content);
      }
    }
  }
  xhs.send(null);
}
requestJSON();
