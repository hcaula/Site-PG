var body = document.getElementById('body');
var html = body.innerHTML;

var style = "style='height: 100vh; width: 100vw; background-color:#989da5;padding-top: 48vh;text-align:center'";
var paragraph = "<p style='font-size:30px'><i class='fa fa-circle-o-notch fa-spin'></i></p>"
paragraph += "<p><i>IF680 - Processamento Gráfico</i></p>"


body.innerHTML = '<div '+style+'>'+paragraph+'</div>';

body.onload = function(){
  body.innerHTML = html;
  data.monitores.forEach(function(monitor,i){
    var s = '<div class="col-sm-6 col-md-3"><div class="thumbnail"><img src="'+monitor.img+'"><div class="caption"><h3 id="name">'+monitor.nome+'</h3><h5><i>'+monitor.login+'</i></h5><a href="'+monitor.face+'"id="facebook"><img id="fbicon" src="../assets/imgs/facebook.png"></a></div></div></div>'
    document.getElementById('monitores').innerHTML += s;
  });
};
