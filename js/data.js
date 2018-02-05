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
var projetos_unidades = document.getElementById('projetos_unidades');

var chosen = 'main';

/*
 * SITE INFO
*/
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

/*
 * MONITORES
*/

var s = '';
data.monitores.forEach(function(monitor,i){
  s += '<div class="col-sm-6 col-md-3"><div class="thumbnail"><img src="'+monitor.imagem+'"><div class="caption" id="caption"><h3 id="name">'+monitor.nome+'</h3><h5><i>'+monitor.login+'</i></h5><a href="'+monitor.facebook+'"id="facebook"><img id="fbicon" src="./assets/imgs/facebook.png"></a></div></div></div>';
});
document.getElementById('monitores').innerHTML += s;

/*
 * CRONOGRAMA
*/

s = '';
document.getElementById('dates').innerHTML += '';
var days = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
cronograma.cronograma.forEach(function(evento){

  var today = new Date();

  var clas;
  var month;
  var date;

  var eventDate;

  if (evento.data) {
    eventDate = new Date(evento.data);

    if(eventDate < today) clas = 'dataPassada';
    else clas = 'dataFutura';

    if(eventDate.getUTCMonth() < 9) month = '0' + (eventDate.getUTCMonth() + 1);
    else month = (eventDate.getUTCMonth() + 1);

    date = days[eventDate.getDay()] + ", " + eventDate.getUTCDate()+'/'+month+'/'+eventDate.getUTCFullYear();
  } else date = "Data a definir"

  if(evento.is_important) style="width:auto;border: thin solid white;margin-top: 20px;padding: 10px;border-radius:20px;text-align: center;font-size: 20px;";
  else style='';

  var horario = evento.horario;
  var sala = evento.sala;
  var descricao = evento.descricao;

  if (!horario) horario = "Horário a definir";
  if (!sala) sala = "Local a definir";
  if (!descricao) descricao = "";

  s += "<li class='"+clas+"' style='"+style+"'><h3 class='par'>" + date + " | " + horario+"</h3>";
  s += "<h4>"+sala+"</h4>";
  s += "<p class='answer'>"+descricao+"</p></li>"
});
document.getElementById('dates').innerHTML += s;

/*
 * MÉTODO DE AVALIAÇÃO
*/

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

/*
 * PROJETOS
*/
var proj_unidades = projetos.unidades;
var s = '';
var ordinal = ['Individual', 'Dupla', 'Trio', 'Quarteto', 'Quinteto', 'Sexteto', 'Septeto', 'Octeto', 'Noneto', 'Decteto'];
for(var param in proj_unidades) {
  var un = proj_unidades[param];
  s += "<div class='proj_unidades'>"
  s += "<h3 class='title' style='border-bottom: thin solid white; padding-bottom: 10px'>" + param + "ª Unidade - " + un.descricao + "</h3>"
  s += "<h4 class='title'>Motivação</h4>";
  s += "<p class='proj_params'><i>"+un.motivacao+"</i></p>"

  if(un.especificacao) {
    s += "<h4 class='title'>Especificações do projeto</h4>";
    s += "<p class='proj_params'><a href='"+un.especificacao+"'>Documentação</a></p>"
  }

  s += "<h4 class='title'>Temas</h4>";

  s += "<div class='proj_indice'>";
  un.temas.forEach(function(tema){
    s += "• <a style='margin-bottom:15px' href='#"+tema.tema+"'>"+tema.tema + ": " + tema.nome +"</a><br>";
  });
  s += "</div>";

  un.temas.forEach(function(tema){
    s += "<div class='proj_tema' id='"+tema.tema+"'>";
    s += "<h4 style='color: white'>- " + tema.tema + ": " + tema.nome + "</h4>";
    s += "<p style='color: white'><i>" + ordinal[tema.tamanho_grupo-1] + "</i>";

    if(tema.integrantes && tema.integrantes.length > 0) {
      s += " | "
      tema.integrantes.forEach(function(integrante, i){
        s += integrante;
        if(i < tema.integrantes.length-1) s += ", ";
      });
    }
    s += "</p><br>";

    s += "<p style='color: white'>" + tema.descricao + "</p>";
    s += "</div>";
  });
  s += "</div>"
}
projetos_unidades.innerHTML += s;

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
