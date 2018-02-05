var file, periodo, horario, sala, professor;
var monitores = [], links = [], referencias = [];
var data = {};
var cronograma = {};
var projetos = {};

/* Função para requisitar siteInfo */
var requestJSON = function(){
  var xhs = new XMLHttpRequest();
  xhs.open("GET", "https://api.github.com/gists/88537bf7372495ced9bbb854d24ccef2", false);
  // xhs.open("GET", "https://api.github.com/gists/f41afdcb2da2801ee7f0f21c5a4a2aba", false);
  xhs.onreadystatechange = function () {
    if(xhs.readyState === 4) {
      if(xhs.status === 200 || xhs.status == 0) {
        var file = xhs.responseText;
        data = JSON.parse(file);
        data = JSON.parse(data.files.siteInfo.content);
        requestCalendar();
      }
    }
  }
  xhs.send(null);
}

/* Função para requisitar cronograma */
var requestCalendar = function(){
  var xhs = new XMLHttpRequest();
  xhs.open('GET', "https://api.github.com/gists/cb2372cf46da4a5b4b1d5a59478cea68", false);
  xhs.onreadystatechange = function() {
    if(xhs.readyState === 4) {
      if(xhs.status === 200 || xhs.status == 0) {
        var file = xhs.responseText;
        cronograma = JSON.parse(file);
        cronograma = JSON.parse(cronograma.files.cronograma.content);
      }
    }
  }
  projetos = {
    "unidades": {
      "1": {
        "descricao": "Curvas de Bézier",
        "motivacao": "Estudar Curvas de Bézier e sua importância em Computação Gráfica, assim como por em prática conhecimentos adquiridos na sala de aula.",
        "especificacao": "https://drive.google.com/drive/u/1/folders/0Bw0tUCMUoMKWUzI2bnRITnZ4Tmc",
        "temas": [
          {
            "tamanho_grupo": 1,
            "tema": "P1-1",
            "nome": "Curvas de Bézier Interativas",
            "descricao": "O usuário entra via mouse com os pontos de controle de curva(s) de Bézier, podendo criar mais de uma curva, que podem ser modificadas independente da ordem que foram construídas.",
            "integrantes": []
          },
          {
            "tamanho_grupo": 1,
            "tema": "P1-2",
            "nome": "Visualização Interativa das Primeiras Derivadas de uma Curva de Bézier",
            "descricao": "O sistema desenha a curva correspondente. Em seguida o sistema oferece um botão que permite que o usuário navegue sobre a curva, mostrando os vetores da primeira e da segunda derivadas.",
            "integrantes": []
          },
          {
            "tamanho_grupo": 1,
            "tema": "P1-8",
            "nome": "Curva de Bézier de Imagens ∆",
            "descricao": "O usuário entra com uma quantidade arbitrária de imagens de mesmo tamanho (arquivo BMP). O sistema deve mostrar numa janela as imagens produzidas pela avaliação de De Casteljau para uma curva de Bézier onde os pontos de controle são as imagens entradas pelo usuário. Ou seja, a cor do pixel (i,j) é obtido ao se utilizar uma avaliação de De Casteljau que toma como pontos de controle, as cores dos pixels (i,j) das diversas imagens, obedecendo, claro, a ordem em que as imagens foram admitidas. As avaliações são feitas para uma certa quantidade escolhida pelo usuário, e são mostradas a uma taxa de quadros por segundo, também escolhida pelo usuário.",
            "integrantes": []
          },
          {
            "tamanho_grupo": 3,
            "tema": "P3-12",
            "nome": "O cão chupando manga msm pq é de três pessoas",
            "descricao": "Aqui vc descreve a parada toda. Pode ser uma string longa"
          }
        ]
      },
      "2": {
        "descricao": "Ambientes 3D",
        "motivacao": "Estudar como simulações de pontos em um ambiente 3D são traduzidas para 2D, assim como diferentes parâmetros de iluminação e câmera alteram o resultado final.",
        "especificacao": "https://drive.google.com/drive/u/1/folders/0Bw0tUCMUoMKWUzI2bnRITnZ4Tmc",
        "temas": [
          {
            "tamanho_grupo": 4,
            "tema": "P4-11",
            "nome": "O cão chupando manga msm pq é o segundo projeto",
            "descricao": "Aqui vc descreve a parada toda. Pode ser uma string longa"
          },
          {
            "tamanho_grupo": 6,
            "tema": "P6-1",
            "nome": "O cão chupando manga pra caralho pq é de seis pessoas",
            "descricao": "Aqui vc descreve a parada toda. Pode ser uma string longa"
          }
        ]
      }
    }
  }

  xhs.send(null);
}
requestJSON();
