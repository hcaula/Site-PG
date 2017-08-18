var body = document.getElementById('body');
var html = body.innerHTML;

var style = "style='height: 100vh; width: 100vw; background-color:#989da5;padding-top: 48vh;text-align:center'";
var paragraph = "<p style='font-size:30px'><i class='fa fa-circle-o-notch fa-spin'></i></p>"
paragraph += "<p style='font-family: tecnico'><i>IF680 - Processamento Gráfico</i></p>"


body.innerHTML = '<div '+style+'>'+paragraph+'</div>';

body.onload = function(){
  body.innerHTML = html;
};
