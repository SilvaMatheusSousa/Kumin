// ==UserScript==
// @name         Agendadorcomandos
// @description  Planejador e agendador de comandos
// @version      1.0
// @author       Silva
// @match        https://**/game.php?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
  // Verifica se a URL contém parâmetros específicos de 'screen'
  function checkUrlAndExecute() {
    if (window.location.href.includes("screen=memo") ||
        window.location.href.includes("screen=place") ||
        window.location.href.includes("screen=map")) {

      // Define uma variável global como verdadeira (pode ser usada mais tarde)
      window.as = true;

      // Faz a requisição AJAX para carregar o script externo
      $.ajax({
        type: "GET",
        url: "https://gistcdn.githack.com/ImKumin/a481b860c1823c2c8b82d98c2963e0a6/raw/Auto%2520Command%2520Sender%2520T.js",
        dataType: "script",  // Espera um arquivo JavaScript
        cache: false  // Desativa o cache
      });
    }
  }

  // Executa a função para verificar a URL
  checkUrlAndExecute();
})();
