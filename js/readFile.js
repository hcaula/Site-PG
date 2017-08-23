var file, periodo, horario, sala, professor;
var monitores = [], links = [], referencias = [];
var data = {};

/* Função para requisitar JSON (caledário) */
var requestJSON = function(){
  var xhs = new XMLHttpRequest();
  var h = CryptoJS.AES.decrypt("U2FsdGVkX19UiRbhz+Q8AEfc70LcAri3i2HJDYneaPkBgsXSnEamiIfKX50KF993/rcywPINFt1WnqBm+wDbBwacJiSNHeq0Sy9qzP7aT30jS6QL2XPl2NognTnh63MN", "Secret Message");
  xhs.open("GET", h.toString(CryptoJS.enc.Utf8), false);
  xhs.onreadystatechange = function () {
    if(xhs.readyState === 4) {
      if(xhs.status === 200 || xhs.status == 0) {
        var file = xhs.responseText;
        data = JSON.parse(file);
      }
    }
  }
  xhs.send(null);
}
requestJSON();
