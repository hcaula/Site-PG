var periodo = document.getElementById('periodo');
var professor = document.getElementById('professor');
var horario = document.getElementById('horario');
var sala = document.getElementById('local');
var links = document.getElementById('links');
var main = document.getElementById('main');
var monitores = document.getElementById('monitores');
var referencias = document.getElementById('referencias');
var avaliacao = document.getElementById('avaliacao');
var pontosExtras = document.getElementById('pontosExtras');

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

s = '';
document.getElementById('dates').innerHTML += '';
var days = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
cronograma.cronograma.forEach(function(evento){

  var today = new Date();
  var eventDate = new Date(evento.data);

  var clas;
  if(eventDate < today) {
    clas = 'dataPassada';
  }
  else {
    clas = 'dataFutura';
  }

  if(evento.is_important) style="width:auto;border: thin solid white;margin-top: 20px;padding: 10px;border-radius:20px;text-align: center;font-size: 20px;";
  else style='';

  var month;
  if(eventDate.getUTCMonth() < 9) month = '0' + (eventDate.getUTCMonth() + 1);
  else month = (eventDate.getUTCMonth() + 1);

  var data = days[eventDate.getDay()] + ", " + eventDate.getUTCDate()+'/'+month+'/'+eventDate.getUTCFullYear();

  s += "<li class='"+clas+"' style='"+style+"'><h3 class='par'>" + data + " | " + evento.horario+"</h3>";
  s += "<h4>"+evento.sala+"</h4>";
  s += "<p class='answer'>"+evento.descricao+"</p></li>"
});
document.getElementById('dates').innerHTML += s;

console.log(data.metodo_avaliacao.unidades);
s = '';
data.metodo_avaliacao.unidades.forEach(function(unidade, i){
  s += "<div class='title' id='pontosExtrasTitle'>" + (i+1) + "ª Unidade</div><br>"
  s += "<ul>";
  unidade.forEach(function(avaliacao, k) {
    var extra = '';
    if (avaliacao.is_extra) extra = " (extra) ";
    s += "<li><b>" + avaliacao.descricao + "</b>" + extra + " - " + (avaliacao.nota).toFixed(1) + "</li>"
  });
  s += "</ul>"
})
avaliacao.innerHTML = s;


var theChosenOne = function(option){
  if(option != chosen){
    document.getElementById(chosen).hidden = true;
    document.getElementById('choose'+chosen).classList.remove('active');
    chosen = option;
    document.getElementById(option).hidden = false;
    document.getElementById('choose'+chosen).classList.add('active');
  }
}

var extraPointsHTML = function () {
  pontosExtras.innerHTML += extraPoints;
}
