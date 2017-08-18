var periodo = document.getElementById('periodo');
var professor = document.getElementById('professor');
var horario = document.getElementById('horario');
var sala = document.getElementById('local');
var links = document.getElementById('links');
var main = document.getElementById('main');
var monitores = document.getElementById('monitores');

var chosen = 'main';

periodo.innerHTML = data.periodo;
professor.innerHTML = data.professor;
horario.innerHTML = data.horario;
sala.innerHTML = data.sala;

links.innerHTML="<ul>"
data.links.forEach(function(link){
  links.innerHTML += "<li>"+link+"</li>";
});
links.innerHTML+="</ul>";

var theChosenOne = function(option){
  if(option != chosen){
    document.getElementById(chosen).hidden = true;
    if(option == 'index') {
      chosen = 'main';
    } else if(option == 'monitores'){
      chosen = 'monitores';
    }
    document.getElementById(chosen).hidden = false;
  }
}
