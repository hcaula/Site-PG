var file, periodo, horario, sala, professor;
var monitores = [], links = [], referencias = [];
var data = {};
var cronograma = {};
var s = CryptoJS.AES.decrypt("U2FsdGVkX1/SgulY3AZ2DFJiaOiU7YVcDrDI7rJanqA=", "Secs Mess");

/* Função para requisitar JSON (caledário) */
var requestJSON = function(){
  var xhs = new XMLHttpRequest();
  xhs.open("GET", CryptoJS.AES.decrypt("U2FsdGVkX19UiRbhz+Q8AEfc70LcAri3i2HJDYneaPkBgsXSnEamiIfKX50KF993/rcywPINFt1WnqBm+wDbBwacJiSNHeq0Sy9qzP7aT30jS6QL2XPl2NognTnh63MN", s.toString(CryptoJS.enc.Utf8)).toString(CryptoJS.enc.Utf8), false);
  xhs.onreadystatechange = function () {
    if(xhs.readyState === 4) {
      if(xhs.status === 200 || xhs.status == 0) {
        var file = xhs.responseText;
        data = JSON.parse(file);
        requestCalendar();
      }
    }
  }
  xhs.send(null);
}

var requestCalendar = function(){
  var xhs = new XMLHttpRequest();
  xhs.open('GET', CryptoJS.AES.decrypt("U2FsdGVkX18rD6yVPykv0Hfwe2c4dTe/YS6Obbmae//tohdERrhyiaCQ2jUcCh2A7xj34dP+R1H231TLoLHecCUZH+RNkvBt1Mq1qmgXk1E=", s.toString(CryptoJS.enc.Utf8)).toString(CryptoJS.enc.Utf8), false);
  xhs.onreadystatechange = function() {
    if(xhs.readyState === 4) {
      if(xhs.status === 200 || xhs.status == 0) {
        var file = xhs.responseText;
        cronograma = JSON.parse(file);
      }
    }
  }
  xhs.send(null);
}
requestJSON();
