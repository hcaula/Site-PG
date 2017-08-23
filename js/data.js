var periodo = document.getElementById('periodo');
var professor = document.getElementById('professor');
var horario = document.getElementById('horario');
var sala = document.getElementById('local');
var links = document.getElementById('links');
var main = document.getElementById('main');
var monitores = document.getElementById('monitores');
var referencias = document.getElementById('referencias');

var chosen = 'main';

periodo.innerHTML = data.periodo;
professor.innerHTML = data.professor;
horario.innerHTML = data.dia + " | " + data.horario;
sala.innerHTML = data.sala;

links.innerHTML="<ul>";
data.links.forEach(function(link){
  links.innerHTML += "<li><a href='"+link.link+"'>"+link.descricao+"</li>"
});
links.innerHTML+="</ul>";

referencias.innerHTML="<ul>"
data.referencias.forEach(function(referencia) {
  referencias.innerHTML += "<li>"+referencia.autor+", <i>"+referencia.titulo+"</i>, "+referencia.info,"</li>";
});
referencias.innerHTML+="</ul>";

var s = '';
data.monitores.forEach(function(monitor,i){
  s += '<div class="col-sm-6 col-md-3"><div class="thumbnail"><img src="'+monitor.imagem+'"><div class="caption"><h3 id="name">'+monitor.nome+'</h3><h5><i>'+monitor.login+'</i></h5><a href="'+monitor.facebook+'"id="facebook"><img id="fbicon" src="../assets/imgs/facebook.png"></a></div></div></div>';
});
document.getElementById('monitores').innerHTML += s;

var theChosenOne = function(option){
  if(option != chosen){
    document.getElementById(chosen).hidden = true;
    document.getElementById('choose'+chosen).classList.remove('active');
    chosen = option;
    document.getElementById(option).hidden = false;
    document.getElementById('choose'+chosen).classList.add('active');
  }
}
