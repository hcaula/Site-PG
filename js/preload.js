var body = document.getElementById('body');
var html = body.innerHTML;
var frases = [
  "<i>É trivial</i> - MELO, Silvio",
  "<i>O negócio é fechar os dois projetos</i> - Algum aluno do CIn",
  "<i>Só falta PG pra eu me formar</i> - Algum aluno desesperado do CIn"
]

var style = "style='height: 100vh; width: 100vw; background-color:#989da5;padding-top: 48vh;text-align:center'";
var paragraph = "<p style='font-size:30px'><i class='fa fa-circle-o-notch fa-spin'></i></p>"
var random = frases[parseInt((Math.random() * 3))];
paragraph += "<p><i>IF680 - Processamento Gráfico</i></p><br>" + random;

body.innerHTML = '<div '+style+'>'+paragraph+'</div>';

body.onload = function(){
  body.innerHTML = html;
}
