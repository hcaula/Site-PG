var periodo = document.getElementById('periodo');
var professor = document.getElementById('professor');
var horario = document.getElementById('horario');
var sala = document.getElementById('local');
var links = document.getElementById('links');
var main = document.getElementById('main');
var monitores = document.getElementById('monitores');
var referencias = document.getElementById('referencias');
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
cronograma.cronograma.forEach(function(evento){
  var today = new Date();
  var eventDate = new Date(evento.data + " " + evento.horario);
  var style = 'style= ';
  if(eventDate < today) style+="'color: grey; text-decoration: line-through;";
  else style += "'color: inherit'";

  var data = eventDate.getDay()+'/'+eventDate.getMonth()+'/'+eventDate.getUTCFullYear();

  s += "<li "+style+"><h3 class='par'>" + data + " | " + evento.horario+"</h3>";
  s += "<h4>"+evento.sala+"</h4>";
  s += "<p class='answer'>"+evento.descricao+"</p></li>"
});
document.getElementById('dates').innerHTML += s;


var theChosenOne = function(option){
  if(option != chosen){
    document.getElementById(chosen).hidden = true;
    document.getElementById('choose'+chosen).classList.remove('active');
    chosen = option;
    document.getElementById(option).hidden = false;
    document.getElementById('choose'+chosen).classList.add('active');
  }
}


var extraPoints = '';
var renderChart = function() {
  var dataPoints = [];
  document.getElementById('pontosExtras').innerHTML = 'Pontos extras: ';
  data.metodo_avaliacao.unidades.forEach(function(unidade, u){
    unidade.forEach(function(avaliacao){
      if(!avaliacao.is_extra) {
        var chartLabel = {};
        chartLabel.label = avaliacao.descricao;
        chartLabel.indexLabelFontColor = 'white';
        chartLabel.y = avaliacao.nota;
        dataPoints.push(chartLabel);
      } else {
        document.getElementById('pontosExtras').innerHTML = "<li>" + avaliacao.descricao + " - " + avaliacao.nota + " pontos - " + (u+1) + "ª Unidade </li>";
      }
    });
  });
  var chart = new CanvasJS.Chart("avaliacao", {
    backgroundColor: null,
    axisY:{
      valueFormatString: "#.#"
    },
    data: [
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "doughnut",
      radius:  "80%",
      dataPoints: dataPoints
    }
    ]
  });
  // extraPointsHTML()
  chart.render();
}

var extraPointsHTML = function () {
  pontosExtras.innerHTML += extraPoints;
}
