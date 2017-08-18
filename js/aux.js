var body = document.getElementById('body');
var html = body.innerHTML;
body.innerHTML =
'<div style="height: 100vh; width: 100vw; background-color: white;"> Carregando <i class="fa fa-circle-o-notch fa-spin"></i></div>'

console.log(body.style);


body.onload = function(){
  body.innerHTML = html;
};
