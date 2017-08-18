var horario = document.getElementById('horario');
var sala = document.getElementById('local');
var links = document.getElementById('links');

horario.innerHTML = data.horario;
sala.innerHTML = data.sala;

links.innerHTML="<ul>"
data.links.forEach(function(link){
  links.innerHTML += "<li>"+link+"</li>";
});
links.innerHTML+="</ul>";
