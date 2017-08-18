var body = document.getElementById('body');
var html = body.innerHTML;
body.innerHTML =
'<div style="height:100vh; width: 100vw; background-color: black"> <h1 style="text-align:center"> Carregando <i class="fa fa-circle-o-notch fa-spin"></i></h1></div>'

body.onload = function(){
  body.innerHTML = html;
};
