# Site do curso de Processamento Gráfico - IF680

## Instruções para monitores
Para facilitar a atualização da página semestral, existe um arquivo ```data.txt``` com as informações
atualizadas da cadeira. A cada renovação de período, basta atualizar este arquivo e o site
estará em dia.

A fim de evitar erros de entrada no arquivo, siga o seguinte formato:

```
Período
Professor
Horário das aulas
Sala
(para cada link)
<a href="https://seulinkaqui.com"> Descrição do link (ex.: Grupo do Facebook) </a> | (próximo link)
Quantidade de monitores
(para cada monitor, faça)
Nome do monitor
Link do Facebook
Caminho da imagem (em relação à root do projeto - o caminho é .assets/imgs/monitores/)
```

Peço perdão pelo pequeno uso de HTML no arquivo. Porém, foi a melhor alternativa para manter um
maior dinamismo para novos tipos de links.

## Instruções para testes locais
Navegadores normalmente não permitem acessos a arquivos locais, por motivos de segurança.
Uma alternativa é desbloquear essa restrição do seu navegador - porém, isso deixaria seu
computador propenso a ataques.<br />
Portanto, é preferível rodar um pequeno servidor para testar o HTML localmente. A forma
mais simples é utilizar o módulo já instalado com o Python, o Simple HTTP Server.

- Windows (não testado)

```
cd [diretorio do projeto]
python -m http.server
```

- Linux/Mac (Python já vem instalado)

```
cd [diretorio do projeto]
python -m SimpleHTTPServer
```

### Curso
Universidade Federal de Pernambuco <br />
Centro de Informática <br />
Gradução em Ciência da Computação <br />
Processamento Gráfico

### Autor
- Luiz Henrique Tavares Caúla | lhtc@cin.ufpe.br
