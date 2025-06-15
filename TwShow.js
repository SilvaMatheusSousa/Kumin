// ==UserScript==
// @name         Tw - Show
// @namespace    http://tampermonkey.net/
// @version      9.2
// @include      https://**game.php**
// @description  Automação para TW
// @icon         https://i.imgur.com/7WgHTT8.gif
// @require http://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @updateURL	https://raw.githubusercontent.com/Gazeleiro/projetoalbertenobre/refs/heads/main/TWSHOW.js
// @downloadURL https://raw.githubusercontent.com/Gazeleiro/projetoalbertenobre/refs/heads/main/TWSHOW.js
// @author       Gaspar
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
//================================================================= Config inicial newba Albert =================================================================//
//localStorage.setItem('AbreCaptcha', 'N'); ///// Config Abrir captcha
//localStorage.setItem('AlarmeCaptcha', 'N'); // Config Alarme
//localStorage.setItem('DeslogaConta', 'S'); // Config deslogar


//localStorage.setItem('Ctt', 'S'); ///////////// Script Construção para desativar altere para N e ativar alyere para S
//localStorage.setItem('check' + 0, 'true'); // ativar rotação do ed Principal, para ativar altere para true e desativar altere para false
//localStorage.setItem('box0', 'true'); ////// opção q mostra a checkbox marcada para desmarcar altere para false e para marcar altere para true
//localStorage.setItem('Redp', 60); /////////// tempo ativo na Construção >. tempo referido em minutos, no caso q esta ficará 2 minutos

//localStorage.setItem('ColetaAtiva', 'S'); /////// Script Coleta para desativar altere para N e ativar alyere para S
//localStorage.setItem('PeriodoColeta', 5); ///// tempo q executará o script de Coleta novamente em minutos
//localStorage.setItem('unlocks', 'S'); ///////// Desbloquear coletas Ativo, para desativar altere S para N
//localStorage.setItem('check' + 2, 'true'); // ativar rotação da Coleta, para ativar altere para true e desativar altere para false
//localStorage.setItem('box2', 'true'); ////// opção q mostra a checkbox marcada para desmarcar altere para false e para marcar altere para true
//localStorage.setItem('Coleta', 2); ///////// tempo ativo na Coleta >. tempo referido em minutos, no caso q esta ficará 2 minutos
const unidadesparacoleta = ["spear"]; // mode completo ['spear'], use para adicionar ou remover a q n quer q envia para coleta
//localStorage.setItem("unitsToAvoid", JSON.stringify(unidadesparacoleta));
//localStorage.setItem('MaxsendColeta', 600); //maximo de tropas a enviar na coleta, alterne até achar a quantia q lhe convem.

//localStorage.setItem('UparPaladinoAtiva', 'S'); //// Script treinamento para desativar altere para N e ativar alyere para S
//localStorage.setItem('PeriodoUparPaladino', 10); // tempo q executará o script de enviar os pala para treinar
//localStorage.setItem('check' + 6, 'true'); ////// ativar rotação no treinamento do paladino, para ativar altere false para true
//localStorage.setItem('box6', 'true'); ////////// opção q mostra a checkbox marcada para desmarcar altere para false e para marcar altere para true
//localStorage.setItem('CupPala', 2); //////////// tempo em que ficará na aba Treino do pala >. tempo referido em minutos, no caso q esta ficará 2 minutos

//localStorage.setItem('RecruitAtivo', 'S'); //// Script recrutamento para desativar altere para N e ativar alyere para S
//localStorage.setItem('check' + 8, 'true'); // ativar rotação do Recrutamento, para ativar altere para true e desativar altere para false
//localStorage.setItem('box8', 'true'); ////// opção q mostra a checkbox marcada para desmarcar altere para false e para marcar altere para true
//localStorage.setItem('Rrecruit', 2); /////// tempo ativo no Recrutamento >. tempo referido em minutos, no caso q esta ficará 2 minutos

///////////// config recrute inicial ////////////////////
// Array de objetos com as unidades e seus valores
const unitsWithValues = [
    { name: 'lancas', value: 700 },
    { name: 'espadas', value: 400 },
    { name: 'barbaros', value: 0 },
    { name: 'arcos', value: 0 },
    { name: 'espioes', value: 510 },
    { name: 'arqueirosmontados', value: 0 },
    { name: 'cavalosleves', value: 0 },
    { name: 'cavalospesados', value: 0 },
    { name: 'arietes', value: 0 },
    { name: 'catapas', value: 0 }
];
////////////////////////////////////////////////// config Up de vila /////////////////////////////////////////////////////////////////////////////////////////////////
let modelosSalvos = JSON.parse(localStorage.getItem("modelosConstrucao")) || {};
let modeloCtt = [
 {
    "edificio": "main",
    "nivel": 1
  },
  {
    "edificio": "farm",
    "nivel": 1
  },
  {
    "edificio": "storage",
    "nivel": 1
  },
  {
    "edificio": "statue",
    "nivel": 1
  },
  {
    "edificio": "hide",
    "nivel": 1
  },
  {
    "edificio": "place",
    "nivel": 1
  },
  {
    "edificio": "wood",
    "nivel": 1
  },
  {
    "edificio": "stone",
    "nivel": 1
  },
  {
    "edificio": "iron",
    "nivel": 1
  },
  {
    "edificio": "wood",
    "nivel": 2
  },
  {
    "edificio": "stone",
    "nivel": 2
  },
  {
    "edificio": "iron",
    "nivel": 2
  },
  {
    "edificio": "storage",
    "nivel": 2
  },
  {
    "edificio": "farm",
    "nivel": 2
  },
  {
    "edificio": "storage",
    "nivel": 3
  },
  {
    "edificio": "farm",
    "nivel": 3
  },
  {
    "edificio": "main",
    "nivel": 2
  },
  {
    "edificio": "main",
    "nivel": 3
  },
  {
    "edificio": "barracks",
    "nivel": 1
  },
  {
    "edificio": "barracks",
    "nivel": 2
  },
  {
    "edificio": "market",
    "nivel": 1
  },
  {
    "edificio": "market",
    "nivel": 2
  },
  {
    "edificio": "hide",
    "nivel": 2
  },
  {
    "edificio": "hide",
    "nivel": 3
  },
  {
    "edificio": "wall",
    "nivel": 1
  },
  {
    "edificio": "wall",
    "nivel": 2
  },
  {
    "edificio": "wood",
    "nivel": 3
  },
  {
    "edificio": "stone",
    "nivel": 3
  },
  {
    "edificio": "iron",
    "nivel": 3
  },
  {
    "edificio": "barracks",
    "nivel": 3
  },
  {
    "edificio": "wood",
    "nivel": 4
  },
  {
    "edificio": "stone",
    "nivel": 4
  },
  {
    "edificio": "iron",
    "nivel": 4
  },
  {
    "edificio": "main",
    "nivel": 4
  },
  {
    "edificio": "storage",
    "nivel": 4
  },
  {
    "edificio": "farm",
    "nivel": 4
  },
  {
    "edificio": "wall",
    "nivel": 3
  },
  {
    "edificio": "main",
    "nivel": 5
  },
  {
    "edificio": "market",
    "nivel": 3
  },
  {
    "edificio": "wood",
    "nivel": 5
  },
  {
    "edificio": "stone",
    "nivel": 5
  },
  {
    "edificio": "wood",
    "nivel": 6
  },
  {
    "edificio": "stone",
    "nivel": 6
  },
  {
    "edificio": "iron",
    "nivel": 5
  },
  {
    "edificio": "wood",
    "nivel": 7
  },
  {
    "edificio": "stone",
    "nivel": 7
  },
  {
    "edificio": "iron",
    "nivel": 6
  },
  {
    "edificio": "wood",
    "nivel": 8
  },
  {
    "edificio": "stone",
    "nivel": 8
  },
  {
    "edificio": "iron",
    "nivel": 7
  },
  {
    "edificio": "storage",
    "nivel": 5
  },
  {
    "edificio": "storage",
    "nivel": 6
  },
  {
    "edificio": "farm",
    "nivel": 5
  },
  {
    "edificio": "market",
    "nivel": 4
  },
  {
    "edificio": "market",
    "nivel": 5
  },
  {
    "edificio": "wood",
    "nivel": 9
  },
  {
    "edificio": "stone",
    "nivel": 9
  },
  {
    "edificio": "iron",
    "nivel": 8
  },
  {
    "edificio": "wood",
    "nivel": 10
  },
  {
    "edificio": "stone",
    "nivel": 10
  },
  {
    "edificio": "storage",
    "nivel": 7
  },
  {
    "edificio": "farm",
    "nivel": 6
  },
  {
    "edificio": "storage",
    "nivel": 8
  },
  {
    "edificio": "main",
    "nivel": 6
  },
  {
    "edificio": "main",
    "nivel": 7
  },
  {
    "edificio": "main",
    "nivel": 8
  },
  {
    "edificio": "barracks",
    "nivel": 4
  },
  {
    "edificio": "barracks",
    "nivel": 5
  },
  {
    "edificio": "hide",
    "nivel": 4
  },
  {
    "edificio": "wall",
    "nivel": 4
  },
  {
    "edificio": "wall",
    "nivel": 5
  },
  {
    "edificio": "market",
    "nivel": 6
  },
  {
    "edificio": "market",
    "nivel": 7
  },
  {
    "edificio": "wood",
    "nivel": 11
  },
  {
    "edificio": "stone",
    "nivel": 11
  },
  {
    "edificio": "iron",
    "nivel": 9
  },
  {
    "edificio": "smith",
    "nivel": 1
  },
  {
    "edificio": "smith",
    "nivel": 2
  },
  {
    "edificio": "wood",
    "nivel": 12
  },
  {
    "edificio": "stone",
    "nivel": 12
  },
  {
    "edificio": "iron",
    "nivel": 10
  },
  {
    "edificio": "main",
    "nivel": 9
  },
  {
    "edificio": "main",
    "nivel": 10
  },
  {
    "edificio": "smith",
    "nivel": 3
  },
  {
    "edificio": "smith",
    "nivel": 4
  },
  {
    "edificio": "smith",
    "nivel": 5
  },
  {
    "edificio": "stable",
    "nivel": 1
  },
  {
    "edificio": "stable",
    "nivel": 2
  },
  {
    "edificio": "stable",
    "nivel": 3
  },
  {
    "edificio": "farm",
    "nivel": 7
  },
  {
    "edificio": "storage",
    "nivel": 9
  },
  {
    "edificio": "storage",
    "nivel": 10
  },
  {
    "edificio": "farm",
    "nivel": 8
  },
  {
    "edificio": "wood",
    "nivel": 13
  },
  {
    "edificio": "stone",
    "nivel": 13
  },
  {
    "edificio": "wood",
    "nivel": 14
  },
  {
    "edificio": "stone",
    "nivel": 14
  },
  {
    "edificio": "iron",
    "nivel": 11
  },
  {
    "edificio": "main",
    "nivel": 11
  },
  {
    "edificio": "main",
    "nivel": 12
  },
  {
    "edificio": "storage",
    "nivel": 11
  },
  {
    "edificio": "storage",
    "nivel": 12
  },
  {
    "edificio": "farm",
    "nivel": 9
  },
  {
    "edificio": "farm",
    "nivel": 10
  },
  {
    "edificio": "storage",
    "nivel": 13
  },
  {
    "edificio": "storage",
    "nivel": 14
  },
  {
    "edificio": "storage",
    "nivel": 15
  },
  {
    "edificio": "wood",
    "nivel": 15
  },
  {
    "edificio": "stone",
    "nivel": 15
  },
  {
    "edificio": "iron",
    "nivel": 12
  },
  {
    "edificio": "wood",
    "nivel": 16
  },
  {
    "edificio": "stone",
    "nivel": 16
  },
  {
    "edificio": "iron",
    "nivel": 13
  },
  {
    "edificio": "farm",
    "nivel": 11
  },
  {
    "edificio": "storage",
    "nivel": 16
  },
  {
    "edificio": "hide",
    "nivel": 5
  },
  {
    "edificio": "wood",
    "nivel": 17
  },
  {
    "edificio": "stone",
    "nivel": 17
  },
  {
    "edificio": "stone",
    "nivel": 18
  },
  {
    "edificio": "iron",
    "nivel": 14
  },
  {
    "edificio": "market",
    "nivel": 8
  },
  {
    "edificio": "market",
    "nivel": 9
  },
  {
    "edificio": "market",
    "nivel": 10
  },
  {
    "edificio": "main",
    "nivel": 13
  },
  {
    "edificio": "main",
    "nivel": 14
  },
  {
    "edificio": "main",
    "nivel": 15
  },
  {
    "edificio": "wood",
    "nivel": 18
  },
  {
    "edificio": "storage",
    "nivel": 17
  },
  {
    "edificio": "storage",
    "nivel": 18
  },
  {
    "edificio": "iron",
    "nivel": 15
  },
  {
    "edificio": "wood",
    "nivel": 19
  },
  {
    "edificio": "stone",
    "nivel": 19
  },
  {
    "edificio": "iron",
    "nivel": 16
  },
  {
    "edificio": "storage",
    "nivel": 19
  },
  {
    "edificio": "stone",
    "nivel": 20
  },
  {
    "edificio": "stone",
    "nivel": 21
  },
  {
    "edificio": "wood",
    "nivel": 20
  },
  {
    "edificio": "iron",
    "nivel": 17
  },
  {
    "edificio": "wood",
    "nivel": 21
  },
  {
    "edificio": "iron",
    "nivel": 18
  },
  {
    "edificio": "stone",
    "nivel": 22
  },
  {
    "edificio": "wood",
    "nivel": 22
  },
  {
    "edificio": "iron",
    "nivel": 19
  },
  {
    "edificio": "iron",
    "nivel": 20
  },
  {
    "edificio": "main",
    "nivel": 16
  },
  {
    "edificio": "main",
    "nivel": 17
  },
  {
    "edificio": "main",
    "nivel": 18
  },
  {
    "edificio": "farm",
    "nivel": 12
  },
  {
    "edificio": "farm",
    "nivel": 13
  },
  {
    "edificio": "farm",
    "nivel": 14
  },
  {
    "edificio": "storage",
    "nivel": 20
  },
  {
    "edificio": "farm",
    "nivel": 15
  },
  {
    "edificio": "stone",
    "nivel": 23
  },
  {
    "edificio": "wood",
    "nivel": 23
  },
  {
    "edificio": "iron",
    "nivel": 21
  },
  {
    "edificio": "storage",
    "nivel": 21
  },
  {
    "edificio": "storage",
    "nivel": 22
  },
  {
    "edificio": "market",
    "nivel": 11
  },
  {
    "edificio": "market",
    "nivel": 12
  },
  {
    "edificio": "market",
    "nivel": 13
  },
  {
    "edificio": "main",
    "nivel": 19
  },
  {
    "edificio": "main",
    "nivel": 20
  },
  {
    "edificio": "stone",
    "nivel": 24
  },
  {
    "edificio": "wood",
    "nivel": 24
  },
  {
    "edificio": "stone",
    "nivel": 25
  },
  {
    "edificio": "iron",
    "nivel": 22
  },
  {
    "edificio": "iron",
    "nivel": 23
  },
  {
    "edificio": "wood",
    "nivel": 25
  },
  {
    "edificio": "iron",
    "nivel": 24
  },
  {
    "edificio": "storage",
    "nivel": 23
  },
  {
    "edificio": "storage",
    "nivel": 24
  },
  {
    "edificio": "storage",
    "nivel": 25
  },
  {
    "edificio": "farm",
    "nivel": 16
  },
  {
    "edificio": "farm",
    "nivel": 17
  },
  {
    "edificio": "wood",
    "nivel": 26
  },
  {
    "edificio": "storage",
    "nivel": 26
  },
  {
    "edificio": "stone",
    "nivel": 26
  },
  {
    "edificio": "hide",
    "nivel": 6
  },
  {
    "edificio": "hide",
    "nivel": 7
  },
  {
    "edificio": "hide",
    "nivel": 8
  },
  {
    "edificio": "hide",
    "nivel": 9
  },
  {
    "edificio": "hide",
    "nivel": 10
  },
  {
    "edificio": "wall",
    "nivel": 6
  },
  {
    "edificio": "wall",
    "nivel": 7
  },
  {
    "edificio": "wall",
    "nivel": 8
  },
  {
    "edificio": "wall",
    "nivel": 9
  },
  {
    "edificio": "wall",
    "nivel": 10
  },
  {
    "edificio": "wall",
    "nivel": 11
  },
  {
    "edificio": "wall",
    "nivel": 12
  },
  {
    "edificio": "storage",
    "nivel": 27
  },
  {
    "edificio": "storage",
    "nivel": 28
  },
  {
    "edificio": "market",
    "nivel": 14
  },
  {
    "edificio": "market",
    "nivel": 15
  },
  {
    "edificio": "market",
    "nivel": 16
  },
  {
    "edificio": "market",
    "nivel": 17
  },
  {
    "edificio": "market",
    "nivel": 18
  },
  {
    "edificio": "market",
    "nivel": 19
  },
  {
    "edificio": "market",
    "nivel": 20
  },
  {
    "edificio": "storage",
    "nivel": 29
  },
  {
    "edificio": "storage",
    "nivel": 30
  },
  {
    "edificio": "market",
    "nivel": 21
  },
  {
    "edificio": "market",
    "nivel": 22
  },
  {
    "edificio": "stone",
    "nivel": 27
  },
  {
    "edificio": "market",
    "nivel": 23
  },
  {
    "edificio": "market",
    "nivel": 24
  },
  {
    "edificio": "market",
    "nivel": 25
  },
  {
    "edificio": "wood",
    "nivel": 27
  },
  {
    "edificio": "stone",
    "nivel": 28
  },
  {
    "edificio": "iron",
    "nivel": 25
  },
  {
    "edificio": "wood",
    "nivel": 28
  },
  {
    "edificio": "iron",
    "nivel": 26
  },
  {
    "edificio": "wood",
    "nivel": 29
  },
  {
    "edificio": "stone",
    "nivel": 29
  },
  {
    "edificio": "iron",
    "nivel": 27
  },
  {
    "edificio": "stone",
    "nivel": 30
  },
  {
    "edificio": "wood",
    "nivel": 30
  },
  {
    "edificio": "iron",
    "nivel": 28
  },
  {
    "edificio": "smith",
    "nivel": 6
  },
  {
    "edificio": "smith",
    "nivel": 7
  },
  {
    "edificio": "smith",
    "nivel": 8
  },
  {
    "edificio": "smith",
    "nivel": 9
  },
  {
    "edificio": "smith",
    "nivel": 10
  },
  {
    "edificio": "garage",
    "nivel": 1
  },
  {
    "edificio": "garage",
    "nivel": 2
  },
  {
    "edificio": "garage",
    "nivel": 3
  },
  {
    "edificio": "barracks",
    "nivel": 6
  },
  {
    "edificio": "barracks",
    "nivel": 7
  },
  {
    "edificio": "barracks",
    "nivel": 8
  },
  {
    "edificio": "barracks",
    "nivel": 9
  },
  {
    "edificio": "barracks",
    "nivel": 10
  },
  {
    "edificio": "stable",
    "nivel": 4
  },
  {
    "edificio": "stable",
    "nivel": 5
  },
  {
    "edificio": "garage",
    "nivel": 4
  },
  {
    "edificio": "garage",
    "nivel": 5
  },
  {
    "edificio": "smith",
    "nivel": 11
  },
  {
    "edificio": "smith",
    "nivel": 12
  },
  {
    "edificio": "barracks",
    "nivel": 11
  },
  {
    "edificio": "barracks",
    "nivel": 12
  },
  {
    "edificio": "barracks",
    "nivel": 13
  },
  {
    "edificio": "barracks",
    "nivel": 14
  },
  {
    "edificio": "barracks",
    "nivel": 15
  },
  {
    "edificio": "stable",
    "nivel": 6
  },
  {
    "edificio": "stable",
    "nivel": 7
  },
  {
    "edificio": "stable",
    "nivel": 8
  },
  {
    "edificio": "stable",
    "nivel": 9
  },
  {
    "edificio": "stable",
    "nivel": 10
  },
  {
    "edificio": "wall",
    "nivel": 13
  },
  {
    "edificio": "wall",
    "nivel": 14
  },
  {
    "edificio": "wall",
    "nivel": 15
  },
  {
    "edificio": "farm",
    "nivel": 18
  },
  {
    "edificio": "farm",
    "nivel": 19
  },
  {
    "edificio": "farm",
    "nivel": 20
  },
  {
    "edificio": "farm",
    "nivel": 21
  },
  {
    "edificio": "farm",
    "nivel": 22
  },
  {
    "edificio": "garage",
    "nivel": 6
  },
  {
    "edificio": "garage",
    "nivel": 7
  },
  {
    "edificio": "garage",
    "nivel": 8
  },
  {
    "edificio": "barracks",
    "nivel": 16
  },
  {
    "edificio": "barracks",
    "nivel": 17
  },
  {
    "edificio": "barracks",
    "nivel": 18
  },
  {
    "edificio": "stable",
    "nivel": 11
  },
  {
    "edificio": "stable",
    "nivel": 12
  },
  {
    "edificio": "stable",
    "nivel": 13
  },
  {
    "edificio": "stable",
    "nivel": 14
  },
  {
    "edificio": "barracks",
    "nivel": 19
  },
  {
    "edificio": "stable",
    "nivel": 15
  },
  {
    "edificio": "barracks",
    "nivel": 20
  },
  {
    "edificio": "garage",
    "nivel": 9
  },
  {
    "edificio": "garage",
    "nivel": 10
  },
  {
    "edificio": "barracks",
    "nivel": 21
  },
  {
    "edificio": "barracks",
    "nivel": 22
  },
  {
    "edificio": "stable",
    "nivel": 16
  },
  {
    "edificio": "stable",
    "nivel": 17
  },
  {
    "edificio": "stable",
    "nivel": 18
  },
  {
    "edificio": "smith",
    "nivel": 13
  },
  {
    "edificio": "smith",
    "nivel": 14
  },
  {
    "edificio": "smith",
    "nivel": 15
  },
  {
    "edificio": "smith",
    "nivel": 16
  },
  {
    "edificio": "smith",
    "nivel": 17
  },
  {
    "edificio": "smith",
    "nivel": 18
  },
  {
    "edificio": "smith",
    "nivel": 19
  },
  {
    "edificio": "smith",
    "nivel": 20
  },
  {
    "edificio": "snob",
    "nivel": 1
  },
  {
    "edificio": "barracks",
    "nivel": 23
  },
  {
    "edificio": "garage",
    "nivel": 11
  },
  {
    "edificio": "garage",
    "nivel": 12
  },
  {
    "edificio": "iron",
    "nivel": 29
  },
  {
    "edificio": "iron",
    "nivel": 30
  },
  {
    "edificio": "wall",
    "nivel": 16
  },
  {
    "edificio": "wall",
    "nivel": 17
  },
  {
    "edificio": "wall",
    "nivel": 18
  },
  {
    "edificio": "wall",
    "nivel": 19
  },
  {
    "edificio": "wall",
    "nivel": 20
  },
  {
    "edificio": "stable",
    "nivel": 19
  },
  {
    "edificio": "stable",
    "nivel": 20
  },
  {
    "edificio": "barracks",
    "nivel": 24
  },
  {
    "edificio": "barracks",
    "nivel": 25
  },
  {
    "edificio": "farm",
    "nivel": 23
  },
  {
    "edificio": "farm",
    "nivel": 24
  },
  {
    "edificio": "farm",
    "nivel": 25
  },
  {
    "edificio": "farm",
    "nivel": 26
  },
  {
    "edificio": "farm",
    "nivel": 27
  },
  {
    "edificio": "farm",
    "nivel": 28
  },
  {
    "edificio": "farm",
    "nivel": 29
  },
  {
    "edificio": "farm",
    "nivel": 30
  },
  {
    "edificio": "garage",
    "nivel": 13
  },
  {
    "edificio": "garage",
    "nivel": 14
  },
  {
    "edificio": "garage",
    "nivel": 15
  }
];
modelosSalvos["Up Recs + Armz e Merc P Cunhagem"] = modeloCtt;
localStorage.setItem("modelosConstrucao", JSON.stringify(modelosSalvos));
localStorage.setItem("modeloAldeiaSelecionado", 'Up Recs + Armz e Merc P Cunhagem');
const checksave = [
        "autoBuild",
        "upFarm",
        "upStorage",
        "get_rewards",
    ];
localStorage.setItem("autoBuild", 'true'); /////////////// Ativa a Ctt automatica altere para false(desativado) e para true(ativado)
localStorage.setItem("upFarm", 'true'); ////////////////// Ativa a prioridade da população
localStorage.setItem("upStorage", 'false'); ////////////// Ativa a prioridade do mercado
localStorage.setItem("get_rewards", 'true'); /////////// Ativa a coletar as recompensas
localStorage.setItem("value-priority-farm", 15); ////// valor em $ q prioriza o up da fazenda caso falte espaço de população
localStorage.setItem("value-priority-storage", 95); // valor em % q prioriza o up do armazem caso tenha mais recursos q a %
localStorage.setItem("maxQueueSize", 5); //////////// maximo de filas para Ctt
localStorage.setItem("get_rewards_temp", 2); /////// tempo para abrir e coletar as recompensas
function carregarconfigCheckb() {
        checksave.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
            const savedValue = localStorage.getItem(id);
                if (element.type === "checkbox") {
                    element.checked = savedValue === "true";
                }
                }
        });
    }carregarconfigCheckb();
////////////////////////////////////////////////////////////// Priguicinha ///////////////////////////////////////////////////////////////////////////////////////////
    unitsWithValues.forEach(unit => {
    localStorage.setItem(unit.name, unit.value);
});
function converteDate(dataString) {
    // Divide a data no formato DD/MM/YYYY
    const [dia, mes, ano] = dataString.split("/").map(Number);

    // Cria um objeto Date (mês no JavaScript é indexado a partir de 0)
    return new Date(ano, mes - 1, dia);
}
    let acess = 0;
function processaruser(ip) {
let ips = [
    ["Zigaeezz - 19/03/2025"]
];
let agoracheck = new Date();
ips.forEach(([checar]) => {
    const [users, data] = checar.split(" - ");
    let user = ip;
    if (users === user) {
        const validade = converteDate(data); // Converte a string de data para um objeto Date
        const diffs = validade - agoracheck; // Diferença em milissegundos
        const diffDias = Math.floor(diffs / (1000 * 60 * 60 * 24)); // Converte para dias

        if ((diffDias+1) > 3) {
          acess = 1; // plano ativo
        }else if((diffDias+1) > 0 && (diffDias+1) < 4){
           acess = 3; // plano expirado
            localStorage.setItem('diffDias', (diffDias+1));
}
        else{
           acess = 2; // plano expirado
}
    }
    else{
       acess = 0; // sem plano
}
});}
   // Seleciona a primeira linha da tabela
   const link = document.querySelectorAll('a[href*="info_player"]');
if (link) {
    const segundoLink = link[1];
    const nick = segundoLink.textContent;
    localStorage.setItem('user', nick);
  processaruser(nick)
}
    let $Html2 = `<div border = "4px" class="quest" width = "25px" class="Myicon" id="MygScripts" style="background-image: url(https://i.postimg.cc/x1cBfkgX/02501.jpg);">
    </div>`;
    var Insert = document.getElementById('new_quest');
    // Adiciona o HTML antes de cada elemento 'menu-item'
    Insert.insertAdjacentHTML('afterend', $Html2);
// Função para abrir a popup com base na ID do elemento clicado
function openPopup() {
    let user = localStorage.getItem('user');
    // Criar o contêiner da janela flutuante
    var popupContainer = document.createElement('div');
    popupContainer.classList.add('popup_container');
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '50%';
    popupContainer.style.left = '50%';
    popupContainer.style.width = '2000px';
    popupContainer.style.height = '1500px';
    popupContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Cor de fundo semi-transparente para simular um fundo escurecido
    popupContainer.style.transform = 'translate(-50%, -50%)';
    popupContainer.style.zIndex = '9999'; // Definir um índice z alto para garantir que a janela flutuante esteja acima de outros elementos
    // Adicionar o botão de fechar
     let $html3 = `<div id="ra-map-coord-grabber" class="popup_box_container" style="left: 51%; top: 50%; transform: translate(-50%, -50%);"><div align="center" class="popup_box slim show" id="popup_box_quest" style="width: 1105px;"><a id="popup_box_close" class="popup_box_close tooltip-delayed" data-title="Fechado :: atalho de teclado: <b>Esc</b>">&nbsp;</a>
     <div class="popup_box_content" style="height: 500px;"><div style="width: 100% !important; display: flex;">
     <div style=" !important; padding: 7px; float: left; width: 55%;"><h2> - Gerente Scripts - </h2><h3>Olá ${user}</h3></div>
     <div class="vis divContentAuxiliares">     <h3><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/oldnoble.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> Configurações de Anti-Captcha </h3>     <a class="tooltipDiv" style="font-size: 9pt; float: none;" href="#"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">Este script estará rodando em todas as telas do TribalWars. Ele não realiza a solução do captcha apenas irá interagir com o botão de inicializar teste de Captcha disposto pelo TribalWars. Caso não esteja dando alarme consulte o documento de explicação dos scripts, pois é necessário configurar liberação de som para a pagina de seu mundo.</span>Como Usar e Onde Usar?</a>     <div id="divConfigsCaptcha">        <div class="vis divOpcaoAuxiliar">           <table width="100%">              <tbody>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/hidingp.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o script irá realizar a abertura dos botões de realização de teste de captcha. Tanto o botão lateral como o botão central que aparece de tempos em tempos para o usuário de acordo com seu nível de navegações.</span></div> Realizar Abertura de Captcha:<select id="AbreCaptcha" style="width: 54px;">                          <option value="S">Sim</option>                          <option value="N">Não</option>                       </select>                    </td>                 </tr>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/fchurch.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se irá realizar o disparo de alarmes para o usuário após 10 segundos que não reconhecer a solução do captcha.</span></div> Realizar Alarme após 10 Seg:<select id="AlarmeCaptcha" style="width: 57px;">                          <option value="S">Sim</option>                          <option value="N">Não</option>                       </select>                    </td>                 </tr>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/speed.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se irá realizar a navegação para fora do jogo após 60 segundos que não reconhecer a solução do captcha.</span></div> Deslogar Conta após 60 Seg:<select id="DeslogaConta" style="width: 59px;">                          <option value="S">Sim</option>                          <option value="N">Não</option>                       </select>                    </td>                 </tr>              </tbody>           </table>        </div>     </div>  </div>
     </div>

     <div><table width="97%"><tbody><tr><td colspan="4"><div style="float: left; margin: 5px;"><input class="btn am-form-element" type="button" id="BTNSalvarConfig" value="Salvar Configurações" style="width: 300px; height: 36px;"></div></td>
     <td colspan="4" align="center"><a class="tooltipDiv" target="_blank" style="font-size: 9pt; float: none;"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">A intensão é diminuir a quantidade de abas abertas.Selecione as Funções que vc quer rotacionar na mesma Aba eo tempo desejado q permanecerá naquela Função</span>- Info CheckBoxes -           </a></td>
     </tr><tr>
     <td class="box" ><label><input type="checkbox" id="box0" class="CheckRot" name="checkbox0">Up Vila</label><select id="Redp" style="width: 55px;"><option value="2">2 Minutos</option><option value="5">5 Minutos</option><option value="10">10 minutos</option><option value="20">20 minutos</option><option value="30">30 minutos</option><option value="60">1 Hora</option><option value="120">2 Horas</option><option value="180">3 Horas</option><option value="240">4 Hora</option></select></td>
     <td class="box" ><label><input type="checkbox" id="box1" class="CheckRot" name="checkbox1">Farm</label><select id="Rfarm" style="width: 55px;"><option value="2">2 Minutos</option><option value="5">5 Minutos</option><option value="15">15 Minutos</option><option value="20">20 Minutos</option><option value="30">30 Minutos</option><option value="60">1 Hora</option></select></td>
     <td class="box" ><label><input type="checkbox" id="box2" class="CheckRot" name="checkbox2">Coleta</label><select id="Coleta" style="width: 55px;"><option value="2">2 Minutos</option><option value="5">5 Minutos</option><option value="15">15 Minutos</option><option value="20">20 Minutos</option><option value="30">30 Minutos</option><option value="60">1 Hora</option></select></td>
     <td class="box" ><label><input type="checkbox" id="box3" class="CheckRot" name="checkbox3">Coleta M</label><select id="ColetaM" style="width: 55px;"><option value="2">2 Minutos</option><option value="5">5 Minutos</option><option value="15">15 Minutos</option><option value="20">20 Minutos</option><option value="30">30 Minutos</option><option value="60">1 Hora</option></select></td>
     <td class="box" ><label><input type="checkbox" id="box4" class="CheckRot" name="checkbox4">Puxar Rec</label><select id="CPuxar" style="width: 55px;"><option value="2">2 Minutos</option><option value="5">5 Minutos</option><option value="15">15 Minutos</option><option value="20">20 Minutos</option><option value="30">30 Minutos</option><option value="60">1 Hora</option></select></td>
     <td class="box" ><label><input type="checkbox" id="box5" class="CheckRot" name="checkbox5">Balancear</label><select id="CBalance" style="width: 55px;"><option value="2">2 Minutos</option><option value="5">5 Minutos</option><option value="15">15 Minutos</option><option value="20">20 Minutos</option><option value="30">30 Minutos</option><option value="60">1 Hora</option></select></td>
     <td class="box" ><label><input type="checkbox" id="box6" class="CheckRot" name="checkbox6">Up Pala</label><select id="CupPala" style="width: 55px;"><option value="2">2 Minutos</option><option value="5">5 Minutos</option><option value="15">15 Minutos</option><option value="20">20 Minutos</option><option value="30">30 Minutos</option><option value="60">1 Hora</option></select></td>
     <td class="box" ><label><input type="checkbox" id="box7" class="CheckRot" name="checkbox7">Cunhar M</label><select id="CCMass" style="width: 55px;"><option value="2">2 Minutos</option><option value="5">5 Minutos</option><option value="15">15 Minutos</option><option value="20">20 Minutos</option><option value="30">30 Minutos</option><option value="60">1 Hora</option></select></td>
     <td class="box" ><label><input type="checkbox" id="box8" class="CheckRot" name="checkbox8">Recrutar</label><select id="Rrecruit" style="width: 55px;"><option value="2">2 Minutos</option><option value="5">5 Minutos</option><option value="15">15 Minutos</option><option value="20">20 Minutos</option><option value="30">30 Minutos</option><option value="60">1 Hora</option></select></td>
     </tr></tbody></table></div>


     <div style="width: 100% !important; display: flex;">
     <div class="vis divContentAuxiliares"><h3><span class="icon" style="background: url(https://dsbr.innogamescdn.com/asset/95eda994/graphic/buildings/mid/main3.png); width: 30px; height: 30px; vertical-align: middle; line-height: normal;"></span> Config. Up Vila</h3>     <a class="tooltipDiv" target="_blank" style="font-size: 9pt; float: none;" href="/game.php?&screen=main"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"><span class="tooltiptext">Este Script tem o intuito de upar sua Vila automaticamente seguindo a ordem de ctt configurada. Ao clicar neste texto será aberto uma nova guia no local onde este script é utilizado.</span>Como Usar e Onde Usar?</a><div id="divConfigsCtt"><div class="vis divOpcaoAuxiliar"><table width="100%">              <tbody>                 <tr>                    <td style="white-space: nowrap; height: 20px;"><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pflaggreen.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o Script está ativo e irá rodar em sua determinada tela.</span></div> Script Ativo:<select id="Ctt" style="width: 100px;"><option value="S">Sim</option><option value="N">Não</option></select></td></tr></tbody></table></div></div></div>
     <div class="vis divContentAuxiliares"><h3><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/axe.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span>Configurações de Recrutamento</h3>     <a style="font-size: 9pt; float: none;" target="_blank" href="/game.php?screen=train" class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">Este script é utilizado na tela da "Recrutamento".Ao clicar neste texto será aberto uma nova guia no local onde este script é utilizado.</span>Como Usar e Onde Usar?</a>     <div id="divConfigsAgendador">        <div class="vis divOpcaoAuxiliar"><table width="100%">              <tbody>                 <tr>                    <td style="white-space: nowrap; height: 20px;"><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pflaggreen.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span><div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o Script estáativo e irá rodar em sua determinada tela.</span></div> Script Ativo:                       <select id="RecruitAtivo" style="width: 100px;"><option value="S">Sim</option><option value="N">Não</option></select>                    </td>                 </tr> </tbody>           </table>        </div>        <div style="float: left; margin-top: 10px;">      </div>     </div>  </div>
     <div class="vis divContentAuxiliares">     <h3><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/oldaxe.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> Configurações de Agendador</h3>     <a style="font-size: 9pt; float: none;" target="_blank" href="/game.php?screen=place" class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">Este script é utilizado na tela da "Praça de Reunião", é necessário cadastrar o agendamento de comandos para o momento que se deseja a chegada do comando, é necessário deixar uma praça aberta que esta irá abrir as novas guias para envio de comando. Por esse motivo é necessário configurar a abertura de pop-up de acordo com documentação do script. Ao clicar neste texto será aberto uma nova guia no local onde este script é utilizado.</span>Como Usar e Onde Usar?</a>     <div id="divConfigsAgendador">        <div class="vis divOpcaoAuxiliar">           <table width="100%">              <tbody>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pflaggreen.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o Script está ativo e irá rodar em sua determinada tela.</span></div> Script Ativo:                       <select id="AgendadorAtivo" style="width: 100px;"><option value="S">Sim</option><option value="N">Não</option></select>                    </td>                 </tr>              </tbody>           </table>        </div>        <div style="float: left; margin-top: 10px;"><input class="btn am-form-element" type="button" id="BTNApagarComandos" value="Apagar Comandos Agendados" style="width: 232px; height: 30px; margin: 0px;">        </div>     </div>  </div>
     </div>

     <div style="width: 100% !important; display: flex;">
     <div class="vis divContentAuxiliares"><h3><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pally.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> Configurações de Upar Paladino </h3>     <a class="tooltipDiv" target="_blank" style="font-size: 9pt; float: none;" href="/game.php?screen=statue&amp;mode=overview"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">Este script é utilizado na tela de visualização dos seus Paladinos. Ao clicar neste texto será aberto uma nova guia no local onde este script é utilizado.</span>Como Usar e Onde Usar?</a>     <div id="">        <div class="vis divOpcaoAuxiliar">           <table width="100%">              <tbody>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pflaggreen.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o Script está ativo e irá rodar em sua determinada tela.</span></div> Script Ativo:<select id="UparPaladinoAtiva" style="width: 100px;">                          <option value="S">Sim</option>                          <option value="N">Não</option>                       </select>                    </td>                 </tr>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pclock.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica a cada quanto tempo o Script irá executar em sua determinada tela.</span></div> Periodicidade:<select id="PeriodoUparPaladino" style="width: 90px;">                          <option value="10">10 Minutos</option>                          <option value="20">20 Minutos</option>                          <option value="30">30 Minutos</option>                          <option value="45">45 Minutos</option>                          <option value="60" selected="">1 Hora</option>                          <option value="120">2 Horas</option>                          <option value="180">3 Horas</option>                          <option value="240">4 Horas</option>                          <option value="300">5 Horas</option>                          <option value="360">6 Horas</option>                       </select>                    </td>                 </tr>              </tbody>           </table>        </div>     </div>  </div>
     <div class="vis divContentAuxiliares">     <h3><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/fchurch.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> Configurações de Etiquetador</h3>     <a class="tooltipDiv" target="_blank" style="font-size: 9pt; float: none;" href="/game.php?screen=overview_villages&amp;mode=incomings&subtype=attacks"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">Este script é utilizado na tela de Comandos Chegando, basta manter o script Ativo e uma guia aberta neste endereço e ele irá atualizar automaticamente etiquetando a unidade mais lenta e informando o horário de BT. Caso seja detectado um Nobre este irá soar um alarme para que o jogador seja informado. Ao clicar neste texto será aberto uma nova guia no local onde este script é utilizado. Tome cuidado pois o script irá executar no momento que for aberto a nova guia.</span>Como Usar e Onde Usar?</a>     <div id="divConfigsEtiquetador">        <div class="vis divOpcaoAuxiliar">           <table width="100%">              <tbody>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pflaggreen.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o Script está ativo e irá rodar em sua determinada tela.</span></div> Script Ativo:<select id="EtiquetadorAtiva" style="width: 100px;">                          <option value="S">Sim</option>                          <option value="N">Não</option>                       </select>                    </td>                 </tr> <tr><td style="white-space: nowrap; height: 20px;"><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/fchurch.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se irá realizar o disparo de alarmes para o usuário caso seja etiquetado Nobres</span></div>Realizar Alarme:<select id="Alarmenobre" style="width: 57px;"><option value="S">Sim</option><option value="N">Não</option></select></td></tr>             </tbody>           </table>        </div>     </div>  </div>
     <div class="vis divContentAuxiliares"><h3><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/speed.png); width: 36px; height: 30px; vertical-align: middle;
     line-height: normal;"></span> Config. de Assistente Farm</h3>     <a style="font-size: 9pt; float: none;" target="_blank" href="/game.php?screen=am_farm" class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">Este script é utilizado na tela de "Assistente de Farm", é necessário cadastrar a configuração de acordo como deseja realizar os envios de modelos e quebras de muralha, assim como as configurações de tempo para envio destes comandos e configurações de antibot. Ao clicar neste texto será aberto uma nova guia no local onde este script é utilizado.</span>Como Usar e Onde Usar?</a>     <div id="divConfigsAssistenteFarm">        <div class="vis divOpcaoAuxiliar">           <table width="100%">              <tbody>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pflaggreen.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o Script está ativo e irá rodar em sua determinada tela.</span></div> Script Ativo:                       <select id="AssistenteFarmAtivo" style="width: 100px;"><option value="S">Sim</option><option value="N">Não</option></select>                    </td>                 </tr>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pblueflag.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica qual tipo de seleção de grupo que o Script irá utilizar, caso seja selecionado o tipo Salvo, será utilizado o grupo que for salvo no assistente de saque, desta forma é possível utilizar as aldeias de um grupo fixo salvo em memória enquanto que este grupo não é selecionado manualmente no jogo, caso seja utilizado o valor Atual, será utilizado o grupo que estiver selecionado no momento do uso do Script.</span></div> Seleção de Grupo:                       <select id="AssistenteFarmTipoGrupo" style="width: 100px;">                          <option value="S">Salvo</option>                          <option value="A">Atual</option>                       </select>                    </td>                 </tr>              </tbody>           </table>        </div>        <div style="float: left; margin-top: 10px;"><input class="btn am-form-element" type="button" id="BTNApagarConfigFarm" value="Apagar Configurações" style="width: 232px; height: 30px; margin: 0px;">        </div>     </div>  </div>
     </div>


     <div style="width: 100% !important; display: flex;">
     <div class="vis divContentAuxiliares"><h3><span class="icon" style="background: url(https://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/coin.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> Configurações de Cunhagem</h3>     <a style="font-size: 9pt; float: none;" target="_blank" href="/game.php?screen=snob" class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">Este script é utilizado na tela da "Academia" que deseja cunhar moedas, ele irá executar sempre que houver ao menos a quantidade de moedas desejadas para cunhar, ele irá realizar um refresh de segurança de acordo com a configuração indicada. Este script é recomendado o uso juntamente com o uso do script de Puxar Recursos, pois poderá puxar os recursos de varias aldeias para apenas uma otimizando o uso de itens e bandeiras de redução de custo de moedas. Ao clicar neste texto será aberto uma nova guia no local onde este script é utilizado. Tome cuidado pois o script irá executar no momento que for aberto a nova guia.</span>Como Usar e Onde Usar?</a>     <div id="divConfigsCunhagem">        <div class="vis divOpcaoAuxiliar">           <table width="100%">              <tbody>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pflaggreen.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o Script está ativo e irá rodar em sua determinada tela.</span></div> Script Ativo:                       <select id="CunhagemAtiva" style="width: 100px;">                          <option value="S">Sim</option>                          <option value="N">Não</option>                       </select>                    </td>                 </tr>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pcalculator.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica com quantas moedas será realizado a cunhagem, em caso do armazem não suportar a quantidade de moedas ele irá cunhar com a capacidade total do armazem.</span></div> Qtde Moedas Cunhar:<select id="MoedasCunhagem" style="width: 78px;">                          <option value="3">3 Moedas</option>                          <option value="4">4 Moedas</option>                          <option value="5" selected="">5 Moedas</option>                          <option value="6">6 Moedas</option>                          <option value="7">7 Moedas</option>                          <option value="8">8 Moedas</option>                          <option value="9">9 Moedas</option>                          <option value="10">10 Moedas</option></select>                    </td>                 </tr>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pclock.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se a tela será atualizada a cada 1 minuto fixo em caso de não possuir moedas para cunhar ou em um tempo aleatório entre 2 a 3 minutos. OBS: A cunhagem sempre irá ocorrer quando o script reconhecer a quantidade de moedas desejadas para cunhagem, este tempo é para refresh de segurança.</span></div> Tipo de Atualização:                       <select id="CunhagemRandomica" style="width: 87px;">                          <option value="F">Fixo</option><option value="R" selected="">Randômico</option></select></td></tr></tbody></table></div></div></div>
     <div class="vis divContentAuxiliares"><h3><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/oldlc.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> Configurações de Coleta </h3>     <a class="tooltipDiv" target="_blank" style="font-size: 9pt; float: none;" href="/game.php?screen=place&mode=scavenge"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">Este script é utilizado na tela de "Coletando" disponível na Praça de Reunião. Ao clicar neste texto será aberto uma nova guia no local onde este script é utilizado. Tome cuidado pois o script irá executar no momento que for aberto a nova guia.</span>Como Usar e Onde Usar?</a>     <div id="divConfigsColeta">        <div class="vis divOpcaoAuxiliar">           <table width="100%">              <tbody>   <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pflaggreen.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o Script está ativo e irá rodar em sua determinada tela.</span></div> Script Ativo:<select id="ColetaAtiva" style="width: 100px;">                          <option value="S">Sim</option>                          <option value="N">Não</option>                       </select>                    </td>                 </tr>        <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pclock.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica a cada quanto tempo o Script irá executar em sua determinada tela.</span></div> Periodicidade:                      <select id="PeriodoColeta" style="width: 90px;">                          <option value="5">5 Minutos</option>                          <option value="10">10 Minutos</option>                          <option value="15">15 Minutos</option>                          <option value="20">20 Minutos</option>                          <option value="30">30 Minutos</option>                          <option value="45">45 Minutos</option>                          <option value="60" selected="">1 Hora</option>                          <option value="120">2 Horas</option>                          <option value="180">3 Horas</option><option value="240">4 Horas</option>                          <option value="300">5 Horas</option>                          <option value="360">6 Horas</option>                          <option value="420">7 Horas</option><option value="480">8 Horas</option>                       </select>                    </td>                 </tr><tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/hidingp.png); width: 36px; height: 30px;vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Estecampo indica se o Script Desbloqueará as coletas bloqueadas</span></div> Desbloquear:<select id="unlocks" style="width: 100px;"><option value="S">Sim</option><option value="N">Não</option>                       </select>                    </td>                 </tr>        <tr></tbody></table></div></div></div>
     <div class="vis divContentAuxiliares"><h3><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/res.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> Config. Balanceamento</h3>     <a class="tooltipDiv" target="_blank" style="font-size: 9pt; float: none;" href="/game.php?screen=market&amp;mode=traders"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">Este script é utilizado na tela de "Estado dos Comerciantes" disponível no Mercado, ele irá executar o script autenticado e enviar recursos entre suas aldeias divididas em grupos de Clusters, balanceando assim seu armazem, melhorando a evolução de aldeias menores. Ao clicar neste texto será aberto uma nova guia no local onde este script é utilizado. Tome cuidado pois o script irá executar no momento que for aberto a nova guia.</span>Como Usar e Onde Usar?</a>     <div id="divConfigsBalanceamento">        <div class="vis divOpcaoAuxiliar">           <table width="100%">              <tbody>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pflaggreen.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o Script está ativo e irá rodar em sua determinada tela.</span></div> Script Ativo:<select id="BalanceamentoAtiva" style="width: 100px;">                          <option value="S">Sim</option>                          <option value="N">Não</option>                       </select>                    </td>                 </tr>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pclock.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica a cada quanto tempo o Script irá executar em sua determinada tela.</span></div> Periodicidade:                       <select id="PeriodoBalanceamento" style="width: 90px;">                          <option value="15">15 Minutos</option>                          <option value="20">20 Minutos</option>                          <option value="30">30 Minutos</option>                          <option value="45">45 Minutos</option>                          <option value="60" selected="">1 Hora</option>                          <option value="120">2 Horas</option>                          <option value="180">3 Horas</option>                          <option value="240">4 Horas</option>                          <option value="300">5 Horas</option>                          <option value="360">6 Horas</option>                       </select>                    </td>                 </tr>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/speed.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica a quantidade de campos permitido para envio de recursos.</span></div> Quant Clusters:                       <input id="QuantiClusters" type="text" name="input" class="target-input-field target-input-autocomplete ui-autocomplete-input" data-type="player" value="" autocomplete="off" data-ignore-single-exact-match="1" style="width: 55px;">                    </td>                 </tr>              </tbody>           </table>        </div>     </div>  </div>
     </div>

     <div style="width: 100% !important; display: flex;">
     <div class="vis divContentAuxiliares"><h3><span class="icon" data-title="Modelo de construções ativo" style="background: url(https://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/coin.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> Config. de Cunhagem Em Massa</h3>     <a style="font-size: 9pt; float: none;" target="_blank" href="/game.php?screen=snob&amp;mode=coin&amp;from=-1" class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">Este script é utilizado na tela da "Academia" na opção de Cunhagem em Massa, ele irá executar sempre que houver ao menos a quantidade de moedas desejadas para cunhar. Ao clicar neste texto será aberto uma nova guia no local onde este script é utilizado. Tome cuidado pois o script irá executar no momento que for aberto a nova guia.</span>Como Usar e Onde Usar?</a>     <div id="divConfigsCunhagemMassa">        <div class="vis divOpcaoAuxiliar">           <table width="100%">              <tbody>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pflaggreen.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o Script está ativo e irá rodar em sua determinada tela.</span></div> Script Ativo:<select id="CunhagemMassaAtiva" style="width: 100px;">                          <option value="S">Sim</option>                          <option value="N">Não</option>                       </select>                    </td>                 </tr><tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pclock.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica a cada quanto tempo o Script irá executar em sua determinada tela.</span></div> Periodicidade:<select id="PeriodoCunhaMassa" style="width: 90px;">                          <option value="60" selected="">1 Hora</option>                          <option value="120">2 Horas</option>                          <option value="180">3 Horas</option>                          <option value="240">4 Horas</option>                          <option value="300">5 Horas</option>                          <option value="360">6 Horas</option>                       </select>                    </td>                 </tr>              </tbody>           </table>        </div>     </div>  </div>
     <div class="vis divContentAuxiliares"><h3><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/oldlc.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> Config. de Coleta em Massa </h3>     <a class="tooltipDiv" target="_blank" style="font-size: 9pt; float: none;" href="/game.php?screen=place&amp;mode=scavenge_mass"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">Este script é utilizado na tela de "Coleta em Massa" disponível na Praça de Reunião, ele irá executar o script autenticado de Shinko To Kuma e utilizar as configurações previamente salvas neste, caso você não utilizou este script é possível adicionar este a sua barra de acesso rápido e assim cadastrar um padrão de coleta. Ao clicar neste texto será aberto uma nova guia no local onde este script é utilizado. Tome cuidado pois o script irá executar no momento que for aberto a nova guia.</span>Como Usar e Onde Usar?</a>     <div id="divConfigsColetaMassa">        <div class="vis divOpcaoAuxiliar">           <table width="100%">              <tbody>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pflaggreen.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o Script está ativo e irá rodar em sua determinada tela.</span></div> Script Ativo:<select id="ColetaMassaAtiva" style="width: 100px;">                          <option value="S">Sim</option>                          <option value="N">Não</option>                       </select>                    </td>                 </tr>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pclock.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica a cada quanto tempo o Script irá executar em sua determinada tela.</span></div> Periodicidade:                      <select id="PeriodoColetaMassa" style="width: 90px;">                          <option value="5">5 Minutos</option>                          <option value="10">10 Minutos</option>                          <option value="15">15 Minutos</option>                          <option value="20">20 Minutos</option>                          <option value="30">30 Minutos</option>                          <option value="45">45 Minutos</option>                          <option value="60" selected="">1 Hora</option>                          <option value="120">2 Horas</option>                          <option value="180">3 Horas</option>                          <option value="240">4 Horas</option>                          <option value="300">5 Horas</option>                          <option value="360">6 Horas</option>                          <option value="420">7 Horas</option>                          <option value="480">8 Horas</option>                       </select>                    </td>                 </tr>              </tbody>           </table>        </div>     </div>  </div>
     <div class="vis divContentAuxiliares"><h3><span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/market.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> Config. de Puxar Recursos </h3>     <a class="tooltipDiv" target="_blank" style="font-size: 9pt; float: none;" href="/game.php?screen=market&amp;mode=call"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13" style="margin-botton: 1px;"> <span class="tooltiptext">Este script é utilizado na tela de "Pedido" disponível no Mercado, ele irá executar o script autenticado de Shinko To Kuma e enviar recursos balanceados para cunhagem na aldeia de destino. Ao clicar neste texto será aberto uma nova guia no local onde este script é utilizado. Tome cuidado pois o script irá executar no momento que for aberto a nova guia.</span>Como Usar e Onde Usar?</a>     <div id="divConfigsPuxarRecursos">        <div class="vis divOpcaoAuxiliar">           <table width="100%">              <tbody>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pflaggreen.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica se o Script está ativo e irá rodar em sua determinada tela. OBS: Após informada a coordenada e realizado o cálculo o script irá aguardar 1 minuto para começar o envio de recursos.</span></div> Script Ativo:<select id="PuxarRecursosAtiva" style="width: 100px;"><option value="S">Sim</option>                          <option value="N">Não</option>                       </select>                    </td>                 </tr>                                  <tr>                    <td style="white-space: nowrap; height: 20px;">                        <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/phome.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica a coordenada para puxagem de recursos. OBS: Após informada a coordenada e realizado o cálculo o script irá aguardar 1 minuto para começar o envio de recursos.</span></div> Coordenada Destino:                        <input id="CoordenadaPuxarRecursos" type="text" name="input" class="target-input-field target-input-autocomplete ui-autocomplete-input" data-type="player" value="" autocomplete="off" data-ignore-single-exact-match="1" placeholder="123|456" style="width: 40px;">                    </td>                 </tr>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/pclock.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica a cada quanto tempo o Script irá executar em sua determinada tela. OBS: Após informada a coordenada e realizado o cálculo o script irá aguardar 1 minuto para começar o envio de recursos.</span></div> Periodicidade:<select id="PeriodoPuxarRecursos" style="width: 90px;">                          <option value="30">30 Minutos</option>                          <option value="45">45 Minutos</option>                          <option value="60" selected="">1 Hora</option>                          <option value="120">2 Horas</option>                          <option value="180">3 Horas</option>                          <option value="240">4 Horas</option>                          <option value="300">5 Horas</option>                          <option value="360">6 Horas</option>                          <option value="720">12 Horas</option>                      </select>                    </td>                 </tr>                 <tr>                    <td style="white-space: nowrap; height: 20px;">                       <span class="icon" style="background: url(http://i286.photobucket.com/albums/ll102/TWPiaf/New%20Quickbar/speed.png); width: 36px; height: 30px; vertical-align: middle; line-height: normal;"></span> <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext" style="white-space: normal;">Este campo indica a quantidade de campos permitido para envio de recursos. OBS: Após informada a coordenada e realizado o cálculo o script irá aguardar 1 minuto para começar o envio de recursos.</span></div> Distância Máxima:                       <input id="DistanciaPuxarRecursos" type="text" name="input" class="target-input-field target-input-autocomplete ui-autocomplete-input" data-type="player" value="" autocomplete="off" data-ignore-single-exact-match="1" style="width: 56px;">                    </td>                 </tr>              </tbody>           </table>        </div>     </div>  </div>
     </div>

     <div style="width: 100% !important; display: flex;">
     </div>


</div>
<style>.divContentAuxiliares { margin: 5px !important; padding: 7px; float: left; width: 46%; }  .divOpcaoAuxiliar { margin: 10px 0px 0px 0px !important; width: 340px !important; }.tooltipDiv {
        position: relative;
        display: inline-block;
        cursor: pointer;
    }
    .popup_box_close:hover {
  cursor: pointer; /* Mudança de cursor para mãozinha ao passar o mouse sobre ele */
     }
    .tooltipDiv .tooltiptext {
        visibility: hidden;
        width: 200px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s;
    }
     .tooltipDiv:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }</style>
     `;
    popupContainer.innerHTML = $html3;
    // Adicionar o contêiner ao body
    document.body.appendChild(popupContainer);
    document.getElementById('popup_box_close').addEventListener('click', function() {
    popupContainer.remove();
});
    document.getElementById('BTNApagarComandos').addEventListener('click', function() {
       localStorage.removeItem('savedModels');
        UI.InfoMessage('Agendamentos Apagados com sucesso!');
    });
    document.getElementById('BTNApagarConfigFarm').addEventListener('click', function() {
   for (var i = 1; i <= 3333; i++) {
            localStorage.removeItem(`village_${i}`); // Remove o item do localStorage
        }
        console.log('Dados das aldeias apagados do localStorage.');
         UI.InfoMessage('Dados das aldeias apagados com sucesso!');
});
    const AbreCaptcha = localStorage.getItem('AbreCaptcha');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('AbreCaptcha').value = AbreCaptcha;
    const AlarmeCaptcha = localStorage.getItem('AlarmeCaptcha');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('AlarmeCaptcha').value = AlarmeCaptcha;
    const DeslogaConta = localStorage.getItem('DeslogaConta');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('DeslogaConta').value = DeslogaConta;
    const AgendadorAtivo = localStorage.getItem('AgendadorAtivo');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('AgendadorAtivo').value = AgendadorAtivo;
    const AssistenteFarmAtivo = localStorage.getItem('AssistenteFarmAtivo');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('AssistenteFarmAtivo').value = AssistenteFarmAtivo;
    const AssistenteFarmTipoGrupo = localStorage.getItem('AssistenteFarmTipoGrupo');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('AssistenteFarmTipoGrupo').value = AssistenteFarmTipoGrupo;
    const CunhagemAtiva = localStorage.getItem('CunhagemAtiva');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('CunhagemAtiva').value = CunhagemAtiva;
    const MoedasCunhagem = localStorage.getItem('MoedasCunhagem');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('MoedasCunhagem').value = MoedasCunhagem;
    const CunhagemRandomica = localStorage.getItem('CunhagemRandomica');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('CunhagemRandomica').value = CunhagemRandomica;
    const PuxarRecursosAtiva = localStorage.getItem('PuxarRecursosAtiva');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('PuxarRecursosAtiva').value = PuxarRecursosAtiva;
    const CoordenadaPuxarRecursos = localStorage.getItem('CoordenadaPuxarRecursos');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('CoordenadaPuxarRecursos').value = CoordenadaPuxarRecursos;
    const PeriodoPuxarRecursos = localStorage.getItem('PeriodoPuxarRecursos');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('PeriodoPuxarRecursos').value = PeriodoPuxarRecursos;
    const DistanciaPuxarRecursos = localStorage.getItem('DistanciaPuxarRecursos');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('DistanciaPuxarRecursos').value = DistanciaPuxarRecursos;
    const ColetaAtiva = localStorage.getItem('ColetaAtiva');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('ColetaAtiva').value = ColetaAtiva;
    const PeriodoColeta = localStorage.getItem('PeriodoColeta');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('PeriodoColeta').value = PeriodoColeta;
    const unlocks = localStorage.getItem('unlocks');
      document.getElementById('unlocks').value = unlocks;
    const ColetaMassaAtiva = localStorage.getItem('ColetaMassaAtiva');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('ColetaMassaAtiva').value = ColetaMassaAtiva;
    const PeriodoColetaMassa = localStorage.getItem('PeriodoColetaMassa');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('PeriodoColetaMassa').value = PeriodoColetaMassa;
    const BalanceamentoAtiva = localStorage.getItem('BalanceamentoAtiva');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('BalanceamentoAtiva').value = BalanceamentoAtiva;
    const PeriodoBalanceamento = localStorage.getItem('PeriodoBalanceamento');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('PeriodoBalanceamento').value = PeriodoBalanceamento;
    const QuantiClusters = localStorage.getItem('QuantiClusters');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('QuantiClusters').value = QuantiClusters;
    const CunhagemMassaAtiva = localStorage.getItem('CunhagemMassaAtiva');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('CunhagemMassaAtiva').value = CunhagemMassaAtiva;
    const PeriodoCunhaMassa = localStorage.getItem('PeriodoCunhaMassa');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('PeriodoCunhaMassa').value = PeriodoCunhaMassa;
    const UparPaladinoAtiva = localStorage.getItem('UparPaladinoAtiva');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('UparPaladinoAtiva').value = UparPaladinoAtiva;
    const PeriodoUparPaladino = localStorage.getItem('PeriodoUparPaladino');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('PeriodoUparPaladino').value = PeriodoUparPaladino;
    const EtiquetadorAtiva = localStorage.getItem('EtiquetadorAtiva');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('EtiquetadorAtiva').value = EtiquetadorAtiva;
    const Alarmenobre = localStorage.getItem('Alarmenobre');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('Alarmenobre').value = Alarmenobre;
    const Ctt = localStorage.getItem('Ctt');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('Ctt').value = Ctt;
    const RecruitAtivo = localStorage.getItem('RecruitAtivo');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('RecruitAtivo').value = RecruitAtivo;
//============================== CheckBoxes =============================================================
     const Rfarm = localStorage.getItem('Rfarm');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('Rfarm').value = Rfarm;
     const CPuxar = localStorage.getItem('CPuxar');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('CPuxar').value = CPuxar;
     const Coleta = localStorage.getItem('Coleta');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('Coleta').value = Coleta;
     const ColetaM = localStorage.getItem('ColetaM');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('ColetaM').value = ColetaM;
     const CBalance = localStorage.getItem('CBalance');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('CBalance').value = CBalance;
     const CupPala = localStorage.getItem('CupPala');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('CupPala').value = CupPala;
     const CCMass = localStorage.getItem('CCMass');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('CCMass').value = CCMass;
    const Rrecruit = localStorage.getItem('Rrecruit');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('Rrecruit').value = Rrecruit;
    const Redp = localStorage.getItem('Redp');
   // Define a opção selecionada conforme o que está no localStorage
      document.getElementById('Redp').value = Redp;

var checkboxes = document.getElementsByClassName("CheckRot");
    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        var checkboxState = localStorage.getItem(checkbox.id);
        if (checkboxState === "true") {
            checkbox.checked = true;
        }
    }




    document.getElementById('BTNSalvarConfig').addEventListener('click', function () {
        localStorage.setItem('AbreCaptcha', document.getElementById('AbreCaptcha').value);
        localStorage.setItem('AlarmeCaptcha', document.getElementById('AlarmeCaptcha').value);
        localStorage.setItem('DeslogaConta', document.getElementById('DeslogaConta').value);
        localStorage.setItem('AgendadorAtivo', document.getElementById('AgendadorAtivo').value);
        localStorage.setItem('AssistenteFarmTipoGrupo', document.getElementById('AssistenteFarmTipoGrupo').value);
        localStorage.setItem('CunhagemRandomica', document.getElementById('CunhagemRandomica').value);
        localStorage.setItem('CunhagemAtiva', document.getElementById('CunhagemAtiva').value);
        localStorage.setItem('MoedasCunhagem', document.getElementById('MoedasCunhagem').value);
        localStorage.setItem('PuxarRecursosAtiva', document.getElementById('PuxarRecursosAtiva').value);
        localStorage.setItem('CoordenadaPuxarRecursos', document.getElementById('CoordenadaPuxarRecursos').value);
        localStorage.setItem('PeriodoPuxarRecursos', document.getElementById('PeriodoPuxarRecursos').value);
        localStorage.setItem('DistanciaPuxarRecursos', document.getElementById('DistanciaPuxarRecursos').value);
        localStorage.setItem('ColetaAtiva', document.getElementById('ColetaAtiva').value);
        localStorage.setItem('PeriodoColeta', document.getElementById('PeriodoColeta').value);
        localStorage.setItem('unlocks', document.getElementById('unlocks').value);
        localStorage.setItem('ColetaMassaAtiva', document.getElementById('ColetaMassaAtiva').value);
        localStorage.setItem('PeriodoColetaMassa', document.getElementById('PeriodoColetaMassa').value);
        localStorage.setItem('BalanceamentoAtiva', document.getElementById('BalanceamentoAtiva').value);
        localStorage.setItem('PeriodoBalanceamento', document.getElementById('PeriodoBalanceamento').value);
        localStorage.setItem('QuantiClusters', document.getElementById('QuantiClusters').value);
        localStorage.setItem('CunhagemMassaAtiva', document.getElementById('CunhagemMassaAtiva').value);
        localStorage.setItem('PeriodoCunhaMassa', document.getElementById('PeriodoCunhaMassa').value);
        localStorage.setItem('UparPaladinoAtiva', document.getElementById('UparPaladinoAtiva').value);
        localStorage.setItem('PeriodoUparPaladino', document.getElementById('PeriodoUparPaladino').value);
        localStorage.setItem('EtiquetadorAtiva', document.getElementById('EtiquetadorAtiva').value);
        localStorage.setItem('Alarmenobre', document.getElementById('Alarmenobre').value);
        localStorage.setItem('Ctt', document.getElementById('Ctt').value);
        localStorage.setItem('RecruitAtivo', document.getElementById('RecruitAtivo').value);
         var checkboxes = document.getElementsByClassName("CheckRot");
    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];
        // Salve o estado da caixa de seleção no localStorage
        localStorage.setItem(checkbox.id, checkbox.checked);
        localStorage.setItem('check' + i, checkbox.checked);
    }

        localStorage.setItem('Redp', document.getElementById('Redp').value);
        localStorage.setItem('Rfarm', document.getElementById('Rfarm').value);
        localStorage.setItem('CPuxar', document.getElementById('CPuxar').value);
        localStorage.setItem('Coleta', document.getElementById('Coleta').value);
        localStorage.setItem('ColetaM', document.getElementById('ColetaM').value);
        localStorage.setItem('CBalance', document.getElementById('CBalance').value);
        localStorage.setItem('CupPala', document.getElementById('CupPala').value);
        localStorage.setItem('CCMass', document.getElementById('CCMass').value);
        localStorage.setItem('Rrecruit', document.getElementById('Rrecruit').value);
        UI.InfoMessage('Dados Salvo com sucesso!');
        if(CunhagemAtiva === 'N'){var xxx = 0; localStorage.setItem('totalC', xxx);}

    });
}
// Função de clique para o elemento MygScripts
    let iconn = document.getElementById('MygScripts');
    if(iconn){
document.getElementById('MygScripts').addEventListener('click', function() {
    openPopup();
});}
//======================================================CapTcha==================================================================================
var sair = document.querySelector('#linkContainer a[href*="logout"]');
var contador = 0;
function checkbot() {
       var iconbot = document.getElementById('botprotection_quest');
    const AbreCaptcha = localStorage.getItem('AbreCaptcha');
    const AlarmeCaptcha = localStorage.getItem('AlarmeCaptcha');
    const DeslogaConta = localStorage.getItem('DeslogaConta');
    const capcha = document.getElementsByClassName("captcha");
    // Verifica se AbreCaptcha está definido como 'S'
    if (AbreCaptcha === 'S') {
        function isHidden(el) {
           return (el.offsetParent === null);
           }
        function qSelector(selector) {
               return document.querySelector(selector);
               }
        if (iconbot && !window.location.href.includes("checkbox")) {
            setTimeout(function () {
                iconbot.click();
            }, 2000);
        }
         else if (!iconbot && !window.location.href.includes("checkbox")) {
              let botProtection = document.querySelector(".bot-protection-row");
    if (botProtection) {
        let botao = botProtection.querySelector(".btn.btn-default");
        if (botao) {
          setTimeout(function () { botao.click();}, 2000);
        }
    }
            }

    }
    // Verifica se DeslogaConta está definido como 'S'
   if (capcha.length > 0) {
         if (AlarmeCaptcha === 'S') {
               if (contador > 20) {
                    // Adicionar o código para tocar o áudio aqui
                    let audioHtml = `<audio id="audioElement" preload="auto" autoplay volume="0.9" loop>
                                        <source src="https://cdn.freesound.org/previews/507/507577_735175-lq.mp3" type="audio/mpeg">
                                        Seu navegador não suporta o elemento de áudio.
                                    </audio>`;
                    document.body.insertAdjacentHTML('beforebegin', audioHtml);

                }}
         if (DeslogaConta === 'S') {
                if (contador > 59) {
                 window.location.href = "https://www.tribalwars.com.br";
                }
       }
      contador = contador + 3;
    }else{contador = 0; }
setTimeout(function () {checkbot();}, 3000);
}
checkbot();
//================================================= Scripts =====================================================================================
 //  localStorage.removeItem("modelosConstrucao");
if(!window.location.href.includes("checkbox")){
//==================================================== script Up Vila ===========================================================================
var ctt = document.getElementById('building_wrapper');
const CttAtivo = localStorage.getItem('Ctt');
 if(ctt && CttAtivo === 'S'){

    // Cria um html
  let $html = `<div id="divScriptRodando">
        <table align="center" id="avisoScript" width="100%" style="margin-bottom: 5px;">
        <tbody><tr><td><table class="content-border" width="100%" cellspacing="0">
        <tbody><tr>
        <td id="inner-border" style="background-color: rgb(193,162,100); background-image: url(https://dsbr.innogamescdn.com/asset/7fe7ab60/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x;">
        <table class="main" align="left"><tbody><tr><td id="avisoScriptContent"><h1 style="text-align: center; margin-bottom: 0px;">UPANDO</h1></td>
        <td><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;"><img id="tocaSom" style="cursor:pointer;" alt="loud_sound" class="emoji" src="https://media.innogamescdn.com/TribalWars/emoji/1f50a.png">
        <audio id="audioElement" preload="auto" autoplay volume="1" loop>
                 <source src="https://cdn.freesound.org/previews/448/448713_4473224-lq.mp3" type="audio/mpeg">
          Seu navegador não suporta o elemento de audio.
        </audio></div></td></tr></tbody></table></td></tr></tbody></table></tbody></table></div>
        <div class="table-build">
                    <div class="container">
                        <span class="next-building"></span>
                    </div>
                    <button class="btn-modify" id="hide-settings" style="background-color: white; display: none;">Ocultar Menu de Configurações de Construção</button>
                    <button class="btn-modify" id="hide-settingss" style="background-color: white; display: inline;">Exibir Menu de Configurações de Construção</button><br>

                    <div id="xyzzz" width="100%" class="hide-menu" style="display: none;">
                        <button id="xyzz" class="btn-modify">
                            <i class="fas fa-file-export"></i> Exportar Modelos
                        </button>
                        <input type="file" id="importModelsInput" accept=".json">
                        <label for="importModelsInput" class="btn-modify">
                            <i class="fas fa-file-import"></i>
                        </label>
                        <div class="scrollable">
                            <div id="tableContainer">
                                <table id="edificiosTable" >
                                    <thead>
                                        <tr>
                                            <th style="width: 150px;">Edificio</th>
                                            <th style="width: 80px">Nível</th>
                                            <th style="width: 80px">Remover Edíficio</th>
                                            <th style="width: 80px">Ajustar Ordens</th>
                                        </tr>
                                    </thead>
                                    <tbody id="edificiosTableBody"></tbody>
                                </table>
                            </div>
                        </div>
                        <form id="formId">
                            <div style="font-size: 14px;">
                                <label for="edificio">Edificio:</label>
                                <select id="edificio" class="unitsInput input-nicer" style="width: 150px; font-size: 14px;">
                                    <option value="main">Edificio Principal</option>
                                    <option value="barracks">Quartel</option>
                                    <option value="stable">Estábulo</option>
                                    <option value="garage">Oficina</option>
                                    <option value="snob">Academia</option>
                                    <option value="watchtower">Torre de vigia</option>
                                    <option value="church">Igreja</option>
                                    <option value="smith">Ferreiro</option>
                                    <option value="place">Praça de reunião</option>
                                    <option value="statue">Estátua</option>
                                    <option value="market">Mercado</option>
                                    <option value="wood">Bosque</option>
                                    <option value="stone">Poço de Argila</option>
                                    <option value="iron">Mina de Ferro</option>
                                    <option value="farm">Fazenda</option>
                                    <option value="storage">Armazém</option>
                                    <option value="hide">Esconderijo</option>
                                    <option value="wall">Muralha</option>
                                </select>
                            </div>
                            <div style="font-size: 14px;">
                                <label for="nivel">Níveis para serem Adicionados:</label>
                                <input type="number" id="nivel" min="1" class="unitsInput input-nicer" style="width: 70px">
                            </div>
                            <button id="addButton" type="button" class="btn-modify">
                                <i class="fas fa-plus-circle"></i> Adicionar +1 Fila desse Edíficio
                            </button>
                            <button id="removeButton" type="button" class="btn-modify">
                                <i class="fas fa-minus-circle"></i> Remover Fila Anterior Adicionada
                            </button>
                            <div style="font-size: 14px;">
                                <label for="modelName">Nome do Modelo:</label>
                                <input type="text" placeholder="Defina um nome para o modelo de construção" id="modelName" class="unitsInput input-nicer" style="width: 300px; font-size: 14px;">
                                <button id="saveButton" type="button" class="btn-modify">
                                    <i class="fas fa-save"></i> Salvar Modelo
                                </button>
                            </div>
                            <div style="font-size: 14px;">
                                <label for="modelSelect">Selecionar Modelo:</label>
                                <select id="modelSelect" class="unitsInput input-nicer" style="width: 210px; font-size: 14px;"><option value="">Selecione um Modelo</option></select>
                            </div>
                            <div>
                                <button id="deleteModel" type="button" class="btn-modify">
                                    <i class="fas fa-trash-alt"></i> Excluir Modelo
                                </button>
                                <button id="setModelButton" type="button" class="btn-modify">
                                    <i class="fas fa-cogs"></i> Definir Modelo nessa Aldeia
                                </button>
                                <button id="unsetModelButton" type="button" class="btn-modify">
                                    <i class="fas fa-times-circle"></i> Remover Modelo dessa Aldeia
                                </button>
                            </div>
                            <div class="checkbox-container">
                                <input type="checkbox" id="autoBuild" class="unitsInput input-nicer">
                                <label for="autoBuild">Ativar Construções Automática nessa Aldeia</label>
                            </div>
                            <div class="checkbox-container">
                                <input type="checkbox" id="upFarm" class="unitsInput input-nicer">
                                <label for="upFarm">Construir a fazenda se tiver menos de:</label>
                                <input type="number" id="value-priority-farm" class="unitsInput input-nicer" value="10" min="0" max="99">% da população disponível

                            </div>
                            <div class="checkbox-container">
                                <input type="checkbox" id="upStorage" class="unitsInput input-nicer">
                                <label for="upStorage">Construir armazém se recursos forem igual ou superior a:</label>
                                <input type="number" id="value-priority-storage" class="unitsInput input-nicer" value="100" min="0" max="100">% do armazém

                            </div>
                            <div class="checkbox-container">
                                <input type="checkbox" id="get_rewards" class="unitsInput input-nicer">
                                <label for="get_rewards">Coletar Recompensas Automaticamente: Periodo </label> <input value="10" type="number" style="width: 30px;" type="number" min="1" max="99" id="get_rewards_temp" class="unitsInput input-nicer"> minutos
                            </div>
                            <div class="checkbox-container">
                                <input type="checkbox" id="autoReduzir" name="autoReduzir">
                                <label for="autoReduzir" id="label-reduzir">Reduzir Construções em 50% se o tempo for superior a (horas e minutos):<input type="time" id="time-next-up" class="unitsInput input-nicer" style="font-size: 14px; width: 85px;"></label>
                            </div>
                            <div class="max-queue" style=" font-size: 14px;">
                                <label for="maxQueueSize">Máximo de Filas:</label>
                                <input style="width: 50px;" type="number" min="1" max="10" id="maxQueueSize" class="input-nicer">
                            </div>
                            <div style=" font-size: 14px;">
                                <label for="time-next-village">Tempo para Próxima Aldeia em Segundos:</label>
                                <input style="width: 50px;" type="number" value="240" id="time-next-village" class="input-nicer">
                            </div>
                        </form>
                    </div>
                </div>
           <small>
        <strong id="movendoTexto">
            Up D'a Vila v3.0 by<span style="color: red"> Zigaeezz </span><span id="horas"></span><span id="Inforot"></span>
        </strong>
    </small>`;
// Captura a referência para a tabela de destino
let Inserir = document.getElementById('contentContainer');
   // Adiciona a nova div antes da divBorda
Inserir.insertAdjacentHTML('beforebegin', $html);

 document.getElementById('hide-settings').addEventListener('click', function() {
              this.style.display = 'none';
              document.getElementById('xyzzz').style.display = 'none';
              document.getElementById('hide-settingss').style.display = 'inline';
});
 document.getElementById('hide-settingss').addEventListener('click', function() {
              this.style.display = 'none';
              document.getElementById('xyzzz').style.display = 'inline';
              document.getElementById('hide-settings').style.display = 'inline';
                     });
    const addButton = document.getElementById("addButton");
    const edificiosTableBody = document.getElementById("edificiosTableBody");
    const formContainer = document.getElementById("xyzzz");
    // Limites de nível por edifício
    const limitesDeNivel = {
    main: 30,
    barracks: 25,
    stable: 20,
    garage: 15,
    church: 3,
    watchtower: 20,
    snob: 1,
    smith: 20,
    place: 1,
    statue: 1,
    market: 25,
    wood: 30,
    stone: 30,
    iron: 30,
    farm: 30,
    storage: 30,
    hide: 10,
    wall: 20,
};
   // Definição dos pré-requisitos de cada edifício
    const requisitosDeEdificio = {
    barracks: { main: 3 }, // Quartel precisa do Edifício Principal nv 3
    stable: { main: 10, barracks: 5, smith: 5 }, // Estábulo precisa de EP 10, Quartel 5, Ferreiro 5
    garage: { main: 10, smith: 5 }, // Oficina precisa de EP 10, Ferreiro 5
    watchtower: { main: 5, farm: 5 }, // Torre de vigia precisa de EP 5, Fazenda 5
    snob: { main: 20, smith: 20, market: 10 }, // Academia precisa de EP 20, Ferreiro 20, Mercado 10
    smith: { main: 5, barracks: 1 }, // Ferreiro precisa de EP 5, Quartel 1
    market: { main: 3, storage: 2 }, // Mercado precisa de EP 3, Armazém 2
    wall: { barracks: 1 } // Muralha precisa de Quartel 1
};
    function addBuilding() {
    let edificio = document.getElementById("edificio").value;
    let nivelAdicionado = parseInt(document.getElementById("nivel").value) || 1;

    if (!edificio) {
        alert("Selecione um edifício!");
        return;
    }

    // Verificar os pré-requisitos antes de adicionar o edifício
    if (requisitosDeEdificio[edificio]) {
        for (const [reqEdificio, reqNivel] of Object.entries(requisitosDeEdificio[edificio])) {
            if (getNivelAtual(reqEdificio) < reqNivel) {
                alert(`Não é possível adicionar ${edificio}. Requer ${reqEdificio} nível ${reqNivel} ou superior.`);
                return;
            }
        }
    }

    // Verificar o limite de nível do edifício
    const limite = limitesDeNivel[edificio];
    const nivelAtual = getNivelAtual(edificio); // Verifica o nível atual do edifício

    if (nivelAtual + nivelAdicionado > limite) {
        alert(`Não é possível adicionar mais níveis. O limite de nível para o ${edificio} é ${limite}.`);
        return;
    }

    // Encontra todas as linhas existentes desse edifício
    let existingRows = [...document.querySelectorAll("#edificiosTableBody tr")].filter(row =>
        row.querySelector(".edificio-name").dataset.edificio === edificio
    );

    // Pega o nível da última linha do mesmo edifício, se existir
    let ultimoNivel = 0;
    if (existingRows.length > 0) {
        let ultimaLinha = existingRows[existingRows.length - 1]; // Última linha encontrada
        ultimoNivel = parseInt(ultimaLinha.querySelector(".nivel").textContent) || 0;
    }

    let novoNivel = ultimoNivel + nivelAdicionado;

    // Criar uma nova linha para o edifício com o nível somado
    let row = document.createElement("tr");
    row.innerHTML = `
        <td class="edificio-name" data-edificio="${edificio}">
            <span class="icon" style="background: url(https://dsbr.innogamescdn.com/asset/95eda994/graphic/buildings/mid/${edificio}1.png); width: 36px; height: 30px; display: inline-block;"></span>
            ${edificio}
        </td>
        <td class="nivel">${novoNivel}</td>
        <td><button class="remove-row">❌</button></td>
        <td>
            <button class="move-up">🔺</button>
            <button class="move-down">🔻</button>
        </td>
    `;
    edificiosTableBody.appendChild(row);

    formContainer.style.display = "block"; // Exibe a área de edição se estiver oculta
}
    // Função para obter o nível atual do edifício
    function getNivelAtual(edificio) {
    // Encontrar todas as linhas para o edifício específico
    let existingRows = [...document.querySelectorAll("#edificiosTableBody tr")].filter(row =>
        row.querySelector(".edificio-name").dataset.edificio === edificio
    );

    // Se não houver nenhuma linha para esse edifício, retornar 0
    if (existingRows.length === 0) return 0;

    // Pegar a última linha do edifício
    let ultimaLinha = existingRows[existingRows.length - 1];

    // Pegar o valor do nível da última linha
    let nivelUltimaLinha = parseInt(ultimaLinha.querySelector(".nivel").textContent) || 0;

    // Retornar o nível da última linha
    return nivelUltimaLinha;
}
    // Remover edifício
    function removeRow(event) {
        if (event.target.classList.contains("remove-row")) {
            event.target.closest("tr").remove();
        }
    }
    // Função para mover as linhas e ajustar os níveis ao mesmo tempo
    function moveRow(event) {
        let row = event.target.closest("tr");
        if (!row) return;

        let tableBody = document.getElementById("edificiosTableBody");
        let adjacentRow = null;

        if (event.target.classList.contains("move-up") && row.previousElementSibling) {
            adjacentRow = row.previousElementSibling;
        } else if (event.target.classList.contains("move-down") && row.nextElementSibling) {
            adjacentRow = row.nextElementSibling;
        }

        if (adjacentRow) {
            let edificioAtual = row.querySelector(".edificio-name").dataset.edificio;
            let edificioAdjacente = adjacentRow.querySelector(".edificio-name").dataset.edificio;

            // Só troca de lugar e níveis se forem edifícios do mesmo tipo
            if (edificioAtual != edificioAdjacente) {
                // Troca os níveis
                let nivelAtual = parseInt(row.querySelector(".nivel").textContent);
                let nivelAdjacente = parseInt(adjacentRow.querySelector(".nivel").textContent);

                row.querySelector(".nivel").textContent = nivelAtual;
                adjacentRow.querySelector(".nivel").textContent = nivelAdjacente;

                // Troca de lugar as linhas
                if (event.target.classList.contains("move-up")) {
                    tableBody.insertBefore(row, adjacentRow);
                } else {
                    tableBody.insertBefore(adjacentRow, row);
                }
            }
        }
    }
    function carregarModelos() {
    let modelSelect = document.getElementById("modelSelect");
    modelSelect.innerHTML = '<option value="">Selecione um Modelo</option>'; // Resetar lista

    let modelosSalvos = JSON.parse(localStorage.getItem("modelosConstrucao")) || {};

    Object.keys(modelosSalvos).forEach(modelo => {
        let option = document.createElement("option");
        option.value = modelo;
        option.textContent = modelo;
        modelSelect.appendChild(option);
    });
}carregarModelos(); // Primeiro, carrega a lista de modelos
    let modeloSelecionado = localStorage.getItem("modeloAldeiaSelecionado");
    if (modeloSelecionado) {
        document.getElementById("modelSelect").value = modeloSelecionado;
    }
     function exibirModeloNaTabela(modelo) {
    let tableBody = document.getElementById("edificiosTableBody");
    tableBody.innerHTML = ""; // Limpa a tabela antes de adicionar os novos dados

    modelo.forEach(item => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td class="edificio-name" data-edificio="${item.edificio}">
                <span class="icon" style="background: url(https://dsbr.innogamescdn.com/asset/95eda994/graphic/buildings/mid/${item.edificio}1.png); width: 36px; height: 30px; display: inline-block;"></span>
                ${item.edificio}
            </td>
            <td class="nivel">${item.nivel}</td>
            <td><button class="remove-row">❌</button></td>
            <td>
                <button class="move-up">🔺</button>
                <button class="move-down">🔻</button>
            </td>
        `;
        tableBody.appendChild(row);
    });

   // alert("Modelo importado com sucesso! Você pode editá-lo ou salvá-lo.");
}
    const elementsToSave = [
        "autoBuild",
        "upFarm",
        "value-priority-farm",
        "upStorage",
        "value-priority-storage",
        "get_rewards",
        "autoReduzir",
        "maxQueueSize",
        "time-next-village",
        "time-next-up",
        "get_rewards_temp"
    ];
    // Função para restaurar valores salvos no localStorage
    function restoreValues() {
        elementsToSave.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                const savedValue = localStorage.getItem(id);

                if (element.type === "checkbox") {
                    element.checked = savedValue === "true";
                } else if (element.type === "number" || element.type === "time") {
                    element.value = savedValue !== null ? savedValue : element.value;
                }
            }
        });
    }
    // Função para salvar os valores quando modificados
    function saveValue(event) {
        const element = event.target;
        if (element.type === "checkbox") {
            localStorage.setItem(element.id, element.checked);
        } else if (element.type === "number" || element.type === "time") {
            localStorage.setItem(element.id, element.value);
        }
    }
    // Adiciona eventos para salvar mudanças automaticamente
    elementsToSave.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener("change", saveValue);
        }
    });
    // Restaurar os valores ao carregar a página
    restoreValues();

    // Eventos de clique
    addButton.addEventListener("click", addBuilding);
    edificiosTableBody.addEventListener("click", removeRow);
    edificiosTableBody.addEventListener("click", moveRow);
document.getElementById("removeButton").addEventListener("click", () => {
    let rows = document.getElementsByClassName("remove-row");
    if (rows.length > 0) {
        rows[rows.length - 1].click(); // Clica no último botão de remoção
    }
});
document.getElementById("deleteModel").addEventListener("click", function () {
    let modelSelect = document.getElementById("modelSelect");
    let modelName = modelSelect.value;

    if (!modelName) {
        alert("Selecione um modelo para excluir.");
        return;
    }

    let modelosSalvos = JSON.parse(localStorage.getItem("modelosConstrucao")) || {};
    delete modelosSalvos[modelName]; // Remove o modelo

    localStorage.setItem("modelosConstrucao", JSON.stringify(modelosSalvos));
    carregarModelos(); // Atualiza a lista
    alert(`Modelo "${modelName}" excluído com sucesso!`);
});
document.getElementById("setModelButton").addEventListener("click", function () {
    let modelSelect = document.getElementById("modelSelect");
    let modelName = modelSelect.value;

    if (!modelName) {
        alert("Selecione um modelo para definir na aldeia.");
        return;
    }

    localStorage.setItem("modeloAldeiaSelecionado", modelName);
    alert(`Modelo "${modelName}" definido para esta aldeia!`);
});
document.getElementById("saveButton").addEventListener("click", function () {
    let modelName = document.getElementById("modelName").value.trim();

    if (!modelName) {
        alert("Por favor, defina um nome para o modelo.");
        return;
    }

    let edificios = [];
    document.querySelectorAll("#edificiosTableBody tr").forEach(row => {
        let edificio = row.querySelector(".edificio-name").dataset.edificio;
        let nivel = parseInt(row.querySelector(".nivel").textContent);
        edificios.push({ edificio, nivel });
    });

    if (edificios.length === 0) {
        alert("Adicione pelo menos um edifício antes de salvar o modelo.");
        return;
    }

    // Recupera modelos existentes ou cria um novo objeto
    let modelosSalvos = JSON.parse(localStorage.getItem("modelosConstrucao")) || {};

    // Salva o modelo com o nome fornecido
    modelosSalvos[modelName] = edificios;
    localStorage.setItem("modelosConstrucao", JSON.stringify(modelosSalvos));
     carregarModelos();
    alert(`Modelo "${modelName}" salvo com sucesso!`);
});
document.getElementById("importModelsInput").addEventListener("change", function (event) {
    let save = document.getElementById("saveButton");
    let file = event.target.files[0];
    let fileName = file.name.replace(/\.json$/i, "");
    document.getElementById("modelName").value = fileName;
    if (!file) {
        alert("Nenhum arquivo selecionado.");
        return;
    }

    let reader = new FileReader();
    reader.onload = function (e) {
        try {
            let importedModel = JSON.parse(e.target.result);
            exibirModeloNaTabela(importedModel);
            save.click();
        } catch (error) {
            alert("Erro ao carregar o modelo. Verifique se o arquivo está correto.");
        }
    };
    reader.readAsText(file);
});
document.getElementById("xyzz").addEventListener("click", function () {
    let modelSelect = document.getElementById("modelSelect");
    let modelName = modelSelect.value;

    if (!modelName) {
        alert("Selecione um modelo para exportar.");
        return;
    }

    let modelosSalvos = JSON.parse(localStorage.getItem("modelosConstrucao")) || {};
    let modeloSelecionado = modelosSalvos[modelName];

    if (!modeloSelecionado) {
        alert("Modelo não encontrado.");
        return;
    }

    let blob = new Blob([JSON.stringify(modeloSelecionado, null, 2)], { type: "application/json" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${modelName}.json`;
    a.click();
});

// Escolha Tempo de espera mínimo e máximo entre ações (em milissegundos)
const Min_Tempo_Espera= 5000;
const Max_Tempo_Espera = 20000;
// Escolha se você deseja que o bot enfileire os edifícios na ordem definida (= true) ou
// assim que um prédio estiver disponível para a fila de construção (= false)
const Construção_Edificios_Ordem = true;
//*************************** /CONFIGURAÇÃO ***************************//
// Constantes (NÃO DEVE SER ALTERADAS)
const Visualização_Geral = "OVERVIEW_VIEW";
const Edificio_Principal = "HEADQUARTERS_VIEW";
function executarEtapa1(){
    let Evoluir_vilas = getEvoluir_vilas();
    if (Evoluir_vilas == Edificio_Principal){
        setInterval(function(){
            var autoBuild = document.getElementById('autoBuild');
            if(autoBuild.checked){
            // construir qualquer edificio custeável, se possível
            Proxima_Construção();}
        }, 1000);
    }
    else if (Evoluir_vilas == Visualização_Geral){
        // Visualização Geral PG
        document.getElementById("l_main").children[0].children[0].click();
    }

}executarEtapa1();
function click(){
    setTimeout(function(){
    var text="";
    var tr=$('[id="buildqueue"]').find('tr').eq(1);

    text=tr.find('td').eq(1).find('span').eq(0).text().split(" ").join("").split("\n").join("");
    var timeSplit=text.split(':');

  if(timeSplit[0]*60*60+timeSplit[1]*60+timeSplit[2]*1<3*60){
      console.log("Completar Grátis");
      tr.find('td').eq(2).find('a').eq(2).click();

  }
    //missao concluida
         var get_rewards = document.getElementById('get_rewards');

    if (get_rewards.checked) {$('[class="btn btn-confirm-yes reward-system-claim-button"]').click();}
                              $('[class="btn btn-confirm-yes status-btn quest-complete-btn"]').click();

click();
},1000);}click();
function compararTempoComInput() {

    let botaoConfirmar = document.querySelector(".btn.evt-confirm-btn.btn-confirm-yes");
    var premium_points = parseInt(document.getElementById('premium_points').textContent);
    var autoReduzir = document.getElementById('autoReduzir');
    if (autoReduzir.checked && premium_points > 10) {
    let tabela = document.querySelector("#build_queue");
    if (!tabela) {
        console.log("Tabela de construção não encontrada.");
        return;
    }
    // Seleciona o primeiro <span> que contém o tempo restante (exemplo: "2:30:44")
    let primeiroTempoElem = tabela.querySelector("span[data-endtime]");
    if (!primeiroTempoElem) {
        console.log("Nenhum tempo encontrado na fila.");
        return;
    }
    let primeiroTempoTexto = primeiroTempoElem.textContent.trim(); // Exemplo: "2:30:44"
    let partes = primeiroTempoTexto.split(":").map(Number); // Divide em [2,30,44]

    // Converte para minutos totais (para facilitar a comparação)
    let minutosFila = (partes[0] * 60) + partes[1]; // Exemplo: 2h30min → 150 minutos
    // Pegando o valor do input
    let timeInput = document.getElementById('time-next-up');
    if (!timeInput) {
        console.log("Input time-next-up não encontrado.");
        return;
    }
    let inputTexto = timeInput.value.trim(); // Exemplo: "02:10"
    let inputPartes = inputTexto.split(":").map(Number); // Divide em [2,10]

    // Converte para minutos totais
    let minutosInput = (inputPartes[0] * 60) + inputPartes[1]; // Exemplo: 2h10min → 130 minutos

    // Comparação
    if (minutosFila > minutosInput && !botaoConfirmar) {
        clicarBotaoReducao();
    } else {
        console.log("Tempo da fila é menor ou igual. Nenhuma ação necessária.");
    }
}
setTimeout(function(){
compararTempoComInput();
    }, 5000);
}compararTempoComInput();
function openQ(){
    var get_rewards = document.getElementById('get_rewards');
    var autoBuild = document.getElementById('autoBuild');
    if (get_rewards.checked && autoBuild.checked) {
    var cdReward = document.getElementById('get_rewards_temp').value;
     document.getElementById('new_quest').click();
     setTimeout(function(){ $('[class="popup_box_close tooltip-delayed"]').click();},10000);}
     setTimeout(function(){openQ();},cdReward*60000);
    }openQ();
    let delay = Math.floor(Math.random() * (Max_Tempo_Espera - Max_Tempo_Espera) + Min_Tempo_Espera);
    // Ação do processo
    let Evoluir_vilas = getEvoluir_vilas();
    setTimeout(function(){
        if (Evoluir_vilas == Edificio_Principal){
            // construir qualquer edificio custeável, se possível
            Proxima_Construção();
        }
        else if (Evoluir_vilas == Visualização_Geral){
            // Visualização Geral Pag
            document.getElementById("l_main").children[0].children[0].click();

        }
    }, delay);
function getEvoluir_vilas(){
    let currentUrl = window.location.href;
    if (currentUrl.endsWith('Visualização Geral')){
        return Visualização_Geral;
    }
    else if (currentUrl.endsWith('main')){
        return Edificio_Principal;
    }
}
function Proxima_Construção(){
    let Construção_proximo_edificio = getConstrução_proximo_edificio();
    var maxQueueSize = parseInt(document.getElementById('maxQueueSize').value);
        // Seleciona todos os elementos com a classe especificada
       let filaFull = document.querySelectorAll('.sortable_row');
    if (Construção_proximo_edificio !== undefined && filaFull.length < (maxQueueSize - 1)){
        Construção_proximo_edificio.click();
        console.log("Clicked on " + Construção_proximo_edificio);
    }
}
function getConstrução_proximo_edificio() {
    let Clicar_Upar_Edificos = document.getElementsByClassName("btn btn-build");
    let Construção_Edifcios_Serie = getConstrução_Edifcios_Serie();
    let instituir;
   // while(instituir === undefined && Construção_Edifcios_Serie.length > 0){
     if (Array.isArray(Construção_Edifcios_Serie)) {
       for (let i = 0; i < Construção_Edifcios_Serie.length; i++) {
        var proximo = Construção_Edifcios_Serie[i]; // Pega o próximo edifício na sequência
        if (Clicar_Upar_Edificos.hasOwnProperty(proximo)){
            let próximo_edifício = document.getElementById(proximo);
            if (próximo_edifício) {
            var Visivel = próximo_edifício.offsetWidth > 0 || próximo_edifício.offsetHeight > 0;
            if (Visivel) {
                instituir = próximo_edifício; // Define o edifício visível como o próximo a ser clicado
               console.log(`${instituir}`);
            }
                if (Construção_Edificios_Ordem){
                break;
            }
        }
        }
    }}
    return instituir;
}
function getConstrução_Edifcios_Serie() {
    let Sequência_Construção = [];
    var qtdFerroAldeia = parseInt($("#iron").text());
    var qtdArgilaAldeia = parseInt($("#stone").text());
    var qtdMadeiraAldeia = parseInt($("#wood").text());
    var armazem = parseInt($("#storage").text());
    // Lógica do pop atual
    var upFarmCheckbox = document.getElementById('upFarm');
    var upStorage = document.getElementById('upStorage');
    var percFarm = parseInt(document.getElementById('value-priority-storage').value);
    var percpop = parseInt(document.getElementById('value-priority-farm').value);
    var _pop = parseInt(document.getElementById('pop_current_label').innerText);
    var _maxpop = parseInt(document.getElementById('pop_max_label').innerText);
    var _dif = _maxpop - _pop;
    var dif_percent = (_dif / _maxpop) * 100;
    var compArm = (armazem/100)*percFarm;
    // Se a diferença for menor que a porcentagem configurada e a checkbox estiver marcada, upar fazenda
    if (dif_percent < percpop && upFarmCheckbox.checked) {
        // Adiciona fazendas
        for (let i = 1; i <= 30; i++) {
            Sequência_Construção.push(`main_buildlink_farm_${i}`);
        }
        return Sequência_Construção; // Retorna o array de fazendas
    }
    if (qtdFerroAldeia > compArm && qtdArgilaAldeia > compArm && qtdMadeiraAldeia > compArm && upStorage.checked) {
        // Adiciona fazendas
        for (let i = 1; i <= 30; i++) {
            Sequência_Construção.push(`main_buildlink_storage_${i}`);
        }
        return Sequência_Construção; // Retorna o array de armazens
    }

    // Carregar o modelo selecionado do localStorage
    let modelosSalvos = JSON.parse(localStorage.getItem("modelosConstrucao")) || {};

    // Verificar se o modelo selecionado existe no localStorage
    if (modeloSelecionado && modelosSalvos[modeloSelecionado]) {
        let modeloCarregado = modelosSalvos[modeloSelecionado];

        modeloCarregado.forEach(({ edificio, nivel }) => {
            let ultimoNivel = getNivelAtual(edificio); // Obtém o nível atual daquele edifício

            // Se o nível no modelo for maior do que o nível atual
            if (nivel > ultimoNivel) {
                // Adiciona os níveis faltantes
                for (let i = ultimoNivel + 1; i <= nivel; i++) {
                    Sequência_Construção.push(`main_buildlink_${edificio}_${i}`);
                }
            } else if (nivel === ultimoNivel) {
                // Se o nível no modelo for igual ao nível atual, adicione o modelo atual
                Sequência_Construção.push(`main_buildlink_${edificio}_${nivel}`);
            } else {
                // Caso o nível no modelo seja menor que o nível atual, não faça nada (ou adicione uma lógica customizada)
                console.log(`Nível do ${edificio} no modelo é menor que o atual. Ignorando.`);
            }
        });

        // Retorna o array com a sequência de construções gerada
        return Sequência_Construção;
    } else {
        console.log("Modelo não encontrado no localStorage.");
    }

    // Retorna a sequência construída, mesmo que o modelo não tenha sido encontrado
    return Sequência_Construção;
}
function clicarBotaoConfirmar() {
    // Seleciona o primeiro botão "Confirmar" disponível
    let botaoConfirmar = document.querySelector(".btn.evt-confirm-btn.btn-confirm-yes");

    if (botaoConfirmar) {
        console.log("Botão 'Confirmar' encontrado! Clicando...");
        botaoConfirmar.click();
    } else {
        console.log("Nenhum botão 'Confirmar' encontrado.");
    }
}
function clicarBotaoReducao() {
    // Seleciona o primeiro botão "-50%" disponível na fila de construção
    let botaoReducao = document.querySelector(".order_feature.btn.btn-btr");

    if (botaoReducao) {
        console.log("Botão encontrado! Clicando...");
        botaoReducao.click();
        setTimeout(clicarBotaoConfirmar,10000);
    } else {
        console.log("Nenhum botão de redução de tempo encontrado.");
    }
}

function altAldeia() {
    var timenextvillage = parseInt(document.getElementById('time-next-village').value);
    var vai = document.getElementById('village_switch_right');
       setTimeout(function(){ vai.click();},timenextvillage*1000);
       setTimeout(function(){$('.groupRight').click();},timenextvillage*1000);
       // location.reload();
    }
altAldeia();

       var v0 = 0;
    var valor0 = localStorage.getItem('check' + v0);
    var estado0 = valor0 === 'true';
    if(estado0){ var conf0 = 'ok'}
    if(conf0 === 'ok'){
function redirecionar(){
    var temp_farm = parseInt(localStorage.getItem('Redp'));
             var rotacion = document.getElementById('Inforot');
    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximaRotacao = localStorage.getItem('proximoCarregamentoRot2');
    if (proximaRotacao) {
        proximaRotacao = new Date(proximaRotacao);
    } else {
        // Define a pr xima hora de carregamento para 2 horas ap s a execu  o
        proximaRotacao = new Date();
        proximaRotacao.setMinutes(proximaRotacao.getMinutes() + temp_farm);
        // Salva a pr xima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoRot2', proximaRotacao);
    }
function atualizares() {
        // Obt m a hora atual
        var agora = new Date();
        // Verifica se   hora de recarregar a p gina
        if (agora >= proximaRotacao) {
         localStorage.removeItem('proximoCarregamentoRot2');
            var redirecionamentos = [
    { screen: "main", delay: 20000 },
    { screen: "am_farm", delay: 1000 },
    { screen: "place&mode=scavenge", delay: 3000 },
    { screen: "place&mode=scavenge_mass", delay: 5000 },
    { screen: "market&mode=call", delay: 7000 },
    { screen: "market&mode=traders", delay: 9000 },
    { screen: "statue&mode=overview", delay: 11000 },
    { screen: "snob&mode=coin", delay: 13000 },
    { screen: "train", delay: 15000 }
];

redirecionamentos.forEach((item, index) => {
    let valorSalvo = localStorage.getItem('check' + index);
    if (valorSalvo === 'true') {
        setTimeout(() => {
            UI.InfoMessage('Redirecting...');
            window.location.href = game_data.link_base_pure + '&screen=' + item.screen;
        }, item.delay);
    }
});

        } else {
            // Calcula o tempo restante at  o pr ximo carregamento
            var tempoRestante = proximaRotacao - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = " || Rotacionando em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conte do do elemento com o tempo restante formatado
            rotacion.textContent = tempoRestanteFormatado;

            // Chama a fun  o novamente ap s 1 segundo
            setTimeout(atualizares, 1000);
        }
}
    // Chama a fun  o pela primeira vez
    atualizares();}
    redirecionar();}
let url = window.location.href;
    let subdominio = new URL(url).hostname.split('.')[0];
    let novoTitulo = subdominio + " - Upando";
    document.title = novoTitulo;
    }
//================================================== Agendador comandos ==========================================================================
    const AgendadorAtivo = localStorage.getItem('AgendadorAtivo');
    var commands = document.getElementById('command_actions');
    var confirm = document.getElementById('place_confirm_units');
if(AgendadorAtivo === 'S'){
if(commands){
    let AgendarM = `<div id="divScriptRodando">
    <table id="avisoScript" width="100%" style="margin-bottom: 5px;"><tbody><tr><td><table class="content-border" width="100%" cellspacing="0"><tbody><tr><td style="background-color: rgb(193,162,100); background-image:
    url(https://dsbr.innogamescdn.com/asset/7fe7ab60/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x;"><table class="main" width="100%"><tbody><tr><td style="text-align: center; width: 100%;"><h1 style="margin-bottom: 0px;">
    AGENDAMENTOS</h1></td><td style="text-align: right;"><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;"><img id="tocaSom" style="cursor:pointer;" alt="loud_sound" class="emoji"
    src="https://media.innogamescdn.com/TribalWars/emoji/1f50a.png"><audio id="audioElement" preload="auto" autoplay volume="1" loop><source src="https://cdn.freesound.org/previews/448/448713_4473224-lq.mp3" type="audio/mpeg">
    Seu navegador não suporta o elemento de áudio.</audio></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>
    `;
         // Captura a referência para a tabela de destino
           const Agendart = document.getElementById('contentContainer');
                // Adiciona a nova div antes da divBorda
                         Agendart.insertAdjacentHTML('beforebegin', AgendarM);
    if(acess === 1){setTimeout(function(){const div = document.getElementById('divScriptRodando'); let Agendars = `<small><strong id="movendoTexto" style="text-align: center;">
    Agendando as tropas v3.0 by <span style="color: red"> Zigaeezz </span><span id="Csaida"></span><span id="info"></span><span id="Inforot"></span></strong></small>`;
                div.insertAdjacentHTML('afterend', Agendars);},1000);}
    else if(acess === 2){setTimeout(function(){const div = document.getElementById('divScriptRodando'); let Agendars = `<small><strong id="movendoTexto" style="text-align: center;">
    Agendando as tropas v3.0 by <span style="color: red"> Zigaeezz </span> Plano Expirado. Renove atraves do 0800 000 000<span id="Csaida"></span><span id="info"></span><span id="Inforot"></span></strong></small>`;
                div.insertAdjacentHTML('afterend', Agendars);},1000); return;}
    else if(acess === 0){setTimeout(function(){const div = document.getElementById('divScriptRodando'); let Agendars = `<small><strong id="movendoTexto" style="text-align: center;">
    Agendando as tropas v3.0 by <span style="color: red"> Zigaeezz </span> Area Premium Contrate atraves do 0800 000 000<span id="Csaida"></span><span id="info"></span><span id="Inforot"></span></strong></small>`;
                div.insertAdjacentHTML('afterend', Agendars);},1000); return;}
    else if(acess === 3){setTimeout(function(){const div = document.getElementById('divScriptRodando');
      let diffDias = localStorage.getItem('diffDias');
  let Agendars = `<small><strong id="movendoTexto" style="text-align: center;">
    Agendando as tropas v3.0 by <span style="color: red"> Zigaeezz </span> Seu plano expira em ${diffDias} Dias<span id="Csaida"></span><span id="info"></span><span id="Inforot"></span></strong></small>`;
                div.insertAdjacentHTML('afterend', Agendars);},1000);}

    let $InfoTimeTrops = `<div id="command_tempo_alvo" class="clearfix vis " style="width: 890px; border: 1px solid #7d510f; margin: 0px 5px 15px 5px;"><h4>Tempo de Tropas até Destino:</h4><table class="vis" style="border-collapse:separate; border-spacing: 3px; table-layout: fixed; width: 100%;"><tbody><tr><th style="width: 10px"><a href="#" class="unit_link" data-unit="spear"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spear.png" data-title="Lanceiro"></a></th><th style="width: 10px"><a href="#" class="unit_link" data-unit="sword"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_sword.png" data-title="Espadachim"></a></th><th style="width: 10px"><a href="#" class="unit_link" data-unit="axe"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_axe.png" data-title="Bárbaro"></a></th><th style="width: 10px"><a href="#" class="unit_link" data-unit="archer"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_archer.png" data-title="Arqueiro"></a></th><th style="width: 10px"><a href="#" class="unit_link" data-unit="spy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spy.png" data-title="Explorador"></a></th><th style="width: 10px"><a href="#" class="unit_link" data-unit="light"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_light.png" data-title="Cavalaria leve"></a></th><th style="width: 10px"><a href="#" class="unit_link" data-unit="marcher"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_marcher.png" data-title="Arqueiro a Cavalo"></a></th><th style="width: 10px"><a href="#" class="unit_link" data-unit="heavy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_heavy.png" data-title="Cavalaria pesada"></a></th><th style="width: 10px"><a href="#" class="unit_link" data-unit="ram"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_ram.png" data-title="Aríete"></a></th><th style="width: 10px"><a href="#" class="unit_link" data-unit="catapult"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_catapult.png" data-title="Catapulta"></a></th><th style="width: 10px"><a href="#" class="unit_link" data-unit="knight"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_knight.png" data-title="Paladino"></a></th><th style="width: 10px"><a href="#" class="unit_link" data-unit="snob"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_snob.png" data-title="Nobre"></a></th></tr><tr class="units-row"><td style="width: 10px" id="spear" class="nowrap unit-item unit-item-spear"></td><td style="width: 10px" id="sword" class="nowrap unit-item unit-item-sword"></td><td style="width: 10px" id="axe" class="nowrap unit-item unit-item-axe"></td><td style="width: 10px" id="archer" class="nowrap unit-item unit-item-archer"></td><td style="width: 10px" id="spy" class="nowrap unit-item unit-item-spy"></td><td style="width: 10px" id="light" class="nowrap unit-item unit-item-light"></td><td style="width: 10px" id="marcher" class="nowrap unit-item unit-item-archer"></td><td style="width: 10px" id="heavy" class="nowrap unit-item unit-item-heavy"></td><td style="width: 10px" id="ram" class="nowrap unit-item unit-item-ram"></td><td style="width: 10px" id="catapult" class="nowrap unit-item unit-item-catapult"></td><td style="width: 10px" id="knight" class="nowrap unit-item unit-item-knight"></td><td style="width: 10px" id="snob" class="nowrap unit-item unit-item-snob"></td></tr></tbody></table></div>`;

    let $BtnCommand = `<div id="command_actions" class="target-select clearfix vis " style="margin: 0px; border: 0; border-top: 1px solid #7d510f;">
    <h4>Agendar:</h4><table class="vis" style="width: 100%"><tbody><tr><td colspan="8"><input type="datetime-local" id="CStime" step=".001" style="width: 190px"></td></tr><tr><td colspan="4">
    <span>Definir Horário: </span><div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13">
    <span class="tooltiptext">Este campo indica como o horário informado será utilizado como saída ou chegada em relação ao alvo.</span></div></td><td colspan="4"><select id="definirHorario" style="font-size: 9pt; width: 100%;">
    <option value="C">Chegada</option><option value="S">Saída</option></select></td></tr><tr><td colspan="4"><span>Modelo de NT: </span><div class="tooltipDiv">
    <img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext">Este campo indica qual será o modo de envio de NT no seu comando, caso seja informato SEM NT, será enviado apenas as tropas do comando acima, caso seja informado qualquer questão alem desta será habilitado campos conforme opção para selecionar as tropas.</span>
    </div></td><td colspan="4"><select id="NTtype" style="font-size: 9pt; width: 100%;"><option value="0">SEM NT</option><option value="1">NT CANCEL</option><option value="2">NT 2</option><option value="3">NT 3</option>
    <option value="4">NT 4</option><option value="5">NT 5</option></select></td></tr><tr name="type_nt" style="display: none;"><td colspan="4"><span>Tipo de NT: </span><div class="tooltipDiv">
    <img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext">Este campo indica qual se o comando de NT deve ser considerado como um NT Real ou um NT Fake.</span></div></td><td colspan="4">
    <select id="NTReal" style="font-size: 9pt;"><option value="R">Real</option><option value="F">Fake</option></select></td></tr><tr name="tab_nt" style="display: none;"><td colspan="4"><span>Tropas para NT: </span><div class="tooltipDiv">
    <img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext">Este campo indica qual será o modo de envio de NT no seu comando, caso seja informato Unidades, todos os valores utilizados serão em unidades selecionadas para o comando, caso seja informado Percentual, todos os valores serão utilizados em percentuais das unidades existentes na aldeia.</span></div></td><td colspan="4">
    <select id="typeTropas" style="font-size: 9pt; width: 100%;"><option value="U">Unidades</option><option value="P">Percentual</option></select></td></tr><tr><td colspan="4"><span>Alvo das Catapultas: </span><div class="tooltipDiv">
    <img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext">Este campo indica qual será o alvo das catapultas no comando.</span></div></td><td colspan="4">
    <select id="alvoCatapaSimples" style="font-size: 9pt;"><option value="padrao">Padrão</option><option value="main">Edifício principal</option><option value="barracks">Quartel</option><option value="stable">Estábulo</option>
    <option value="garage">Oficina</option><option value="watchtower">Torre de vigia</option><option value="snob">Academia</option><option value="smith">Ferreiro</option><option value="place">Praça de reunião</option>
    <option value="statue">Estátua</option><option value="market">Mercado</option><option value="wood">Bosque</option><option value="stone">Poço de argila</option><option value="iron">Mina de ferro</option><option value="farm">Fazenda</option>
    <option value="storage">Armazém</option><option value="wall">Muralha</option></select></td></tr><tr><td colspan="4"><span>Ataque Sequencial: </span><div class="tooltipDiv">
    <img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext">Este campo indica se irá realizar uma sequencia de ataques com o mesmo comando, ou seja, o comando bate volta e ja é enviado novamente, caso seja informado algum valor neste campo será utilizado como um total de comandos a ser criado, ou seja, caso informe 3, serão criados um total de 3 comandos que irão bater no alvo retornar e ser enviados novamente.</span></div>
    </td><td colspan="4"><input id="qtdeAtaqueSequencial" value="0" style="width: 25px;" type="text"></td></tr></tbody></table>

    <h4 name="tab_nt2" style="border-top: 1px solid #7d510f; display: none;">Nobre 2: <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext">Esta seção irá indicar quantas tropas serão enviadas com o NT indicado.</span></div></h4><table style="display: none;" name="tab_nt2"><tbody><tr><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="spear"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spear.png" data-title="Lanceiro"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="sword"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_sword.png" data-title="Espadachim"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="axe"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_axe.png" data-title="Bárbaro"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="archer"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_archer.png" data-title="Arqueiro"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="spy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spy.png" data-title="Explorador"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="knight"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_knight.png" data-title="Paladino"></a></th></tr><tr class="units-row"><td style="width: 10px" class="nowrap unit-item unit-item-spear">
    <input id="unit_input_spear_nt2" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-sword">
    <input id="unit_input_sword_nt2" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-axe">
    <input id="unit_input_axe_nt2" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-archer">
    <input id="unit_input_archer_nt2" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-spy">
    <input id="unit_input_spy_nt2" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-knight">
    <input id="unit_input_knight_nt2" type="text" data-all-count="0" value="0" style="width: 25px;"></td></tr><tr><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="light"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_light.png" data-title="Cavalaria leve"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="marcher"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_marcher.png" data-title="Arqueiro a Cavalo"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="heavy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_heavy.png" data-title="Cavalaria pesada"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="ram"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_ram.png" data-title="Ariete"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="catapult"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_catapult.png" data-title="Catapulta"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="snob"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_snob.png" data-title="Nobre"></a></th></tr><tr class="units-row"><td style="width: 10px" class="nowrap unit-item unit-item-light">
    <input id="unit_input_light_nt2" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-archer">
    <input id="unit_input_marcher_nt2" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-heavy">
    <input id="unit_input_heavy_nt2" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-ram">
    <input id="unit_input_ram_nt2" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-catapult">
    <input id="unit_input_catapult_nt2" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-snob">
    <input id="unit_input_snob_nt2" type="text" data-all-count="0" value="0" style="width: 25px;"></td></tr></tbody></table>

    <h4 name="tab_nt3" style="display: none; border-top: 1px solid #7d510f;">Nobre 3: <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext">Esta seção irá indicar quantas tropas serão enviadas com o NT indicado.</span></div></h4>	<table class="vis" style="width: 100%; display: none;" name="tab_nt3">		<tbody>			<tr><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="spear"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spear.png" data-title="Lanceiro"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="sword"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_sword.png" data-title="Espadachim"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="axe"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_axe.png" data-title="Bárbaro"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="archer"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_archer.png" data-title="Arqueiro"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="spy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spy.png" data-title="Explorador"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="knight"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_knight.png" data-title="Paladino"></a></th>			</tr><tr class="units-row"><td style="width: 10px" class="nowrap unit-item unit-item-spear">
    <input id="unit_input_spear_nt3" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-sword">
    <input id="unit_input_sword_nt3" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-axe">
    <input id="unit_input_axe_nt3" type="text" data-all-count="0" value="0" style="width: 25px;"></td>	<td style="width: 10px" class="nowrap unit-item unit-item-archer">
    <input id="unit_input_archer_nt3" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-spy">
    <input id="unit_input_spy_nt3" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-knight">
    <input id="unit_input_knight_nt3" type="text" data-all-count="0" value="0" style="width: 25px;"></td></tr><tr><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="light"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_light.png" data-title="Cavalaria leve"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="marcher"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_marcher.png" data-title="Arqueiro a Cavalo"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="heavy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_heavy.png" data-title="Cavalaria pesada"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="ram"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_ram.png" data-title="Ariete"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="catapult"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_catapult.png" data-title="Catapulta"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="snob"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_snob.png" data-title="Nobre"></a></th>			</tr><tr class="units-row">				<td style="width: 10px" class="nowrap unit-item unit-item-light">
    <input id="unit_input_light_nt3" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-archer">
    <input id="unit_input_marcher_nt3" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-heavy">
    <input id="unit_input_heavy_nt3" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-ram">
    <input id="unit_input_ram_nt3" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-catapult">
    <input id="unit_input_catapult_nt3" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-snob">
    <input id="unit_input_snob_nt3" type="text" data-all-count="0" value="0" style="width: 25px;"></td></tr></tbody></table>

    <h4 name="tab_nt4" style="display: none; border-top: 1px solid #7d510f;">Nobre 4: <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext">Esta seção irá indicar quantas tropas serão enviadas com o NT indicado.</span></div></h4><table class="vis" style="width: 100%; display: none;" name="tab_nt4">		<tbody>			<tr>				<th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="spear"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spear.png" data-title="Lanceiro"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="sword"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_sword.png" data-title="Espadachim"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="axe"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_axe.png" data-title="Bárbaro"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="archer"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_archer.png" data-title="Arqueiro"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="spy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spy.png" data-title="Explorador"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="knight"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_knight.png" data-title="Paladino"></a></th></tr>			<tr class="units-row">				<td style="width: 10px" class="nowrap unit-item unit-item-spear">
    <input id="unit_input_spear_nt4" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-sword">
    <input id="unit_input_sword_nt4" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-axe">
    <input id="unit_input_axe_nt4" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-archer">
    <input id="unit_input_archer_nt4" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-spy">
    <input id="unit_input_spy_nt4" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-knight">
    <input id="unit_input_knight_nt4" type="text" data-all-count="0" value="0" style="width: 25px;"></td></tr><tr><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="light"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_light.png" data-title="Cavalaria leve"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="marcher"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_marcher.png" data-title="Arqueiro a Cavalo"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="heavy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_heavy.png" data-title="Cavalaria pesada"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="ram"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_ram.png" data-title="Ariete"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="catapult"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_catapult.png" data-title="Catapulta"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="snob"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_snob.png" data-title="Nobre"></a></th></tr><tr class="units-row"><td style="width: 10px" class="nowrap unit-item unit-item-light">
    <input id="unit_input_light_nt4" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-marcher">
    <input id="unit_input_marcher_nt4" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-heavy">
    <input id="unit_input_heavy_nt4" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-ram">
    <input id="unit_input_ram_nt4" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-catapult">
    <input id="unit_input_catapult_nt4" type="text" data-all-count="0" value="0" style="width: 25px;"></td><td style="width: 10px" class="nowrap unit-item unit-item-snob">
    <input id="unit_input_snob_nt4" type="text" data-all-count="0" value="0" style="width: 25px;"></td></tr></tbody></table>

    <h4 name="tab_nt5" style="display: none; border-top: 1px solid #7d510f;">Nobre 5: <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext">Esta seção irá indicar quantas tropas serão enviadas com o NT indicado.</span></div></h4>	<table class="vis" style="width: 100%; display: none;" name="tab_nt5">		<tbody>			<tr><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="spear"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spear.png" data-title="Lanceiro"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="sword"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_sword.png" data-title="Espadachim"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="axe"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_axe.png" data-title="Bárbaro"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="archer"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_archer.png" data-title="Arqueiro"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="spy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spy.png" data-title="Explorador"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="knight"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_knight.png" data-title="Paladino"></a></th></tr>			<tr class="units-row">				<td style="width: 10px" class="nowrap unit-item unit-item-spear">
    <input id="unit_input_spear_nt5" type="text" data-all-count="0" value="0" style="width: 25px;">				</td>				<td style="width: 10px" class="nowrap unit-item unit-item-sword">
    <input id="unit_input_sword_nt5" type="text" data-all-count="0" value="0" style="width: 25px;">				</td>				<td style="width: 10px" class="nowrap unit-item unit-item-axe">
    <input id="unit_input_axe_nt5" type="text" data-all-count="0" value="0" style="width: 25px;">				</td>	<td style="width: 10px" class="nowrap unit-item unit-item-archer">
    <input id="unit_input_archer_nt5" type="text" data-all-count="0" value="0" style="width: 25px;">			</td>				<td style="width: 10px" class="nowrap unit-item unit-item-spy">
    <input id="unit_input_spy_nt5" type="text" data-all-count="0" value="0" style="width: 25px;">				</td>				<td style="width: 10px" class="nowrap unit-item unit-item-knight">
    <input id="unit_input_knight_nt5" type="text" data-all-count="0" value="0" style="width: 25px;">				</td>			</tr>			<tr><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="light"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_light.png" data-title="Cavalaria leve"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="marcher"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_marcher.png" data-title="Arqueiro a Cavalo"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="heavy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_heavy.png" data-title="Cavalaria pesada"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="ram"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_ram.png" data-title="Ariete"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="catapult"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_catapult.png" data-title="Catapulta"></a></th><th style="width: 10px"><a tabindex="-1" href="#" class="unit_link" data-unit="snob"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_snob.png" data-title="Nobre"></a></th>			</tr><tr class="units-row"><td style="width: 10px" class="nowrap unit-item unit-item-light">
    <input id="unit_input_light_nt5" type="text" data-all-count="0" value="0" style="width: 25px;"></td>	<td style="width: 10px" class="nowrap unit-item unit-item-marcher">
    <input id="unit_input_marcher_nt5" type="text" data-all-count="0" value="0" style="width: 25px;">			</td><td style="width: 10px" class="nowrap unit-item unit-item-heavy">
    <input id="unit_input_heavy_nt5" type="text" data-all-count="0" value="0" style="width: 25px;">				</td>				<td style="width: 10px" class="nowrap unit-item unit-item-ram">
    <input id="unit_input_ram_nt5" type="text" data-all-count="0" value="0" style="width: 25px;">				</td>				<td style="width: 10px" class="nowrap unit-item unit-item-catapult">
    <input id="unit_input_catapult_nt5" type="text" data-all-count="0" value="0" style="width: 25px;">				</td>				<td style="width: 10px" class="nowrap unit-item unit-item-snob">
    <input id="unit_input_snob_nt5" type="text" data-all-count="0" value="0" style="width: 25px;">				</td>			</tr>		</tbody>	</table>

    <h4 name="tab_ntCancel" style="display: none;">NT Cancel: <div class="tooltipDiv"><img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13">
    <span class="tooltiptext">Esta seção se destina ao envio de Nobres e cancelar este comando após 2 minutos do envio para que o inimigo dispare o alarme caso possua.</span></div></h4>
    <table class="vis" style="width: 100%; display: none;" name="tab_ntCancel"><tbody><tr><td colspan="10"><span>Nro comandos: </span> <div class="tooltipDiv">
    <img src="https://dsbr.innogamescdn.com/asset/1e2782a7/graphic/questionmark.png" width="13" height="13"><span class="tooltiptext">Este campo indica qual será o número de comandos criados sequencialmente para o cancelamento de Nobre.</span></div>
    <input id="nroCmd" value="0" style="width: 25px;" type="text"></td></tr></tbody></table><table class="vis" style="width: 100%">
    <tbody><tr><td colspan="10">
    <button type="button" id="agendarAtaque" class="attack btn btn-attack btn-target-action" >Ataque</button></td><td>
    <button type="button" id="agendarApoio" class="support btn btn-support btn-target-action" >Apoio</button></td><td></tr></tbody></table><table class="vis" style="width: 100%">
    <tbody>
    <div class="target-select clearfix vis " style="margin: 0px; border: 0; border-top: 1px solid #7d510f;"><h4>Agendar em Massa:</h4><tr><td colspan="10"><button class="btn am-form-element" id="OpenCommand" type="button" >Agendar</button>
    </td><td><button class="btn am-form-element" id="showComandos" type="button" >Comandos Agendados</button></td></tr></div>
    </tbody></table></div>
    <style>
    .tooltipDiv .tooltiptext {
        visibility: hidden;
        width: 200px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        top: 80%;
        left: 77%;
        transform: translateX(-10%);
        opacity: 0;
        transition: opacity 0.3s;
    }
     .tooltipDiv:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }</style>`;
 let comag= `<div id="command_target_mass" class="target-select clearfix vis " style="width: 370px; margin: 0px; border: 0; border-top: 1px solid #7d510f;"><h4>Informações de Comandos Agendados:</h4><table class="vis" style="border-collapse: separate; border-spacing: 3px; table-layout: fixed; width: 100%;"><tbody><tr><td colspan="10"><span id="CmdAG"></span></td></tr><tr><td colspan="10"><span id="CmdA"></span></td></tr><tr><td colspan="10"><span id="CmdD"></span></td></tr></tbody></table>
 <div id="command_target_mass" class="target-select clearfix vis " style="width: 370; margin: 0px; border: 0; border-top: 1px solid #7d510f;"><h4>Próximo Comando Que será Enviado:</h4>
 <table class="vis" style="border-collapse: separate; border-spacing: 3px; table-layout: fixed; width: 100%;"><tbody><tr><th style="width: 15px"><a href="#" class="unit_link" data-unit="spear"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spear.png" data-title="Lanceiro"></a></th><th style="width: 15px"><a href="#" class="unit_link" data-unit="sword"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_sword.png" data-title="Espadachim"></a></th><th style="width: 15px"><a href="#" class="unit_link" data-unit="axe"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_axe.png" data-title="Bárbaro"></a></th><th style="width: 15px"><a href="#" class="unit_link" data-unit="archer"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_archer.png" data-title="Arqueiro"></a></th><th style="width: 15px"><a href="#" class="unit_link" data-unit="spy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spy.png" data-title="Explorador"></a></th><th style="width: 15px"><a href="#" class="unit_link" data-unit="light"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_light.png" data-title="Cavalaria leve"></a></th><th style="width: 15px"><a href="#" class="unit_link" data-unit="marcher"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_marcher.png" data-title="Arqueiro a Cavalo"></a></th><th style="width: 15px"><a href="#" class="unit_link" data-unit="heavy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_heavy.png" data-title="Cavalaria pesada"></a></th><th style="width: 15px"><a href="#" class="unit_link" data-unit="ram"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_ram.png" data-title="Aríete"></a></th><th style="width: 15px"><a href="#" class="unit_link" data-unit="catapult"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_catapult.png" data-title="Catapulta"></a></th><th style="width: 15px"><a href="#" class="unit_link" data-unit="knight"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_knight.png" data-title="Paladino"></a></th><th style="width: 15px"><a href="#" class="unit_link" data-unit="snob"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_snob.png" data-title="Nobre"></a></th></tr><tr id="TropC" class="units-row"></tr><tr>
 <td id="color" colspan="2"><span id="icon"></span><span id="Tcmd"></span></td><td colspan="5">
 <span title="0069 - Lissim (648|624) K66" class="icon header village"></span><span>Origem</span><input id="CFrom" value="648|624" readonly=""></td><td colspan="5"><span title="0569 | Lissim (713|486)" class="icon header village">
 </span><span>Destino</span><input id="CTo" value="713|486" readonly=""></td></tr><tr><td colspan="5">
 <span>Modelo NT: </span></td><td colspan="7"><span></span><select id="NTtypeABC" style="font-size: 9pt; width: 100%;"><option value="0">SEM NT</option><option value="1">NT CANCEL</option><option value="2">NT 2</option><option value="3">NT 3</option>
    <option value="4">NT 4</option><option value="5">NT 5</option></select></td></tr>
 <tr><td colspan="5"><span>Alvo das Catapultas: </span></td><td colspan="7"><select id="alvoCatC" style="font-size: 9pt;"><option value="padrao">Padrão</option><option value="main">Edifício principal</option><option value="barracks">Quartel</option><option value="stable">Estábulo</option>
    <option value="garage">Oficina</option><option value="watchtower">Torre de vigia</option><option value="snob">Academia</option><option value="smith">Ferreiro</option><option value="place">Praça de reunião</option>
    <option value="statue">Estátua</option><option value="market">Mercado</option><option value="wood">Bosque</option><option value="stone">Poço de argila</option><option value="iron">Mina de ferro</option><option value="farm">Fazenda</option>
    <option value="storage">Armazém</option><option value="wall">Muralha</option></select></td></tr><tr><td colspan="6"><span>Horário Saida:</span>
 <input id="Hsaida" value="2024-09-30T00:00:00" type="datetime-local" readonly=""></td><td colspan="6"><span>Horário Chegada:</span><input id="Hchegada" value="2024-10-01T21:45:45.141" type="datetime-local" readonly=""></td></tr></tbody></table></div></div></div>
    `;
let activeWorldData = JSON.parse(localStorage.getItem('activeTW')) || {};
let coordsToID = JSON.parse(localStorage.getItem(`coordsToID_${activeWorldData['world']}`)) || {};

    $(document).ready(function() {
    const change = document.getElementById('NTtype');
change.addEventListener('change', function() {
    const nt1 = document.querySelector('h4[name="tab_ntCancel"]');
    const nt11 = document.querySelector('table[name="tab_ntCancel"]');
    const nt2 = document.querySelector('h4[name="tab_nt2"]');
    const nt22 = document.querySelector('table[name="tab_nt2"]');
    const nt3 = document.querySelector('h4[name="tab_nt3"]');
    const nt33 = document.querySelector('table[name="tab_nt3"]');
    const nt4 = document.querySelector('h4[name="tab_nt4"]');
    const nt44 = document.querySelector('table[name="tab_nt4"]');
    const nt5 = document.querySelector('h4[name="tab_nt5"]');
    const nt55 = document.querySelector('table[name="tab_nt5"]');

    // Verifica se os elementos existem antes de tentar alterar o display
    const elements = [nt1, nt11, nt2, nt22, nt3, nt33, nt4, nt44, nt5, nt55];

    // Oculta todos os elementos inicialmente
    elements.forEach(element => {
        if (element) {
            element.style.display = 'none';
        }
    });

    // Exibe os elementos com base no valor selecionado
    if (this.value === '1') {
        nt1.style.display = 'block';
        nt11.style.display = 'block';
    }else if (this.value === '2') {
        nt2.style.display = 'block';
        nt22.style.display = 'block';
    } else if (this.value === '3') {
        nt2.style.display = 'block';
        nt22.style.display = 'block';
        nt3.style.display = 'block';
        nt33.style.display = 'block';
    } else if (this.value === '4') {
        nt2.style.display = 'block';
        nt22.style.display = 'block';
        nt3.style.display = 'block';
        nt33.style.display = 'block';
        nt4.style.display = 'block';
        nt44.style.display = 'block';
    } else if (this.value === '5') {
        nt2.style.display = 'block';
        nt22.style.display = 'block';
        nt3.style.display = 'block';
        nt33.style.display = 'block';
        nt4.style.display = 'block';
        nt44.style.display = 'block';
        nt5.style.display = 'block';
        nt55.style.display = 'block';
    }
});
   // gerando data atual
            function convertToInput(date) {
    const ano = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');
    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    const segundos = String(date.getSeconds()).padStart(2, '0');
    const milissegundos = String(date.getMilliseconds()).padStart(3, '0');
    return `${ano}-${mes}-${dia}T${horas}:${minutos}:${segundos}.${milissegundos}`;
}
// Obtendo a data e hora atual
const dateNow = convertToInput(new Date());
// Definindo o valor do input usando JavaScript puro
document.getElementById('CStime').value = dateNow;
document.querySelectorAll('.unitsInput').forEach(input => {
            // Cria um checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = input.name; // O name será o mesmo do input
         // checkbox.id = `checkbox_${input.name}`; // Id único para cada checkbox

            // Adiciona o checkbox após o input
           input.parentNode.insertBefore(checkbox, input);
        });

 function calctemp(){
    const Infotimertrops = document.getElementById('command-data-form');
    const element = document.querySelector('.village-distance');
    const commandDiv = document.getElementById('command_tempo_alvo');
    if (element) {
// Seleciona a célula que contém as coordenadas
const coordinatesCell = document.getElementById('menu_row2');
// Obtém o texto da célula e usa uma expressão regular para extrair apenas as coordenadas
const coordinatesText = coordinatesCell.textContent.trim();
const coordinateorigem = coordinatesText.match(/\((\d+\|\d+)\)/);

   // Seleciona o span com a classe 'village-name'
const villageNameSpan = document.querySelector('.village-name');
// Obtém o texto do span e usa uma expressão regular para extrair as coordenadas
const villageNameText = villageNameSpan.textContent.trim();
const coordinatedestine = villageNameText.match(/\((\d+\|\d+)\)/);
        function calculateDistance(coordinateorigem, coordinatedestine) {
    let x1, y1, x2, y2;
    if (coordinateorigem) {
        // Extrai as coordenadas
        const Cfrom = coordinateorigem[1]; // '699|566'
        [x1, y1] = Cfrom.split('|').map(Number); // Divide em x1 e y1 e converte para número
       // console.log(`x1: ${x1}, y1: ${y1}`); // Exibe os valores
    }

    if (coordinatedestine) {
        // Extrai as coordenadas
        const Cto = coordinatedestine[1]; // '699|566'
        [x2, y2] = Cto.split('|').map(Number); // Divide em x2 e y2 e converte para número
       // console.log(`x2: ${x2}, y2: ${y2}`); // Exibe os valores
    }

    var deltaX = Math.abs(x1 - x2);
    var deltaY = Math.abs(y1 - y2);
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}calculateDistance();
        if (element && !commandDiv) {
        function formatTime(unitTime) {
    const totalSeconds = Math.floor(unitTime / 1000).toString().padStart(2, '0'); // Converte milissegundos para segundos
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');;

    return `${hours}:${minutes}:${seconds}`; // Formata como string
             }
            const distance = calculateDistance(coordinateorigem, coordinatedestine);
 // Oculta todas as células da tabela no início
$('<style>').text(`
    #command_tempo_alvo .units-row td,
    #command_tempo_alvo th {
        display: none;
    }
`).appendTo('head');
function RequestUnits() {
    return $.get('/interface.php?func=get_unit_info').then(function ($xml) {
        var $units = {};
        $($xml).find('config').children().each(function () {
            const unitName = this.tagName;
            const speed = Number($(this).find('speed').prop('textContent'));

            if (isNaN(speed)) return; // Ignora unidades inválidas

            const unitTime = distance * speed * 60000;
            const formattedTime = formatTime(unitTime);

            $units[unitName] = { speed, unitTime };

            // Exibe apenas os elementos correspondentes da unidade requisitada
            $('#command_tempo_alvo th a[data-unit="' + unitName + '"]').closest('th').css('display', 'table-cell');
            $('#command_tempo_alvo #' + unitName).text(formattedTime).css('display', 'table-cell');
        });

        return $units;
    });
}
RequestUnits();
            function extrairIdDaPagina() {
    const url = window.location.href; // Obtém a URL da página atual
    const villageNumber = url.split('&screen=')[0]; // Divide a URL e pega a parte antes do parâmetro "screen"
    return villageNumber;
}
            function RequestUnitsSelect() {
                let x2, y2;
        // Extrai as coordenadas
        const Cto = coordinatedestine[1]; // '699|566'
        [x2, y2] = Cto.split('|').map(Number);
    const selectedUnits = [];
    return $.get('/interface.php?func=get_unit_info').then(function ($xml) {
            const units = {};
            const unitsM = [
    'unit_input_spear',
    'unit_input_sword',
    'unit_input_axe',
    'unit_input_archer',
    'unit_input_spy',
    'unit_input_light',
    'unit_input_marcher',
    'unit_input_heavy',
    'unit_input_ram',
    'unit_input_catapult',
    'unit_input_knight',
    'unit_input_snob',
];
        unitsM.forEach(id => {
    const input = document.getElementById(id);
  });
for (let i = 0; i < unitsM.length; i++) {
    const inputElement = document.getElementById(unitsM[i]);
    const unitName = inputElement.name; // Obtém o nome da unidade
    const inputValue = inputElement.value || 0; // Obtém o valor do input
    const checkbox = document.querySelector(`input[type="checkbox"][name="${unitName}"]`);
         if(!checkbox.checked){
        selectedUnits.push({ unitName, inputValue });
         }else{ const inputValue = 'all';
             selectedUnits.push({ unitName, inputValue });}
}
        // Processa o XML e calcula unitTime para as unidades
            $($xml).find('config').children().each(function () {
                const unitName = this.tagName;
                const speed = Number($(this).find('speed').text());
                const unitTime = distance * speed * 60000;
                // Armazena o unitTime e a unidade, se ela estiver selecionada
                if (selectedUnits.some(unit => unit.unitName === unitName && unit.inputValue != 0)) {
                    units[unitName] = {
                        speed: speed,
                        unitTime: unitTime
                    };
                }
            });
            // Encontra a unidade com o maior unitTime
let maxUnitTime = -1;
let maxUnitName = '';
// Verifica as unidades selecionadas
for (const unit of selectedUnits) {
    const unitData = units[unit.unitName];
    if (unitData && unitData.unitTime > maxUnitTime) {
        maxUnitTime = unitData.unitTime;
        maxUnitName = unit.unitName;
    }
}
// Compara os tempos formatados e exibe os resultados
if (formatTime(maxUnitTime)) {
    const unitmaxx = formatTime(maxUnitTime)
    console.log('Unidade com maior tempo:', maxUnitName, 'Tempo:', unitmaxx);
    // Exibe o resultado na interface, se necessário
}
         const villageNumber = extrairIdDaPagina();
            let horario = document.getElementById('definirHorario').value || 'C';
            let nome;
            let link = `${villageNumber}&screen=place&x=${x2}&y=${y2}`;
            let Dsaida;
            let Dchegada;
            let CFrom = coordinateorigem[1];
            let CTo = coordinatedestine[1];
            let NtType = document.getElementById('NTtype').value;
            let AlvCat = document.getElementById('alvoCatapaSimples').value;
               if(!NtType){NtType = 0;}
               if(!AlvCat){AlvCat = 'padrao';}
               nome = localStorage.getItem('Nome');
                let QtAtks = parseInt(document.getElementById('qtdeAtaqueSequencial').value) || 0;
                       if(QtAtks === 0){ QtAtks = 1;}
                 let Ddsaida;
                 let Ddchegada;
              if (horario === 'S') {
                const ssaida = document.getElementById('CStime').value;// Salva a data/hora se "Saída"
                  Ddsaida = document.getElementById('CStime').value;
                    const saida = new Date(ssaida);
                  const timeToAdc = (maxUnitTime/1000);
                  saida.setSeconds(saida.getSeconds() + timeToAdc);
                    const TForm = convertToInput(saida);
                   Ddchegada = TForm;
         } else if (horario === 'C') {
                  // Obtém a data inserida no input
                      const inputDate = document.getElementById('CStime').value;
                              const arrivalTime = new Date(inputDate);
                       const timeToSubtract = (maxUnitTime/1000); // tempo a ser subtraído em milissegundos
                          // Subtraindo os milissegundos
                           arrivalTime.setSeconds(arrivalTime.getSeconds() - timeToSubtract);
                           // Convertendo a data formatada após a subtração
                            const formattedDate = convertToInput(arrivalTime);
                       // Subtrai o tempo formatado
                   Ddsaida = formattedDate; // Salva a data/hora ajustada para "Chegada"
                   Ddchegada = inputDate;
                   }
                const tdas = (maxUnitTime/1000);
               Dsaida = Ddsaida;
               Dchegada = Ddchegada;
        for (let xy = 0; xy < QtAtks; xy++) { // Altere 10 para o número de iterações desejado
           if(xy === 0){
               Dsaida = Ddsaida;
               Dchegada = Ddchegada;}else{let temp = Ddchegada;
            const nsaida = new Date(temp);
            nsaida.setSeconds(nsaida.getSeconds() + tdas + 30);
             Dsaida = convertToInput(nsaida);
             Ddchegada = temp + tdas;
              const sssaida = new Date(Dsaida);
            sssaida.setSeconds(sssaida.getSeconds() + tdas);
              Ddchegada = convertToInput(sssaida);
              Dchegada = Ddchegada;
             console.log(`A: ${Dsaida}, B: ${Ddchegada}`);}

     // Recupera os dados existentes do localStorage
              let savedModels = JSON.parse(localStorage.getItem('savedModels')) || [];
              let selectedData = { nome, CFrom, CTo,link, units: selectedUnits, Dsaida, Dchegada, NtType, AlvCat};
                // Adiciona o novo modelo
        // Salva de volta no localStorage
                 savedModels.push(selectedData); // Adiciona apenas se o link for novo
               localStorage.setItem('savedModels', JSON.stringify(savedModels));
            // Ordena o array pela data de Dsaida
         savedModels.sort((a, b) => new Date(a.Dsaida) - new Date(b.Dsaida));
        console.log('Modelos organizados pela data de saída:', savedModels);
               // console.log(`Modelo salvo: ${JSON.stringify(savedModels, null, 2)}` );
        }

return units;
        })
        .catch(function (error) {
            console.error('Erro ao obter informações das unidades:', error);
        });}
       //criando  a função de comandos
        function agendar(){
            document.getElementById('agendarAtaque').addEventListener('click', function () {
                const atk = 'Atak';
                localStorage.setItem('Nome', atk);
                RequestUnitsSelect();
            });
            document.getElementById('agendarApoio').addEventListener('click', function () {
                const apoio = 'Apoio';
                localStorage.setItem('Nome', apoio);
                RequestUnitsSelect();
            });
        }agendar();
       Infotimertrops.insertAdjacentHTML('beforebegin', $InfoTimeTrops);
        }
    }
     else if(!element && commandDiv){
        // Fecha a div, por exemplo, escondendo-a
        commandDiv.remove();
    }setTimeout (function(){calctemp()},1000); }
  calctemp();



    });
    function checkAndOpenLinks() {
    const savedModels = JSON.parse(localStorage.getItem('savedModels')) || [];
            // Ordena o array pela data de Dsaida
        if (savedModels.length > 2) {
        savedModels.sort((a, b) => new Date(b.Dsaida) - new Date(a.Dsaida));
         savedModels.sort((a, b) => new Date(a.Dsaida) - new Date(b.Dsaida));}
    if (savedModels.length > 0) {
        const targetElements = document.getElementsByClassName('target-select-links');
        if (!document.getElementById('command_target_mass')) {
            targetElements[0].insertAdjacentHTML('afterend', comag);
        }
        const now = new Date();
        savedModels.forEach((model, index) => {
            const modelTime = new Date(model.Dsaida);
            const timeDiff = modelTime - now;
            // Verifica se faltam 30 segundos e se o modelo ainda não foi aberto
                if (timeDiff <= 14000 && !model.opened) {
                    model.opened = true; // Marca o modelo como aberto
                    localStorage.setItem('savedModels', JSON.stringify(savedModels));
                    window.open(model.link, '_blank'); // Abre o link em uma nova aba
                }else if (model.opened) {setTimeout(() => {
                                  savedModels.splice(index, 1); // Remove o modelo da lista
                                 localStorage.setItem('savedModels', JSON.stringify(savedModels)); // Atualiza o localStorage
                                }, 4000); // Espera 30 segundos antes de verificar
                                         }});}else if(document.getElementById('command_target_mass') && savedModels.length <= 0){document.getElementById('command_target_mass').remove();}
//================ config para exibição info de comandos agendados ================================
const row = document.getElementById('TropC');
        if (savedModels.length > 0) {
  if (row.children.length === 0) {
    // Cria um <td> para cada unitName e depois preenche com inputValue
    savedModels[0].units.forEach(unit => {
      const td = document.createElement('td');
      td.style.width = '15px';
      const unitName = unit.unitName || 'Unnamed';
     // td.className = `nowrap unit-item unit-item-${unitName.replace(/\s+/g, '-').toLowerCase()}`;
      td.textContent = unitName; // Adiciona o nome da unidade
      td.style.textAlign = 'left';
      row.appendChild(td);
    });}
    // Depois, preenche os valores correspondentes
    savedModels[0].units.forEach((unit, index) => {
      const td = row.children[index]; // Pega o <td> correspondente
      td.textContent = unit.inputValue; // Atualiza o texto do <td> com o inputValue
    });

   if(savedModels[0].nome === 'Atak'){document.getElementById('color').style.backgroundColor = 'rgba(255, 0, 0, 0.53)';
       document.getElementById('icon').innerHTML = '<a href="#" class="unit_link" data-unit="axe"><img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_axe.png" alt="Unit Image"></a>'}
      else{document.getElementById('color').style.backgroundColor = 'rgba(0, 0, 255, 0.53)';
          document.getElementById('icon').innerHTML = '<a href="#" class="unit_link" data-unit="sword"><img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_sword.png" alt="Unit Image"></a>'}
     document.getElementById('Tcmd').textContent = savedModels[0].nome;
     document.getElementById('Hsaida').value = savedModels[0].Dsaida;
     document.getElementById('CFrom').value = savedModels[0].CFrom;
     document.getElementById('alvoCatC').value = savedModels[0].AlvCat;
     document.getElementById('NTtypeABC').value = savedModels[0].NtType;
     document.getElementById('CTo').value = savedModels[0].CTo;
     document.getElementById('Hchegada').value = savedModels[0].Dchegada;
    document.getElementById('CmdAG').textContent = `Número de Comandos Agendados: ${savedModels.length}`;
           const totalatak = savedModels
                      .filter(model => model.nome === 'Atak') // Filtra modelos com o nome 'Atak'
                      .reduce((total, model) => total + (model.nome ? (model.nome.length - 3) : 0), 0); // Soma o total de ataks
       document.getElementById('CmdA').textContent = `Número de Ataques Agendados: ${totalatak}`;
           const totalapoio = savedModels
                      .filter(model => model.nome === 'Apoio') // Filtra modelos com o nome 'Apoio'
                      .reduce((total, model) => total + (model.nome ? (model.nome.length - 4) : 0), 0); // Soma o total de apoios
       document.getElementById('CmdD').textContent = `Número de Apoios Agendados: ${totalapoio}`;}
//=================================================================================================
                            setTimeout(checkAndOpenLinks, 1000);
    } checkAndOpenLinks();
function send(){
                         const inputField = document.querySelector('.target-input-field');
     const savedModels = JSON.parse(localStorage.getItem('savedModels')) || [];
 if (window.opener && !window.opener.closed) {
     savedModels.forEach((model, index) => {
         if(model.opened){
                      model.units.forEach(unit => {
                          const inputName = unit.unitName;
                           const inputValue = unit.inputValue;
                                       console.log(`Inserindo unidade: ${inputName}, Valor: ${inputValue}`);
                                      // Insere o valor coletado na respectiva input
                                           if(inputValue === 'all'){
                                            const input = document.getElementById(`units_entry_all_${inputName}`);
                                               input.click(); }
                                                else{const input = document.getElementById(`unit_input_${inputName}`);
                                                input.value = inputValue;
                                                }});
             if (inputField.style.display === 'none'){setTimeout(() => {if(model.nome === 'Atak'){ document.getElementById('target_attack').click();}else{document.getElementById('target_support').click();}}, 2000);}
                            }
                                               });
                setTimeout(() => {window.close();}, 3000);
}} send();
    var btnComand = document.getElementById('target_support');
    btnComand.insertAdjacentHTML('afterend', $BtnCommand);
    function updateTable() {
let Tabelagendados = `
    <div id="content_history_comands">
        <table id="dataTable" class="vis overview_table" width="100%" style="border-spacing: 2px; border-collapse: separate; border: 1px solid #7d510f; border-top: 0px;">
            <thead>
                <tr>
                    <th colspan="2">Comando</th>
                    <th style="width: 60px; text-align:center;">Origem</th>
                    <th style="width: 60px; text-align:center;">Destino</th>
                    <th>Saída</th>
                    <th>Chegada</th>
                    <th style="text-align:center"><img src="https://dsbr.innogamescdn.com/asset/68480359/graphic/unit/unit_spear.png" data-title="Lanceiro"></th>
                    <th style="text-align:center"><img src="https://dsbr.innogamescdn.com/asset/68480359/graphic/unit/unit_sword.png" data-title="Espadachim"></th>
                    <th style="text-align:center"><img src="https://dsbr.innogamescdn.com/asset/68480359/graphic/unit/unit_axe.png" data-title="Bárbaro"></th>
                    <th style="text-align:center"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_archer.png" data-title="Arqueiro"></th>
                    <th style="text-align:center"><img src="https://dsbr.innogamescdn.com/asset/68480359/graphic/unit/unit_spy.png" data-title="Explorador"></th>
                    <th style="text-align:center"><img src="https://dsbr.innogamescdn.com/asset/68480359/graphic/unit/unit_light.png" data-title="Cavalaria leve"></th>
                    <th style="text-align:center"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_marcher.png" data-title="Cavalaria Arqueira"></th>
                    <th style="text-align:center"><img src="https://dsbr.innogamescdn.com/asset/68480359/graphic/unit/unit_heavy.png" data-title="Cavalaria pesada"></th>
                    <th style="text-align:center"><img src="https://dsbr.innogamescdn.com/asset/68480359/graphic/unit/unit_ram.png" data-title="Aríete"></th>
                    <th style="text-align:center"><img src="https://dsbr.innogamescdn.com/asset/68480359/graphic/unit/unit_catapult.png" data-title="Catapulta"></th>
                    <th style="text-align:center"><img src="https://dsbr.innogamescdn.com/asset/68480359/graphic/unit/unit_knight.png" data-title="Paladino"></th>
                    <th style="text-align:center"><img src="https://dsbr.innogamescdn.com/asset/68480359/graphic/unit/unit_snob.png" data-title="Nobre"></th>
                    <th style="text-align:center">Cancelar</th>
                    <th style="text-align:center">Editar</th>
                </tr>
            </thead>
            <tbody>
                <!-- As linhas serão adicionadas aqui -->
            </tbody>
        </table>
    </div>
`;

document.getElementById('contentContainer').insertAdjacentHTML('afterend', Tabelagendados);

let savedModels = JSON.parse(localStorage.getItem('savedModels')) || [];
let tableBody = document.querySelector("#dataTable tbody");
tableBody.innerHTML = ''; // Limpa a tabela
function carregar(){
savedModels.forEach((model, index) => {
    if (!model.opened) {
        if(model.nome === 'Atak'){
        let newRowHTML = `<tr class="nowrap">
            <td style="background-color: rgba(255, 0, 0, 0.53);">
                <a href="#" class="unit_link" data-unit="axe">
                    <img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_axe.png" alt="Unit Image">
                </a>
            </td>
            <td style="background-color: rgba(255, 0, 0, 0.53);"><span>Ataque</span></td>
            <td style="text-align:center"><span>${model.CFrom}</span></td>
            <td style="text-align:center"><span>${model.CTo}</span></td>
            <td><input id="Hsaidah-${index}" value="${model.Dsaida}" type="datetime-local" readonly style="width: 165px;"></td>
            <td><input id="Hdestinh-${index}" value="${model.Dchegada}" type="datetime-local" readonly style="width: 165px;"></td>`;

        // Adicionando unidades
            model.units.forEach(unit => {
            newRowHTML += `<td style="text-align:center;"><input style="width: 25px;" id="unitValue-${index}-${unit.unitName}" value="${unit.inputValue || '0'}" readonly></td>`;
        });

        // Botões de excluir e editar com IDs específicos
        newRowHTML += `
            <td style="text-align:center">
                <button type="button" class="deleteItem" data-index="${index}">
                    <img class="village-delete" alt="" src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic//delete.png">
                </button>
            </td>
            <td style="text-align:center">
                <button type="button" class="editButton" data-index="${index}" id="editButton-${index}">Editar</button>
                <button type="button" class="confirmedt" style="display: none;" id="confirmedt-${index}" data-index="${index}">Confirmar</button>
            </td>
        </tr>`;
         tableBody.insertAdjacentHTML('beforeend', newRowHTML);
        }
        else{let newRowHTML = `<tr class="nowrap">
            <td style="background-color: rgba(0, 0, 255, 0.53);">
                <a href="#" class="unit_link" data-unit="sword">
                    <img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_sword.png" alt="Unit Image">
                </a>
            </td>
            <td style="background-color: rgba(0, 0, 255, 0.53);"><span>Apoio</span></td>
            <td style="text-align:center"><span>${model.CFrom}</span></td>
            <td style="text-align:center"><span>${model.CTo}</span></td>
            <td><input id="Hsaidah-${index}" value="${model.Dsaida}" type="datetime-local" readonly style="width: 165px;"></td>
            <td><input id="Hdestinh-${index}" value="${model.Dchegada}" type="datetime-local" readonly style="width: 165px;"></td>`;

        // Adicionando unidades
            model.units.forEach(unit => {
            newRowHTML += `<td style="text-align:center;"><input style="width: 25px;" id="unitValue-${index}-${unit.unitName}" value="${unit.inputValue || '0'}" readonly></td>`;
        });

        // Botões de excluir e editar com IDs específicos
        newRowHTML += `
            <td style="text-align:center">
                <button type="button" class="deleteItem" data-index="${index}">
                    <img class="village-delete" alt="" src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic//delete.png">
                </button>
            </td>
            <td style="text-align:center">
                <button type="button" class="editButton" data-index="${index}" id="editButton-${index}">Editar</button>
                <button type="button" class="confirmedt" style="display: none;" id="confirmedt-${index}" data-index="${index}">Confirmar</button>
            </td>
        </tr>`;

         tableBody.insertAdjacentHTML('beforeend', newRowHTML);}
    }
});
}carregar();
// Função para deletar item
tableBody.addEventListener('click', function (event) {
    if (event.target.closest('.deleteItem')) {
        const index = event.target.closest('.deleteItem').dataset.index;
        savedModels.splice(index, 1); // Remove o item do array
        localStorage.setItem('savedModels', JSON.stringify(savedModels)); // Atualiza o localStorage
        tableBody.innerHTML = ''; // Limpa a tabela
        // Recarrega as linhas da tabela
                carregar();
            }
});
// Função para editar item
tableBody.addEventListener('click', function (event) {
    if (event.target.closest('.editButton')) {
        const index = event.target.closest('.editButton').dataset.index;
        const inputs = document.querySelectorAll(`#dataTable input[id^='unitValue-${index}']`);

        inputs.forEach(input => {
            input.readOnly = false; // Torna os campos editáveis
        });

        event.target.style.display = 'none'; // Esconde o botão de editar
        const confirmBtn = document.querySelector(`#confirmedt-${index}`);
        confirmBtn.style.display = 'inline'; // Mostra o botão de confirmar
    }
});
// Função para confirmar edição
tableBody.addEventListener('click', function (event) {
    if (event.target.closest('.confirmedt')) {
        const index = event.target.closest('.confirmedt').dataset.index;
        const inputs = document.querySelectorAll(`#dataTable input[id^='unitValue-${index}']`);

        inputs.forEach((input, unitIndex) => {
            savedModels[index].units[unitIndex].inputValue = input.value; // Atualiza o valor no array
            input.readOnly = true; // Torna os campos não editáveis novamente
        });

        event.target.style.display = 'none'; // Esconde o botão de confirmar
        const editBtn = document.querySelector(`#editButton-${index}`);
        editBtn.style.display = 'inline'; // Mostra o botão de editar novamente
        localStorage.setItem('savedModels', JSON.stringify(savedModels)); // Atualiza o localStorage
    }
});

        }
    document.getElementById('OpenCommand').addEventListener('click', function () {
       if(!document.getElementById('content_mass_comands')){ openComand();}
        });
    document.getElementById('showComandos').addEventListener('click', function () {
        updateTable();});
    function openComand(){
    let $Html10 = `<div id="content_mass_comands" class="vis"  style="width: 100%; border-collapse: margin: 5px; border: 0px"><h4>Agendamento em Massa</h4><tr><td>
    <div class="vis" style="margin: 5px;"><table class="vis" style="width: 100%; border-collapse: margin-top: 2px; border: 0px solid rgb(125, 81, 15);"><tbody> <tr><td class="nowrap">
    <a href="#" class="unit_link" data-unit="spear"><img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_spear.png" class="" data-title="Lanceiro"></a>
    <input id="unit_input_spear_massa" name="spear" type="checkbox" data-all-count="0" readonly=""></td><td class="nowrap">
    <a href="#" class="unit_link" data-unit="sword"><img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_sword.png" class="" data-title="Espadachim"></a>
    <input id="unit_input_sword_massa" name="sword" type="checkbox" data-all-count="0" readonly="">                        </td>                        <td class="nowrap">
    <a href="#" class="unit_link" data-unit="axe"><img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_axe.png" class="" data-title="Bárbaro"></a>
    <input id="unit_input_axe_massa" name="axe" type="checkbox" data-all-count="0" readonly="">                        </td>				 <td class="nowrap">
    <a href="#" class="unit_link" data-unit="archer"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_archer.png" class="" data-title="Arqueiro"></a>
    <input id="unit_input_archer_massa" name="archer" type="checkbox" data-all-count="0" readonly="">				 </td>					 <td class="nowrap">
    <a href="#" class="unit_link" data-unit="spy"><img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_spy.png" class="" data-title="Explorador"></a>
    <input id="unit_input_spy_massa" name="spy" type="checkbox" data-all-count="0" readonly="">					 </td>					 <td class="nowrap">
    <a href="#" class="unit_link" data-unit="light"><img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_light.png" class="" data-title="Cavalaria leve"></a>
    <input id="unit_input_light_massa" name="light" type="checkbox" data-all-count="0" readonly="">					 </td>				 <td class="nowrap">
    <a href="#" class="unit_link" data-unit="marcher"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_marcher.png" class="" data-title="Arqueiro a Cavalo"></a>
    <input id="unit_input_marcher_massa" name="marcher" type="checkbox" data-all-count="0" readonly="">                </td>                    <td class="nowrap">
    <a href="#" class="unit_link" data-unit="heavy"><img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_heavy.png" class="" data-title="Cavalaria pesada"></a>
    <input id="unit_input_heavy_massa" name="heavy" type="checkbox" data-all-count="0" readonly="">                    </td>                    <td class="nowrap">
    <a href="#" class="unit_link" data-unit="ram"><img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_ram.png" class="" data-title="Aríete"></a>
    <input id="unit_input_ram_massa" name="ram" type="checkbox" data-all-count="0" readonly="">                    </td>                    <td class="nowrap">
    <a href="#" class="unit_link" data-unit="catapult"><img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_catapult.png" class="" data-title="Catapulta"></a>
    <input id="unit_input_catapult_massa" name="catapult" type="checkbox" data-all-count="0" readonly="">                    </td>                    <td class="nowrap">
    <a href="#" class="unit_link" data-unit="knight"><img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_knight.png" class="" data-title="Paladino"></a>
    <input id="unit_input_knight_massa" name="knight" type="checkbox" data-all-count="0" readonly="">                    </td>                    <td class="nowrap">
    <a href="#" class="unit_link" data-unit="snob"><img src="https://dsbr.innogamescdn.com/asset/fd86cac8/graphic/unit/unit_snob.png" class="" data-title="Nobre"></a>
    <input id="unit_input_snob_massa" name="snob" type="checkbox" data-all-count="0" readonly=""></td></tr><tr><td class="nowrap">

    <input id="unit_input_spear_massa_nro" name="spear" type="text" value="" data-all-count="0" style="width : 90%;"></td><td class="nowrap">
    <input id="unit_input_sword_massa_nro" name="sword" type="text" value="" data-all-count="0" style="width : 90%;"></td><td class="nowrap">
    <input id="unit_input_axe_massa_nro" name="axe" type="text" value="" data-all-count="0" style="width : 90%;"></td><td class="nowrap">
    <input id="unit_input_archer_massa_nro" name="archer" type="text" value="" data-all-count="0" style="width : 90%;"></td><td class="nowrap">
    <input id="unit_input_spy_massa_nro" name="spy" type="text" value="" data-all-count="0" style="width : 90%;"></td><td class="nowrap">
    <input id="unit_input_light_massa_nro" name="light" type="text" value="" data-all-count="0" style="width : 90%;"></td><td class="nowrap">
    <input id="unit_input_marcher_massa_nro" name="marcher" type="text" value="" data-all-count="0" style="width : 90%;"></td><td class="nowrap">
    <input id="unit_input_heavy_massa_nro" name="heavy" type="text" value="" data-all-count="0" style="width : 90%;"></td><td class="nowrap">
    <input id="unit_input_ram_massa_nro" name="ram" type="text" value="" data-all-count="0" style="width : 90%;"></td><td class="nowrap">
    <input id="unit_input_catapult_massa_nro" name="catapult" type="text" value="" data-all-count="0" style="width : 90%;"></td><td class="nowrap">
    <input id="unit_input_knight_massa_nro" name="knight" type="text" value="" data-all-count="0" style="width : 90%;"></td><td class="nowrap">
    <input id="unit_input_snob_massa_nro" name="snob" type="text" value="" data-all-count="0" style="width : 90%;"></td></tr><tr><td colspan="2">

    <span>Alvo das Catapultas: </span></td><td colspan="10"><select id="alvoCatapaMassa" style="font-size: 9pt;">
    <option value="padrao">Padrão</option><option value="main">Edifício principal</option> <option value="barracks">Quartel</option>
    <option value="stable">Estábulo</option><option value="garage">Oficina</option><option value="watchtower">Torre de vigia</option>
    <option value="snob">Academia</option><option value="smith">Ferreiro</option><option value="place">Praça de reunião</option>
    <option value="statue">Estátua</option><option value="market">Mercado</option><option value="wood">Bosque</option>
    <option value="stone">Poço de argila</option><option value="iron">Mina de ferro</option>                           <option value="farm">Fazenda</option>
    <option value="storage">Armazém</option><option value="wall">Muralha</option></select></td></tr></tbody></table>

    </div><div class="vis" style="margin: 5px;"><div style="margin: 10px;">                 <br>
    <span>Grupo de Origem</span><span id="group" style="font-size: 9pt;"></span><button type="button" id="botaoGrupoBuscaCoordenada" class="support btn btn-target-action">Importar Coordenadas</button><br><br>

    <span>Coordenadas Origem</span>
    <textarea id="CoordenadasOrigem" rows="6" style="width: 99%;"></textarea>                 <br>
    <button type="button" id="botaoRemoveCoordenadaOrigemUtilizadas" class="support btn btn-target-action">Organizar e Remove Coordenadas Já Utilizadas</button><input id="NroOrigens" readonly="" style="float: right; width: 40px;">
    <span style="float: right; margin-right: 5px;">Nro de Origem:</span><br><br><span>Nro de Origem por Destino:</span><input id="NroOrigensPorAlvo" style="width: 40px;">
    <br><br><div style="margin-bottom: 5px;"><span>Definição de Origens por Destinos: </span><select id="defOrigemDestino" style="font-size: 9pt;">
    <option value="P">Priorizar Mais Próximas</option><option value="D">Priorizar Mais Distantes</option></select></div><br>

    <span>Coordenadas Destino</span>
    <textarea id="CoordenadasDestino" rows="6" style="width: 99%;"></textarea>
    <button type="button" id="botaoRemoveCoordenadaDestinoUtilizadas" class="support btn btn-target-action">Organizar e Remove Coordenadas Já Utilizadas</button>
    <input id="NroDestinos" readonly="" style="float: right; width: 40px;"><span style="float: right; margin-right: 5px;">Nro de Destinos:</span><br><br>
    <div style="margin-bottom: 5px;"><span>Modalidade de Cadastro: </span><select id="ModEnvioMassa" style="font-size: 9pt;">
    <option value="0">Programado</option>
    <option value="1">Programação Aleatória</option></select></div><div>
    <span name="envioProgramado">Horario de Chegada</span><input name="envioProgramado" type="datetime-local" id="CStimeMassa" step=".001">
    <span name="envioProgramadoAleatorio" style="display: none;">Até </span>
    <input name="envioProgramadoAleatorio" style="display: none;" type="datetime-local" id="CStimeMassaAte" step=".001"></div>
    <div>
    <input type="checkbox" id="EnvioMesmoBN" name="EnvioMesmoBN"><label for="EnvioMesmoBN">Enviar Mesmo se Comando Bater no BN</label>                 </div>                 <div>
    <input type="checkbox" id="EnvioMesmoSemTempo" name="EnvioMesmoSemTempo"><label for="EnvioMesmoSemTempo">Enviar Mesmo que Comando não chegue mais a Tempo</label>                 </div>                 <div>
    <input type="checkbox" id="CadastroComErro" name="CadastroComErro"><label for="CadastroComErro">Agendar Comandos em Massa mesmo que algum Comando esteja com Problema</label>                 </div>
    <br>
    <button type="button" id="agendarEmMassaConfirmAtaque" class="attack btn btn-attack btn-target-action" style="margin-bottom:5px;">Confirmar Ataque Em Massa</button>
    <button type="button" id="agendarEmMassaConfirmApoio" class="support btn btn-support btn-target-action" style="margin-bottom:5px;">Confirmar Apoio Em Massa</button>
    <button type="button" id="simularEmMassaConfirm" class="support btn btn-target-action" style="margin-bottom:5px;">Simulação Em Massa</button></div></div></div>

   <style>
    .tooltipDiv .tooltiptext {
        visibility: hidden;
        width: 200px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s;
    }
     .tooltipDiv:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }</style>`;
    // Adiciona o HTML antes de cada elemento 'menu-item'
    document.getElementById('contentContainer').insertAdjacentHTML('afterend', $Html10);

        //organizando proprios grupos na area origem
async function fetchVillageGroups() {
    try {
        const villageGroups = await jQuery.get(
            game_data.link_base_pure +
                'groups&mode=overview&ajax=load_group_menu'
        );
        return villageGroups;
    } catch (error) {
        UI.ErrorMessage('Error fetching village groups!');
        return null; // Retorno padrão caso ocorra um erro
    }
}
async function renderGroupsFilter() {
    const groups = await fetchVillageGroups();
    if (!groups || !groups.result) {
        return ''; // Retornar uma string vazia se não houver grupos válidos
    }

    let selected_Group = localStorage.getItem('selected_groupoo') || 0;
    selected_Group = parseInt(selected_Group); // Converter para número inteiro

    let groupsFilter = `
        <select id="raGroupsFilter1">`;

    for (const [_, group] of Object.entries(groups.result)) {
        const { group_id, name } = group;
        const isSelected = parseInt(group_id) === selected_Group ? 'selected' : '';
        if (name !== undefined) {
            groupsFilter += `<option value="${group_id}" ${isSelected}>${name}</option>`;
        }
    }

    groupsFilter += `</select>`;

    return groupsFilter;
}
// Função para atualizar a div com id "group"
async function updateGroupFilter() {
    const groupDiv = document.getElementById('group');
    if (!groupDiv) {
        console.error('Div "group" não encontrada.');
        return;
    }

    const groupsFilter = await renderGroupsFilter();
    if (!groupsFilter) {
        console.error('Erro ao renderizar o filtro de grupos.');
        return;
    }

    groupDiv.innerHTML = groupsFilter;
}
    updateGroupFilter();
     // carregar aldeias no textarea
      function fetchAndSaveVillagesData(selected_Group) {
    const url = game_data.link_base_pure + 'groups&ajax=load_villages_from_group';
    const group_id = selected_Group;

    return new Promise((resolve, reject) => {
        jQuery.post({
            url: url,
            data: { group_id: group_id },
            success: function(response) {
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(response.html, 'text/html');
                const tableRows = jQuery(htmlDoc).find('#group_table > tbody > tr').not(':eq(0)');

                let villagesList = [];

                tableRows.each(function (index) {
                    const villageId = parseInt(jQuery(this).find('td:eq(0) a').attr('data-village-id') ?? jQuery(this).find('td:eq(0) a').attr('href').match(/\d+/)[0]);
                    const villageName = jQuery(this).find('td:eq(0)').text().trim();
                    const villageCoords = jQuery(this).find('td:eq(1)').text().trim();

                    villagesList.push({ id: villageId, name: villageName, coords: villageCoords });
                });

                resolve(villagesList); // Resolve a promessa com a lista de aldeias
            },
            error: function(error) {
                console.error('Erro ao buscar dados das aldeias:', error);
                reject(error); // Rejeita a promessa em caso de erro
            }
        });
    });
}
            document.getElementById('botaoGrupoBuscaCoordenada').addEventListener('click', function () {
    const selectedGroupValue = document.getElementById('raGroupsFilter1').value;
    fetchAndSaveVillagesData(selectedGroupValue)
        .then(villages => {
            const textarea = document.getElementById('CoordenadasOrigem');
           // textarea.value = villages.map(v => `${v.coords}`).join(' ');
            textarea.value = villages.map(v => v.coords).join(' ');
            const totalC = villages.length;

            document.getElementById('NroOrigens').value = totalC;
        })
        .catch(error => {
            console.error('Erro ao processar as aldeias:', error);
        });
});
    // organizando coordenadas coladas na area origem
              document.getElementById('botaoRemoveCoordenadaOrigemUtilizadas').addEventListener('click', function() {
    const inputText = document.getElementById('CoordenadasOrigem').value;
    const savedModels = JSON.parse(localStorage.getItem('savedModels')) || []; // Recupera os modelos salvos do localStorage

    // Regex para encontrar os pares no formato 123|456
    const regex = /\b(\d{3})\|(\d{3})\b/g;
    const matches = [];
    let match;

    // Loop para encontrar todas as coordenadas no input
    while ((match = regex.exec(inputText)) !== null) {
        matches.push(`${match[1]}|${match[2]}`);
    }

    // Extração das coordenadas em CTo e CFrom dos itens do localStorage
    const savedCoordinates = [];
    savedModels.forEach(model => {
        if (model.CTo) {
            savedCoordinates.push(model.CTo);
        }
        if (model.CFrom) {
            savedCoordinates.push(model.CFrom);
        }
    });

    // Filtrar coordenadas que não estão nas coordenadas salvas
    const filteredMatches = matches.filter(coord => !savedCoordinates.includes(coord));

    // Atualizar o campo de texto com as coordenadas restantes
    const outputText = filteredMatches.join(' ');
    document.getElementById('CoordenadasOrigem').value = outputText;

    // Atualizar o total de coordenadas restantes
    const totalC = filteredMatches.length;
    document.getElementById('NroOrigens').value = totalC;
});
   // organizando coordenadas coladas na area destino
            document.getElementById('botaoRemoveCoordenadaDestinoUtilizadas').addEventListener('click', function() {
            const inputText = document.getElementById('CoordenadasDestino').value;
             const savedModels = JSON.parse(localStorage.getItem('savedModels')) || []; // Recupera os modelos salvos do localStorage
            // Regex para encontrar os pares no formato 593|309
            const regex = /\b(\d{3})\|(\d{3})\b/g;
            const matches = [];
            let match;
            // Loop para encontrar todas as correspondências
            while ((match = regex.exec(inputText)) !== null) {
                matches.push(`${match[1]}|${match[2]}`);
            }
                    // Extração das coordenadas em CTo e CFrom dos itens do localStorage
            const savedCoordinates = [];
                savedModels.forEach(model => {
              if (model.CTo) {
            savedCoordinates.push(model.CTo);
        }
        if (model.CFrom) {
            savedCoordinates.push(model.CFrom);
        }
    });

               // Filtrar coordenadas que não estão nas coordenadas salvas
                   const filteredMatches = matches.filter(coord => !savedCoordinates.includes(coord));

            // Juntar as correspondências em uma string separada por espaços
            const outputText = filteredMatches.join(' ');
            document.getElementById('CoordenadasDestino').value = outputText;
            const totalC = filteredMatches.length;
            document.getElementById('NroDestinos').value = totalC;
        });
        // displays nones
        document.getElementById('ModEnvioMassa').addEventListener('change', function() {
    const spanAleatorio = document.querySelector('span[name="envioProgramadoAleatorio"]');
    const inputAleatorio = document.querySelector('input[name="envioProgramadoAleatorio"]');

    if (this.value === '1') {
        spanAleatorio.style.display = 'inline';
        inputAleatorio.style.display = 'inline';
    } else {
        spanAleatorio.style.display = 'none';
        inputAleatorio.style.display = 'none';
    }
});
        // match calc
function distanceM(coordinateOrigem, coordinatedestine) {
    let [x1, y1] = coordinateOrigem.split('|').map(Number);
    let [x2, y2] = coordinatedestine.split('|').map(Number);
    const deltaX = Math.abs(x1 - x2);
    const deltaY = Math.abs(y1 - y2);
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}
function RequestUnitsM() {

    const fromValues = document.getElementById("CoordenadasOrigem").value.trim().split(" ");
    const toValues = document.getElementById("CoordenadasDestino").value.trim().split(" ");
    const limit = parseInt(document.getElementById("NroOrigensPorAlvo").value) || 1;
    let xx = 0;
    function gerar(coordinateOrigem, coordinatedestine, distance){
         const selectedUnits = [];
 return $.get('/interface.php?func=get_unit_info').then(function ($xml) {
            const units = {};
            const unitsM = [
                'unit_input_spear_massa_nro',
                'unit_input_sword_massa_nro',
                'unit_input_axe_massa_nro',
                'unit_input_archer_massa_nro',
                'unit_input_spy_massa_nro',
                'unit_input_light_massa_nro',
                'unit_input_marcher_massa_nro',
                'unit_input_heavy_massa_nro',
                'unit_input_ram_massa_nro',
                'unit_input_catapult_massa_nro',
                'unit_input_knight_massa_nro',
                'unit_input_snob_massa_nro',
            ];

            for (let i = 0; i < unitsM.length; i++) {
                const inputElement = document.getElementById(unitsM[i]);
                const unitName = inputElement.name;
                const inputValue = inputElement.value || 0;
                const checkbox = document.getElementById(`unit_input_${unitName}_massa`);

                if (!checkbox.checked) {
                        selectedUnits.push({ unitName, inputValue });
                } else {
                    const inputValue = 'all';
                    selectedUnits.push({ unitName, inputValue });
                }
            }

            // Processa o XML e calcula unitTime para as unidades
            $($xml).find('config').children().each(function () {
                const unitName = this.tagName;
                const speed = Number($(this).find('speed').text());
                const unitTime = distance * speed * 60000;

                // Armazena o unitTime e a unidade, se ela estiver selecionada
                if (selectedUnits.some(unit => unit.unitName === unitName && unit.inputValue != 0)) {
                    units[unitName] = {
                        speed: speed,
                        unitTime: unitTime
                    };
                }
            });

            // Encontra a unidade com o maior unitTime
            let maxUnitTime = -1;
            let maxUnitName = '';
     function convertToInput(date) {
    const ano = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');
    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    const segundos = String(date.getSeconds()).padStart(2, '0');
    const milissegundos = String(date.getMilliseconds()).padStart(3, '0');
    return `${ano}-${mes}-${dia}T${horas}:${minutos}:${segundos}.${milissegundos}`;
}
         function formatTime(unitTime) {
    const totalSeconds = Math.floor(unitTime / 1000).toString().padStart(2, '0'); // Converte milissegundos para segundos
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`; // Formata como string
             }
  function getLink() {
    if ( coordinateOrigem in coordsToID && coordinatedestine in coordsToID) {
       return `${activeWorldData['origin']}/game.php?village=${coordsToID[coordinateOrigem]}&screen=place&target=${coordsToID[coordinatedestine]}`;
    }
    return getLink;}
          let link = getLink();
            // Verifica as unidades selecionadas
            for (const unit of selectedUnits) {
                const unitData = units[unit.unitName];
                if (unitData && unitData.unitTime > maxUnitTime) {
                    maxUnitTime = unitData.unitTime;
                    maxUnitName = unit.unitName;
                }
            }

            let nome;
                nome = localStorage.getItem('Nome');
            let Dsaida;
            let Dchegada = document.getElementById('CStimeMassa').value
            let DchegadaF = document.getElementById('CStimeMassaAte').value;
            let CFrom = coordinateOrigem;
            let CTo = coordinatedestine;
            let NtType = 0;
            let AlvCat = document.getElementById('alvoCatapaMassa').value;
               if(!NtType){NtType = 0;}
               if(!AlvCat){AlvCat = 'padrao';}
                  // Obtém a data inserida no input
                      const inputDate = Dchegada;
                              const arrivalTime = new Date(inputDate);
                       const timeToSubtract = (maxUnitTime/1000); // tempo a ser subtraído em milissegundos
                          // Subtraindo os milissegundos
                           arrivalTime.setSeconds(arrivalTime.getSeconds() - timeToSubtract);
                           // Convertendo a data formatada após a subtração
                            const formattedDate = convertToInput(arrivalTime);
                       // Subtrai o tempo formatado
                             Dsaida = formattedDate;
                      const CSaida = new Date(Dsaida)
     console.log('DSaida: ', CSaida);
if(CSaida > new Date()){
     // Recupera os dados existentes do localStorage
              let savedModels = JSON.parse(localStorage.getItem('savedModels')) || [];
              let selectedData = { nome, CFrom, CTo,link, units: selectedUnits, Dsaida, Dchegada, NtType, AlvCat};
                // Adiciona o novo modelo
        // Salva de volta no localStorage
                 savedModels.push(selectedData); // Adiciona apenas se o link for novo
               localStorage.setItem('savedModels', JSON.stringify(savedModels));
            // Ordena o array pela data de Dsaida
         savedModels.sort((a, b) => new Date(a.Dsaida) - new Date(b.Dsaida));
        console.log('Modelos organizados pela data de saída:', savedModels);
               // console.log(`Modelo salvo: ${JSON.stringify(savedModels, null, 2)}` );
}else{console.log('Não agendado, sem tempo para enviar')}
            return units;
        })
        .catch(function (error) {
            console.error('Erro ao obter informações das unidades:', error);
        });
}
    for (let cf = 0; cf < toValues.length; cf++) {

        let coordinatedestine = toValues[cf];

        for (let ct = 0; ct < limit ; ct++) {
            let coordinateOrigem = fromValues[xx];
            const distance = distanceM(coordinateOrigem, coordinatedestine);
            xx++;
            gerar(coordinateOrigem, coordinatedestine, distance);
        }
    }

}
   document.getElementById('agendarEmMassaConfirmAtaque').addEventListener('click', function () {
            localStorage.setItem('Nome', 'Atak');
            RequestUnitsM();});
    }
}
 if(confirm){
    const rows = document.querySelectorAll('table.vis tr'); // Seleciona todas as linhas da tabela
    const x = 6; // Número de linhas acima (nesse caso, queremos inserir após a terceira linha)
        const targetRow = rows[x]; // Seleciona a linha desejada (3ª linha)
        const newRow = document.createElement('tr');
        newRow.innerHTML = '<td>Chegada:</td><td colspan="10"><input type="datetime-local" id="CSchegada" step=".001"><button type="button" id="CSbuttonC" class="btn">Confirmar</button></td>'; // Adicione o conteúdo desejado
        targetRow.insertAdjacentElement('afterend', newRow); // Insere a nova linha após a linha alvo

if (window.opener && !window.opener.closed) {
const savedModels = JSON.parse(localStorage.getItem('savedModels')) || [];
        const now = new Date();
    const ChegadaH = savedModels[0].Dchegada;
    const targetCata = savedModels[0].AlvCat;
    document.getElementById('CSchegada').value = ChegadaH;
    if(targetCata != 'padrao'){document.getElementsByName("building")[0].value = targetCata;}
 setTimeout(function(){document.getElementById('CSbuttonC').click();},3000);
}
  else{
         function convertToInput(date) {
    const ano = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');
    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    const segundos = String(date.getSeconds()).padStart(2, '0');
    const milissegundos = String(date.getMilliseconds()).padStart(3, '0');
    return `${ano}-${mes}-${dia}T${horas}:${minutos}:${segundos}.${milissegundos}`;
}
            let tt = new Date();
               document.getElementById('CSchegada').value = convertToInput(tt);}


     document.getElementById('CSbuttonC').addEventListener('click', function () {
    // Seleciona o span que contém a informação da data
    const spanElement = document.querySelector('.relative_time');
    const relativeTime = spanElement.innerText.trim();
    let arrivalDate;

    if (relativeTime.startsWith("hoje")) {
        const timePart = relativeTime.split(" às ")[1];
        const [hours, minutes, seconds] = timePart.split(":").map(Number);
        const now = new Date();
        arrivalDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds);
    } else if (relativeTime.startsWith("amanhã")) {
        const timePart = relativeTime.split(" às ")[1];
        const [hours, minutes, seconds] = timePart.split(":").map(Number);
        const now = new Date();
        arrivalDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, hours, minutes, seconds);
    } else {
        const datePart = relativeTime.replace("em ", "").split(" às ")[0];
        const timePart = relativeTime.split(" às ")[1];
        const [day, month] = datePart.split(".").map(Number);
        const [hours, minutes, seconds] = timePart.split(":").map(Number);
        const now = new Date();
        arrivalDate = new Date(now.getFullYear(), month - 1, day, hours, minutes, seconds);
    }

    const arrivalInput = document.getElementById('CSchegada').value;
    const SFuture = new Date(arrivalInput);

    // Calcula a diferença inicial em milissegundos
    let msDiff = SFuture - arrivalDate;
         msDiff = (msDiff - 1000);
    console.log('Contagem inicial (ms):', msDiff);

    // Função para calcular o ping (latência)
    function measurePing(callback) {
        const startTime = Date.now();
        fetch(window.location.href) // Faz uma requisição simples à própria página
            .then(() => {
                const ping = Date.now() - startTime; // Calcula o tempo de resposta
                callback(ping); // Chama o callback com o ping
            })
            .catch(() => {
               return 0; // Se falhar, assume 0 de ping
            });
    }
        if (msDiff > 0) {
            // Desativa os botões enquanto aguarda
            document.getElementById('CSbuttonC').disabled = true;
            document.getElementById('troop_confirm_submit').disabled = true;
            setTimeout(function () {
                        document.getElementById('troop_confirm_submit').disabled = false;
                        document.getElementById('troop_confirm_submit').click();
                        console.log('foi');
                return;},msDiff);

           /* // Captura o tempo inicial de agendamento
            const start = performance.now();

            setTimeout(function () {
                // Calcula o tempo decorrido e ajusta a execução
                const elapsed = performance.now() - start;
                const adjustedMsDiff = msDiff - elapsed;
                console.log('Tempo decorrido no setTimeout (ms):', elapsed);
                console.log('Ajuste final (ms):', adjustedMsDiff);

                if (adjustedMsDiff > 0) {
                    setTimeout(() => {
                        document.getElementById('troop_confirm_submit').disabled = false;
                        document.getElementById('troop_confirm_submit').click();
                        console.log('Comando executado com ajuste fino!');
                    }, adjustedMsDiff);
                } else {
                    document.getElementById('troop_confirm_submit').disabled = false;
                    document.getElementById('troop_confirm_submit').click();
                    console.error('Erro: Tempo insuficiente após ajuste!');
                }
            }, msDiff);*/
        } else {
            // Executa imediatamente caso o tempo já tenha passado
            document.getElementById('troop_confirm_submit').disabled = false;
            document.getElementById('troop_confirm_submit').click();
        }
});

    }
}
//================================================== Script Cunhar ===============================================================================
    var Checkss = parseInt($('#coin_cost_iron .value').text().replace(/\D/g, ''));
    const CunhagemAtiva = localStorage.getItem('CunhagemAtiva');
if(window.location.href.includes('screen=snob') && Checkss && CunhagemAtiva === 'S'){

     let $html = `<div id="divScriptRodando">
        <table align="center" id="avisoScript" width="100%" style="margin-bottom: 5px;">
        <tbody><tr><td><table class="content-border" width="100%" cellspacing="0">
        <tbody><tr>
        <td id="inner-border" style="background-color: rgb(193,162,100); background-image: url(https://dsbr.innogamescdn.com/asset/7fe7ab60/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x;">
        <table class="main" align="left"><tbody><tr><td><h1 id="avisoScriptContent" style="text-align: center; margin-bottom: 0px;"></h1></td>
        <td><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;"><img id="tocaSom" style="cursor:pointer;" alt="loud_sound" class="emoji" src="https://media.innogamescdn.com/TribalWars/emoji/1f50a.png">
        <audio id="audioElement" preload="auto" autoplay volume="1" loop>
                 <source src="https://cdn.freesound.org/previews/448/448713_4473224-lq.mp3" type="audio/mp3">
          Seu navegador não suporta o elemento de áudio.
        </audio></div></td></tr></tbody></table></td></tr></tbody></table></tbody></table></div>
        <small>
        <strong id="movendoTexto">
            Cunhando As Moedas v3.0 by<span style="color: red"> Zigaeezz </span><span id="horas"></span><span id="EXTRA"></span>
        </strong>
    </small>`;
    var CTotal = localStorage.getItem('totalC');
// Captura a referência para a tabela de destino
let Inserir = document.getElementById('contentContainer');
   // Adiciona a nova div antes da divBorda
Inserir.insertAdjacentHTML('beforebegin', $html);
    // Formata a string com o tempo restante
    var avisoCunhar = document.getElementById('avisoScriptContent');
    var avisoC = "SCRIPT - CUNHAR";
    var horasElement = document.getElementById("horas")
    var extraElement = document.getElementById("EXTRA")
       avisoCunhar.textContent = avisoC;
       function cunhar(){
           extraElement.textContent = " ||Total Cunhado [ " + CTotal + " ]" ;
         let MoedasCunhagem = localStorage.getItem('MoedasCunhagem');
    let CunhagemRandomica = localStorage.getItem('CunhagemRandomica');

    function Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} var Randomic = Aleatorio(1, 3); // intervalo de att em minutos
       if(CunhagemRandomica === 'R'){setTimeout(function() {
        location.reload();}, Randomic*60*1000);}
    if(CunhagemRandomica === 'F'){setTimeout(function() {
        location.reload();}, 60000);}

    var qtdFerroAldeia = parseInt($("#iron").text());
    var qtdArgilaAldeia = parseInt($("#stone").text());
    var qtdMadeiraAldeia = parseInt($("#wood").text());
    var VArgSalvo = localStorage.getItem('qtdArgilaAldeia');
    let CustoFer = parseInt($('#coin_cost_iron .value').text().replace(/\D/g, ''));
    var CustoArg = parseInt($('#coin_cost_stone .value').text().replace(/\D/g, ''));
    var CustoMad = parseInt($('#coin_cost_wood .value').text().replace(/\D/g, ''));
    var cd = 13;
    var moedas = [
        qtdFerroAldeia / CustoFer,
        qtdArgilaAldeia / CustoArg,
        qtdMadeiraAldeia / CustoMad,
    ];
    var menorResultado = Math.min.apply(Math, moedas); // Obtém o menor valor entre os três resultados
    // Se o menor resultado for menor que zero, define como zero, caso contrário, mantém o valor
    var Mcunhar = menorResultado < 0 ? 0 : Math.floor(menorResultado); // quantidade de moedas q da pra cunhar
    if (MoedasCunhagem <= Mcunhar){
        var maximumAmount = document.getElementById("coin_mint_fill_max").text.match(/\(([^)]+)\)/)[1];
        if (document.getElementById("coin_mint_count").value != maximumAmount) {
            document.getElementById("coin_mint_count").value = maximumAmount;
        }
        var Horas = "Cunhando[ " + Mcunhar + " ]Moedas";
       horasElement.textContent = Horas;
         CTotal = (parseInt(Mcunhar) + parseInt(CTotal));
        setTimeout(function(){localStorage.setItem('totalC', CTotal);
            document.getElementsByClassName("btn btn-default")[0].click();},2000);
    }else{
        function Att() {
        if (cd >= 0) {
            horasElement.textContent = ":[ " + Mcunhar + " ]Esperando um total de[ " + MoedasCunhagem + " ]Moedas.Validando Recursos em[ " + cd + " ]Segundos.";
            cd--;
        } else if(cd <= 0){
            setTimeout(function () {
                if(VArgSalvo != qtdArgilaAldeia){
                    clearInterval(intervalId); // Limpa o intervalo quando o contador chegar a 0
                      cd = 13; // Reinicia o contador
                    horasElement.textContent = "Validando Recursos";
                    localStorage.setItem('qtdArgilaAldeia', qtdArgilaAldeia);
                              cunhar();}else{
                                  horasElement.textContent = "Relogando";
                                  location.reload();}
            }, 1000);
        }
    var intervalId = setTimeout(Att, 1000);
}
Att();
 }}cunhar();
    var url = window.location.href;
    var subdominio = new URL(url).hostname.split('.')[0];
    var novoTitulo = subdominio + " - CUNHANDO";
    document.title = novoTitulo;
}
//=================================================== Script Puxar Rec ===========================================================================
const PuxarRecursosAtiva = localStorage.getItem('PuxarRecursosAtiva');
if(window.location.href.includes('screen=market&mode=call') && PuxarRecursosAtiva === 'S'){
    var cordenada = localStorage.getItem('CoordenadaPuxarRecursos');
    const PeriodoPuxarRecursos = parseInt(localStorage.getItem('PeriodoPuxarRecursos'));
    var DistMax = localStorage.getItem('DistanciaPuxarRecursos');

    // Cria um html
  let $html = `<div id="divScriptRodando">
        <table align="center" id="avisoScript" width="100%" style="margin-bottom: 5px;">
        <tbody><tr><td><table class="content-border" width="100%" cellspacing="0">
        <tbody><tr>
        <td id="inner-border" style="background-color: rgb(193,162,100); background-image: url(https://dsbr.innogamescdn.com/asset/7fe7ab60/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x;">
        <table class="main" align="left"><tbody><tr><td id="avisoScriptContent"><h1 style="text-align: center; margin-bottom: 0px;">PUXAR RECURSOS</h1></td>
        <td><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;"><img id="tocaSom" style="cursor:pointer;" alt="loud_sound" class="emoji" src="https://media.innogamescdn.com/TribalWars/emoji/1f50a.png">
        <audio id="audioElement" preload="auto" autoplay volume="1" loop>
                 <source src="https://cdn.freesound.org/previews/448/448713_4473224-lq.mp3" type="audio/mpeg">
          Seu navegador não suporta o elemento de áudio.
        </audio></div></td></tr></tbody></table></td></tr></tbody></table></tbody></table></div>
           <small>
        <strong id="movendoTexto">
            Puxando Us Rec v3.0 by<span style="color: red"> Zigaeezz </span><span id="horas"></span><span id="info"></span><span id="Inforot"></span>
        </strong>
    </small>`;
// Captura a referência para a tabela de destino
var Inserir = document.getElementById('contentContainer');

   // Adiciona a nova div antes da divBorda
    Inserir.insertAdjacentHTML('beforebegin', $html);

    function atualizarTempoRestante() {
        // Obtém a referência para o elemento com o ID "horas"
    var infopux = document.getElementById('horas');

    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximoCarregamentoR = localStorage.getItem('proximoCarregamentoPuxRecs');
    if (proximoCarregamentoR) {
        proximoCarregamentoR = new Date(proximoCarregamentoR);
    } else {
        // Executa o script imediatamente
        executarScript();

        // Define a próxima hora de carregamento para 2 horas após a execução
        proximoCarregamentoR = new Date();
        proximoCarregamentoR.setMinutes(proximoCarregamentoR.getMinutes() + PeriodoPuxarRecursos);
        // Salva a próxima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoPuxRecs', proximoCarregamentoR);
    }

    function executarScript() {
        $.getScript('https://shinko-to-kuma.com/scripts/res-senderV2.js');

    // Configura o valor do campo de entrada diretamente pela ID
     setInterval(function cord() {
            document.getElementById('coordinateTargetFirstTime').value = cordenada;
            }, 10000);
     setInterval(function save() {
    document.getElementById('saveCoord').click();
    }, 15000);
    var t = 0;

        setTimeout(function() {
    var botoes = $('[class="btn evt-confirm-btn btn-confirm-yes"]');
    var index = 0;
      var limt = DistMax;
      var n = 2;
      var trs = $('tbody#appendHere tr'); // Selecionar todas as linhas da tabela com o ID 'appendHere'

    function clickBotao() {
        var trS = $(trs[n]).find('td:eq(2)').text();
        var terceiroTd = parseInt(trS);

        if (index < (botoes.length - 1) && terceiroTd < limt) {
            $(botoes[index]).click();
            index++;
            n++;
            setTimeout(clickBotao, 1000);
        }
    }

    clickBotao();
}, 60000);

    }

    function atualizarR() {
        // Obtém a hora atual
        var agora = new Date();

        // Verifica se é hora de recarregar a página
        if (agora >= proximoCarregamentoR) {
            localStorage.removeItem('proximoCarregamentoPuxRecs');
            // Recarrega a página
            location.reload();
        } else {
            // Calcula o tempo restante até o próximo carregamento
            var tempoRestante = proximoCarregamentoR - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = "Próxima atualização em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conteúdo do elemento com o tempo restante formatado
            infopux.textContent = tempoRestanteFormatado;

            // Chama a função novamente após 1 segundo
            setTimeout(atualizarR, 1000);
        }
    }

    // Chama a função pela primeira vez
    atualizarR();
}
// Chama a função para iniciar o contador regressivo
atualizarTempoRestante();


    var v2 = 4;
    var valor2 = localStorage.getItem('check' + v2);
    var estado2 = valor2 === 'true';
    if(estado2){ var conf2 = 'ok'}
    if(conf2 === 'ok'){
function redirecionar(){
    var temp_farm = parseInt(localStorage.getItem('CPuxar'));
             var rotacion = document.getElementById('Inforot');
    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximaRotacao = localStorage.getItem('proximoCarregamentoRot2');
    if (proximaRotacao) {
        proximaRotacao = new Date(proximaRotacao);
    } else {
        // Define a pr xima hora de carregamento para 2 horas ap s a execu  o
        proximaRotacao = new Date();
        proximaRotacao.setMinutes(proximaRotacao.getMinutes() + temp_farm);
        // Salva a pr xima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoRot2', proximaRotacao);
    }
function atualizares() {
        // Obt m a hora atual
        var agora = new Date();
        // Verifica se   hora de recarregar a p gina
        if (agora >= proximaRotacao) {
         localStorage.removeItem('proximoCarregamentoRot2');
            var redirecionamentos = [
    { screen: "main", delay: 9000 },
    { screen: "am_farm", delay: 11000 },
    { screen: "place&mode=scavenge", delay: 13000 },
    { screen: "place&mode=scavenge_mass", delay: 15000 },
    { screen: "market&mode=call", delay: 20000 },
    { screen: "market&mode=traders", delay: 1000 },
    { screen: "statue&mode=overview", delay: 3000 },
    { screen: "snob&mode=coin", delay: 5000 },
    { screen: "train", delay: 7000 }
];

redirecionamentos.forEach((item, index) => {
    let valorSalvo = localStorage.getItem('check' + index);
    if (valorSalvo === 'true') {
        setTimeout(() => {
            UI.InfoMessage('Redirecting...');
            window.location.href = game_data.link_base_pure + '&screen=' + item.screen;
        }, item.delay);
    }
});

        } else {
            // Calcula o tempo restante at  o pr ximo carregamento
            var tempoRestante = proximaRotacao - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = " || Rotacionando em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conte do do elemento com o tempo restante formatado
            rotacion.textContent = tempoRestanteFormatado;

            // Chama a fun  o novamente ap s 1 segundo
            setTimeout(atualizares, 1000);
        }
}
    // Chama a fun  o pela primeira vez
    atualizares();}
    redirecionar();}
    let url = window.location.href;
    let subdominio = new URL(url).hostname.split('.')[0];
    let novoTitulo = subdominio + " - Push";
    document.title = novoTitulo;

}
//==================================================== Script coleta em massa ====================================================================
const ColetaMassaAtiva = localStorage.getItem('ColetaMassaAtiva');
if(window.location.href.includes('screen=place&mode=scavenge_mass') && ColetaMassaAtiva === 'S'){
    const PeriodoColetaMassa = parseInt(localStorage.getItem('PeriodoColetaMassa'));
       // Cria um html
  let $html = `<div id="divScriptRodando">
        <table align="center" id="avisoScript" width="100%" style="margin-bottom: 5px;">
        <tbody><tr><td><table class="content-border" width="100%" cellspacing="0">
        <tbody><tr>
        <td id="inner-border" style="background-color: rgb(193,162,100); background-image: url(https://dsbr.innogamescdn.com/asset/7fe7ab60/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x;">
        <table class="main" align="left"><tbody><tr><td id="avisoScriptContent"><h1 style="text-align: center; margin-bottom: 0px;">SCRIPT - MASS COLETA</h1></td>
        <td><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;"><img id="tocaSom" style="cursor:pointer;" alt="loud_sound" class="emoji" src="https://media.innogamescdn.com/TribalWars/emoji/1f50a.png">
        <audio id="audioElement" preload="auto" autoplay volume="1" loop>
                 <source src="https://cdn.freesound.org/previews/448/448713_4473224-lq.mp3" type="audio/mpeg">
          Seu navegador não suporta o elemento de áudio.
        </audio></div></td></tr></tbody></table></td></tr></tbody></table></tbody></table></div>
           <small>
        <strong id="movendoTexto">
            Coletando Us Rec v3.0 by<span style="color: red"> Zigaeezz </span><span id="horas"></span><span id="info"></span><span id="Inforot"></span>
        </strong>
    </small>`;
// Captura a referência para a tabela de destino
let Inserir = document.getElementById('contentContainer');

   // Adiciona a nova div antes da divBorda
    Inserir.insertAdjacentHTML('beforebegin', $html);

    function atualizarTempoRestante() {
        // Obtém a referência para o elemento com o ID "horas"
    var infopux = document.getElementById('horas');

    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximoCarregamentoR = localStorage.getItem('proximoCarregamentoMcoleta');
    if (proximoCarregamentoR) {
        proximoCarregamentoR = new Date(proximoCarregamentoR);
    } else {
        // Executa o script imediatamente
        executarScript();

        // Define a próxima hora de carregamento para 2 horas após a execução
        proximoCarregamentoR = new Date();
        proximoCarregamentoR.setMinutes(proximoCarregamentoR.getMinutes() + (PeriodoColetaMassa + 3));
        // Salva a próxima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoMcoleta', proximoCarregamentoR);
    }

    function executarScript() {
    $.getScript('https://shinko-to-kuma.com/scripts/massScavenge.js');
    setTimeout(function() {
    document.getElementsByClassName('btn btnSophie')[1].click();
    }, 15000);

    setTimeout(function() {
        var nb = 0;
        var $botoes = $('.btnSophie');
        function clickss() {
            if ($botoes.length > nb) {
                $botoes.eq(nb).click();
                nb++;
                setTimeout(clickss, 1000);
            } else {
                $('#x').click();
            }
        }
        clickss();
    }, 30000);
    }

    function atualizarR() {
        // Obtém a hora atual
        var agora = new Date();

        // Verifica se é hora de recarregar a página
        if (agora >= proximoCarregamentoR) {
            localStorage.removeItem('proximoCarregamentoMcoleta');
            // Recarrega a página
            location.reload();
        } else {
            // Calcula o tempo restante até o próximo carregamento
            var tempoRestante = proximoCarregamentoR - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = "Próxima atualização em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conteúdo do elemento com o tempo restante formatado
            infopux.textContent = tempoRestanteFormatado;

            // Chama a função novamente após 1 segundo
            setTimeout(atualizarR, 1000);
        }
    }

    // Chama a função pela primeira vez
    atualizarR();
}
// Chama a função para iniciar o contador regressivo
atualizarTempoRestante();
    var v4 = 3;
    var valor4 = localStorage.getItem('check' + v4);
    var estado4 = valor4 === 'true';
    if(estado4){ var conf4 = 'ok'}
    if(conf4 === 'ok'){
function redirecionar(){
    var temp_farm = parseInt(localStorage.getItem('ColetaM'));
             var rotacion = document.getElementById('Inforot');
    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximaRotacao = localStorage.getItem('proximoCarregamentoRot2');
    if (proximaRotacao) {
        proximaRotacao = new Date(proximaRotacao);
    } else {
        // Define a pr xima hora de carregamento para 2 horas ap s a execu  o
        proximaRotacao = new Date();
        proximaRotacao.setMinutes(proximaRotacao.getMinutes() + temp_farm);
        // Salva a pr xima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoRot2', proximaRotacao);
    }
function atualizares() {
        // Obt m a hora atual
        var agora = new Date();
        // Verifica se   hora de recarregar a p gina
        if (agora >= proximaRotacao) {
         localStorage.removeItem('proximoCarregamentoRot2');
            var redirecionamentos = [
    { screen: "main", delay: 11000 },
    { screen: "am_farm", delay: 13000 },
    { screen: "place&mode=scavenge", delay: 15000 },
    { screen: "place&mode=scavenge_mass", delay: 20000 },
    { screen: "market&mode=call", delay: 1000 },
    { screen: "market&mode=traders", delay: 3000 },
    { screen: "statue&mode=overview", delay: 5000 },
    { screen: "snob&mode=coin", delay: 7000 },
    { screen: "train", delay: 9000 }
];

redirecionamentos.forEach((item, index) => {
    let valorSalvo = localStorage.getItem('check' + index);
    if (valorSalvo === 'true') {
        setTimeout(() => {
            UI.InfoMessage('Redirecting...');
            window.location.href = game_data.link_base_pure + '&screen=' + item.screen;
        }, item.delay);
    }
});

        } else {
            // Calcula o tempo restante at  o pr ximo carregamento
            var tempoRestante = proximaRotacao - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = " || Rotacionando em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conte do do elemento com o tempo restante formatado
            rotacion.textContent = tempoRestanteFormatado;

            // Chama a fun  o novamente ap s 1 segundo
            setTimeout(atualizares, 1000);
        }
    }
    // Chama a fun  o pela primeira vez
    atualizares();}
    redirecionar();}
    let url = window.location.href;
    let subdominio = new URL(url).hostname.split('.')[0];
    let novoTitulo = subdominio + " - Coletao";
    document.title = novoTitulo;

}
//==================================================== Script Balancear com Clusters =============================================================
const BalanceamentoAtiva = localStorage.getItem('BalanceamentoAtiva');
if(window.location.href.includes('screen=market&mode=traders') && BalanceamentoAtiva === 'S'){
    const PeriodoBalanceamento = parseInt(localStorage.getItem('PeriodoBalanceamento'));
    const QuantiClusters = localStorage.getItem('QuantiClusters');

    // Cria um html
  let $html = `<div id="divScriptRodando">
        <table align="center" id="avisoScript" width="100%" style="margin-bottom: 5px;">
        <tbody><tr><td><table class="content-border" width="100%" cellspacing="0">
        <tbody><tr>
        <td id="inner-border" style="background-color: rgb(193,162,100); background-image: url(https://dsbr.innogamescdn.com/asset/7fe7ab60/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x;">
        <table class="main" align="left"><tbody><tr><td id="avisoScriptContent"><h1 style="text-align: center; margin-bottom: 0px;">BALANCEANDO REC</h1></td>
        <td><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;"><img id="tocaSom" style="cursor:pointer;" alt="loud_sound" class="emoji" src="https://media.innogamescdn.com/TribalWars/emoji/1f50a.png">
        <audio id="audioElement" preload="auto" autoplay volume="1" loop>
                 <source src="https://cdn.freesound.org/previews/448/448713_4473224-lq.mp3" type="audio/mpeg">
          Seu navegador não suporta o elemento de audio.
        </audio></div></td></tr></tbody></table></td></tr></tbody></table></tbody></table></div>
           <small>
        <strong id="movendoTexto">
            Balanceando Us rec v3.0 by<span style="color: red"> Zigaeezz </span><span id="horas"></span><span id="Inforot"></span>
        </strong>
    </small>`;
// Captura a referência para a tabela de destino
let Inserir = document.getElementById('contentContainer');

   // Adiciona a nova div antes da divBorda
    Inserir.insertAdjacentHTML('beforebegin', $html);

    function atualizarTempoRestante() {
    // Obtém a referência para o elemento com o ID "horas"
    var horasElement = document.getElementById('horas');

    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximoCarregamento = localStorage.getItem('proximoCarregamentoBalanceC');
    if (proximoCarregamento) {
        proximoCarregamento = new Date(proximoCarregamento);
    } else {
        // Executa o script imediatamente
        executarScript();

        // Define a pr xima hora de carregamento para 2 horas ap s a execu  o
        proximoCarregamento = new Date();
        proximoCarregamento.setMinutes(proximoCarregamento.getMinutes() + PeriodoBalanceamento);
        // Salva a pr xima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoBalanceC', proximoCarregamento);
    }

    function executarScript() {
        // Coloque aqui o c digo que deseja executar quando a p gina for carregada
        $.getScript('https://dl.dropboxusercontent.com/s/bytvle86lj6230c/resBalancer.js?dl=0');void(0)

          // Configura o valor do campo de entrada diretamente pela ID
     setTimeout(function() {
            document.getElementById('nr_clusters').value = QuantiClusters;
            }, 5000);

    setTimeout(function() {
    document.getElementsByClassName('btn evt-confirm-btn btn-confirm-yes')[2].click();
    }, 7000);

setInterval (function clicarEmCadaBotao() {
    // Seleciona todos os bot es com a classe 'btn_send'
    var botoes = document.querySelectorAll('.btn_send');
    var index = 0;
    // Fun  o para clicar em um bot o e avan ar para o pr ximo ap s 1 segundo
    function clicarBotao() {
        // Verifica se h  mais bot es para clicar
        if (index < botoes.length) {
            // Simula o clique no bot o atual
            botoes[index].click();
            index++; // Avan a para o pr ximo bot o
            // Configura um timeout para clicar no pr ximo bot o ap s 1 segundo
            setTimeout(clicarBotao, 1000);
        }else {
            function fecharContainer() {
                      $('#div_container').remove();
                    }
            // Se todos os bot es foram clicados, fecha o cont iner
            fecharContainer();
        }

    }

    // Inicia o processo clicando no primeiro bot o
    clicarBotao();
}, 15000);
    }

    function atualizar() {
        // Obt m a hora atual
        var agora = new Date();

        // Verifica se   hora de recarregar a p gina
        if (agora >= proximoCarregamento) {
            localStorage.removeItem('proximoCarregamentoBalanceC');
            // Recarrega a p gina
            location.reload();
        } else {
            // Calcula o tempo restante at  o pr ximo carregamento
            var tempoRestante = proximoCarregamento - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = "Próxima atualização em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conte do do elemento com o tempo restante formatado
            horasElement.textContent = tempoRestanteFormatado;

            // Chama a fun  o novamente ap s 1 segundo
            setTimeout(atualizar, 1000);
        }
    }
    // Chama a fun  o pela primeira vez
    atualizar();
}
// Chama a fun  o para iniciar o contador regressivo
atualizarTempoRestante();
    var v5 = 5;
    var valor5 = localStorage.getItem('check' + v5);
    var estado5 = valor5 === 'true';
    if(estado5){ var conf5 = 'ok'}
    if(conf5 === 'ok'){
function redirecionar(){
    var temp_farm = parseInt(localStorage.getItem('CBalance'));
             var rotacion = document.getElementById('Inforot');
    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximaRotacao = localStorage.getItem('proximoCarregamentoRot2');
    if (proximaRotacao) {
        proximaRotacao = new Date(proximaRotacao);
    } else {
        // Define a pr xima hora de carregamento para 2 horas ap s a execu  o
        proximaRotacao = new Date();
        proximaRotacao.setMinutes(proximaRotacao.getMinutes() + temp_farm);
        // Salva a pr xima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoRot2', proximaRotacao);
    }
function atualizares() {
        // Obt m a hora atual
        var agora = new Date();
        // Verifica se   hora de recarregar a p gina
        if (agora >= proximaRotacao) {
         localStorage.removeItem('proximoCarregamentoRot2');
            var redirecionamentos = [
    { screen: "main", delay: 7000 },
    { screen: "am_farm", delay: 9000 },
    { screen: "place&mode=scavenge", delay: 11000 },
    { screen: "place&mode=scavenge_mass", delay: 13000 },
    { screen: "market&mode=call", delay: 15000 },
    { screen: "market&mode=traders", delay: 20000 },
    { screen: "statue&mode=overview", delay: 1000 },
    { screen: "snob&mode=coin", delay: 3000 },
    { screen: "train", delay: 5000 }
];

redirecionamentos.forEach((item, index) => {
    let valorSalvo = localStorage.getItem('check' + index);
    if (valorSalvo === 'true') {
        setTimeout(() => {
            UI.InfoMessage('Redirecting...');
            window.location.href = game_data.link_base_pure + '&screen=' + item.screen;
        }, item.delay);
    }
});

        } else {
            // Calcula o tempo restante at  o pr ximo carregamento
            var tempoRestante = proximaRotacao - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = " || Rotacionando em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conte do do elemento com o tempo restante formatado
            rotacion.textContent = tempoRestanteFormatado;

            // Chama a fun  o novamente ap s 1 segundo
            setTimeout(atualizares, 1000);
        }
    }
    // Chama a fun  o pela primeira vez
    atualizares();}
    redirecionar();}
let url = window.location.href;
    let subdominio = new URL(url).hostname.split('.')[0];
    let novoTitulo = subdominio + " - Balanço";
    document.title = novoTitulo;
}
//==================================================== Script Cunhar em Massa ====================================================================
const CunhagemMassaAtiva = localStorage.getItem('CunhagemMassaAtiva');
if (document.getElementById('coin_overview_table') && CunhagemMassaAtiva === 'S') {
    const PeriodoCunhaMassa = parseInt(localStorage.getItem('PeriodoCunhaMassa'));
// Cria um html
  let $html = `<div id="divScriptRodando">
        <table align="center" id="avisoScript" width="100%" style="margin-bottom: 5px;">
        <tbody><tr><td><table class="content-border" width="100%" cellspacing="0">
        <tbody><tr>
        <td id="inner-border" style="background-color: rgb(193,162,100); background-image: url(https://dsbr.innogamescdn.com/asset/7fe7ab60/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x;">
        <table class="main" align="left"><tbody><tr><td id="avisoScriptContent"><h1 style="text-align: center; margin-bottom: 0px;">CUNHAR EM MASSA</h1></td>
        <td><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;"><img id="tocaSom" style="cursor:pointer;" alt="loud_sound" class="emoji" src="https://media.innogamescdn.com/TribalWars/emoji/1f50a.png">
        <audio id="audioElement" preload="auto" autoplay volume="0.9" loop>
                 <source src="https://cdn.freesound.org/previews/448/448713_4473224-lq.mp3" type="audio/mpeg">
                            Seu navegador não suporta o elemento de áudio.
        </audio></div></td></tr></tbody></table></td></tr></tbody></table></tbody></table></div>
           <small>
        <strong>
            Cunhando muita Mueda v3.0 by<span style="color: red"> Zigaeezz </span><span id="horas"></span><span id="Inforot"></span>
        </strong>
    </small>`;
// Captura a referência para a tabela de destino
   // <source src="https://cdn.freesound.org/previews/729/729393_8432823-lq.mp3" type="audio/mpeg">
let Inserir = document.getElementById('contentContainer');

   // Adiciona a nova div antes da divBorda
    Inserir.insertAdjacentHTML('beforebegin', $html);

function atualizarTempoRestante() {
    // Obtém a referência para o elemento com o ID "horas"
    var horasElement = document.getElementById('horas');

    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximoCarregamento = localStorage.getItem('proximoCarregamentocoinss');
    if (proximoCarregamento) {
        proximoCarregamento = new Date(proximoCarregamento);
    } else {
        // Executa o script imediatamente
        executarScript();
        // Define a próxima hora de carregamento para 2 horas após a execução
        proximoCarregamento = new Date();
        proximoCarregamento.setMinutes(proximoCarregamento.getMinutes() + PeriodoCunhaMassa);
        // Salva a próxima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentocoinss', proximoCarregamento);
    }

    function executarScript() {
        // Coloque aqui o código que deseja executar quando a página for carregada
        setTimeout(function() {
           // Seleciona o botão "Selecionar" pelo ID
                   const btnSelecionar = document.getElementById('select_anchor_top');
           // Dispara um evento de clique no botão
            setTimeout(function(){btnSelecionar.click();},1000);
            setTimeout(function(){document.getElementsByClassName("mint_multi_button btn")[0].click();},3000);
    },5000);}

    function atualizar() {
        // Obtém a hora atual
        var agora = new Date();

        // Verifica se é hora de recarregar a página
        if (agora >= proximoCarregamento) {
            localStorage.removeItem('proximoCarregamentocoinss');
            // Recarrega a página
                window.location.reload();
        } else {
            // Calcula o tempo restante até o próximo carregamento
            var tempoRestante = proximoCarregamento - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = "Próxima Cunhagem em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conteúdo do elemento com o tempo restante formatado
            horasElement.textContent = tempoRestanteFormatado;

            // Chama a função novamente após 1 segundo
            setTimeout(atualizar, 1000);
        }
    }

    // Chama a função pela primeira vez
    atualizar();
}

// Chama a função para iniciar o contador regressivo
atualizarTempoRestante();
    var v7 = 7;
    var valor7 = localStorage.getItem('check' + v7);
    var estado7 = valor7 === 'true';
    if(estado7){ var conf7 = 'ok'}
    if(conf7 === 'ok'){
function redirecionar(){
    var temp_farm = parseInt(localStorage.getItem('CCMass'));
             var rotacion = document.getElementById('Inforot');
    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximaRotacao = localStorage.getItem('proximoCarregamentoRot2');
    if (proximaRotacao) {
        proximaRotacao = new Date(proximaRotacao);
    } else {
        // Define a pr xima hora de carregamento para 2 horas ap s a execu  o
        proximaRotacao = new Date();
        proximaRotacao.setMinutes(proximaRotacao.getMinutes() + temp_farm);
        // Salva a pr xima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoRot2', proximaRotacao);
    }
function atualizares() {
        // Obt m a hora atual
        var agora = new Date();
        // Verifica se   hora de recarregar a p gina
        if (agora >= proximaRotacao) {
         localStorage.removeItem('proximoCarregamentoRot2');
            var redirecionamentos = [
    { screen: "main", delay: 3000 },
    { screen: "am_farm", delay: 5000 },
    { screen: "place&mode=scavenge", delay: 7000 },
    { screen: "place&mode=scavenge_mass", delay: 9000 },
    { screen: "market&mode=call", delay: 11000 },
    { screen: "market&mode=traders", delay: 13000 },
    { screen: "statue&mode=overview", delay: 15000 },
    { screen: "snob&mode=coin", delay: 20000 },
    { screen: "train", delay: 1000 }
];

redirecionamentos.forEach((item, index) => {
    let valorSalvo = localStorage.getItem('check' + index);
    if (valorSalvo === 'true') {
        setTimeout(() => {
            UI.InfoMessage('Redirecting...');
            window.location.href = game_data.link_base_pure + '&screen=' + item.screen;
        }, item.delay);
    }
});

        } else {
            // Calcula o tempo restante at  o pr ximo carregamento
            var tempoRestante = proximaRotacao - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = " || Rotacionando em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conte do do elemento com o tempo restante formatado
            rotacion.textContent = tempoRestanteFormatado;

            // Chama a fun  o novamente ap s 1 segundo
            setTimeout(atualizares, 1000);
        }
    }
    // Chama a fun  o pela primeira vez
    atualizares();}
    redirecionar();}
    let url = window.location.href;
    let subdominio = new URL(url).hostname.split('.')[0];
    let novoTitulo = subdominio + " - CUNHANDO";
    document.title = novoTitulo;
}
//==================================================== script Farm ===============================================================================
 if(window.location.href.includes('&screen=am_farm')){

    // Cria um html
  let $html = `<div id="divScriptRodando">
        <table align="center" id="avisoScript" width="100%" style="margin-bottom: 5px;">
        <tbody><tr><td><table class="content-border" width="100%" cellspacing="0">
        <tbody><tr>
        <td id="inner-border" style="background-color: rgb(193,162,100); background-image: url(https://dsbr.innogamescdn.com/asset/7fe7ab60/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x;">
        <table class="main" align="left"><tbody><tr><td id="avisoScriptContent"><h1 style="text-align: center; margin-bottom: 0px;">FARMANDO</h1></td>
        <td><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;"><img id="tocaSom" style="cursor:pointer;" alt="loud_sound" class="emoji" src="https://media.innogamescdn.com/TribalWars/emoji/1f50a.png">
        <audio id="audioElement" preload="auto" autoplay volume="1" loop>
                 <source src="https://cdn.freesound.org/previews/448/448713_4473224-lq.mp3" type="audio/mpeg">
          Seu navegador não suporta o elemento de audio.
        </audio></div></td></tr></tbody></table></td></tr></tbody></table></tbody></table></div>
           <small>
        <strong id="movendoTexto">
            Up D'a Vila v3.0 by<span style="color: red"> Zigaeezz </span><span id="horas"></span><span id="Inforot"></span>
        </strong>
    </small>`;
// Captura a referência para a tabela de destino
let Inserir = document.getElementById('contentContainer');

   // Adiciona a nova div antes da divBorda
    Inserir.insertAdjacentHTML('beforebegin', $html);
    var v1 = 1;
    var valor1 = localStorage.getItem('check' + v1);
    var estado1 = valor1 === 'true';
    if(estado1){ var conf1 = 'ok'}
    if(conf1 === 'ok'){
function redirecionar(){
    var temp_farm = parseInt(localStorage.getItem('Rfarm'));
             var rotacion = document.getElementById('Inforot');
    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximaRotacao = localStorage.getItem('proximoCarregamentoRot2');
    if (proximaRotacao) {
        proximaRotacao = new Date(proximaRotacao);
    } else {
        // Define a pr xima hora de carregamento para 2 horas ap s a execu  o
        proximaRotacao = new Date();
        proximaRotacao.setMinutes(proximaRotacao.getMinutes() + temp_farm);
        // Salva a pr xima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoRot2', proximaRotacao);
    }
function atualizares() {
        // Obt m a hora atual
        var agora = new Date();
        // Verifica se   hora de recarregar a p gina
        if (agora >= proximaRotacao) {
         localStorage.removeItem('proximoCarregamentoRot2');
            var redirecionamentos = [
    { screen: "main", delay: 15000 },
    { screen: "am_farm", delay: 20000 },
    { screen: "place&mode=scavenge", delay: 1000 },
    { screen: "place&mode=scavenge_mass", delay: 3000 },
    { screen: "market&mode=call", delay: 5000 },
    { screen: "market&mode=traders", delay: 7000 },
    { screen: "statue&mode=overview", delay: 9000 },
    { screen: "snob&mode=coin", delay: 11000 },
    { screen: "train", delay: 13000 }
];

redirecionamentos.forEach((item, index) => {
    let valorSalvo = localStorage.getItem('check' + index);
    if (valorSalvo === 'true') {
        setTimeout(() => {
            UI.InfoMessage('Redirecting...');
            window.location.href = game_data.link_base_pure + '&screen=' + item.screen;
        }, item.delay);
    }
});

        } else {
            // Calcula o tempo restante at  o pr ximo carregamento
            var tempoRestante = proximaRotacao - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = " || Rotacionando em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conte do do elemento com o tempo restante formatado
            rotacion.textContent = tempoRestanteFormatado;

            // Chama a fun  o novamente ap s 1 segundo
            setTimeout(atualizares, 1000);
        }
}
    // Chama a fun  o pela primeira vez
    atualizares();}
    redirecionar();}
let url = window.location.href;
    let subdominio = new URL(url).hostname.split('.')[0];
    let novoTitulo = subdominio + " - Farming";
    document.title = novoTitulo;
    }
//==================================================== script Treinar Pala =======================================================================
const UparPaladinoAtiva = localStorage.getItem('UparPaladinoAtiva');
if(window.location.href.includes('screen=statue&mode=overview') && UparPaladinoAtiva === 'S'){
    const PeriodoUparPaladino = parseInt(localStorage.getItem('PeriodoUparPaladino'));
// Obtém a NodeList de elementos com a classe "name"
var elementosName = document.getElementsByClassName("name");

for (var i = 0; i < elementosName.length; i++) {
    // Cria uma checkbox para cada elemento
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkboxp_" + i; // Define um ID único para cada checkbox
    checkbox.name = "checkbox_group"; // Define um nome comum para o grupo de checkboxes
    checkbox.classList.add("Select_pala"); // Adiciona uma classe, se necessário

    // Adiciona a checkbox antes do elemento com a classe "name"
    elementosName[i].parentNode.insertBefore(checkbox, elementosName[i].nextSibling);

    // Verifica se há um estado salvo para a checkbox
    var checkboxpala = localStorage.getItem("checkboxp_" + i);
    if (checkboxpala === "true") {
        checkbox.checked = true;
    }


    // Adiciona um ouvinte de evento para salvar o estado da checkbox no localStorage
    checkbox.addEventListener("change", function () {
        localStorage.setItem(this.id, this.checked);
    });
}

// Localize o elemento <div class="knight_card_container" style="width: 824px">
const knightCardContainer = document.getElementById('contentContainer');

// Verifique se o elemento foi encontrado
    	let $html = `<div id="divScriptRodando">
        <table align="center" id="avisoScript" width="100%" style="margin-bottom: 5px;">
        <tbody><tr><td><table class="content-border" width="100%" cellspacing="0">
        <tbody><tr>
        <td id="inner-border" style="background-color: rgb(193,162,100); background-image: url(https://dsbr.innogamescdn.com/asset/7fe7ab60/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x;">
        <table class="main" align="left"><tbody><tr><td id="avisoScriptContent"><h1 style="text-align: center; margin-bottom: 0px;">PALA TRAING</h1></td>
        <td><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;"><img id="tocaSom" style="cursor:pointer;" alt="loud_sound" class="emoji" src="https://media.innogamescdn.com/TribalWars/emoji/1f50a.png">
        <audio id="audioElement" preload="auto" autoplay volume="1" loop>
                 <source src="https://cdn.freesound.org/previews/448/448713_4473224-lq.mp3" type="audio/mpeg">
          Seu navegador não suporta o elemento de áudio.
        </audio></div></td></tr></tbody></table></td></tr></tbody></table></tbody></table></div>
        <table class="content-border" width="100%" style="margin-bottom: 5px;"><tbody><tr>`;
var elementAction = document.getElementsByClassName("action");
		BuildingStatue.knights[Object.keys(BuildingStatue.knights)[0]].usable_regimens.forEach(function (el, i) {

        	$html += `
                <td style="background-color: orange;">
                    <div class="time">
                        <input type="radio" name="train-knights" value="${i}">
                        <span style="margin-bottom: 1px" class="icon header time"></span>${String(
                            Math.floor(
                                el.duration / 3600
                            )
                        ).padStart(2, '0')}:${String(
                            Math.floor(
                                (el.duration % 3600) / 60
                            )
                        ).padStart(2, '0')}:${String(
                            Math.floor(el.duration % 60)
                        ).padStart(2, '0')}
                    </div>
                </td>`;
    	}
	);

	 $html += `</tr>
        </tbody>
    </table>
    <style>
    #start.hidden,
    #save.hidden {
        display: none;
    }
</style>
    <div style="padding-top: 4px; text-align: right;">
        <input type="button" id="start" class="btn hidden" value="Start Training">
        <input type="button" id="save" class="btn hidden" value="Save Options">
    </div>
    <br>
    <small>
        <strong>
            Treinando Us Pala v3.0 by<span style="color: red"> Zigaeezz </span><span id="horas"></span><span id="Inforot"></span>
        </strong>
    </small><style>
    .ligarDesligar {
            border: 1px solid #0080ff;
            box-shadow: 0 0 20px 20px rgb(38 38 38) inset, inset 0px 0px 0 0 rgb(0, 255, 0);
            -webkit-transition: all 150ms ease-in-out;
            transition: all 150ms ease-in-out;
            display: inline-block;
            padding: 5px;
            font-Size: 9px;
            font-Weight: bolder;
            cursor: pointer;
            border-Radius: 5px;
            margin: 3px;
            line-Height: normal;
        }
        .ligarDesligar:hover{
            box-shadow: 0 0 15px 0 #3498db inset, 0 0 15px 4px #3498db;
        }
        .ligarDesligar.on { /* Aplicando sombra quando o botão está ativado */
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}
</style>`;
    knightCardContainer.insertAdjacentHTML('beforebegin', $html);
	let val = Number(localStorage.getItem('Statue'));

	$(`input[value="${val === undefined ? 0 : val}"]`).prop('checked', true);

	$('#save').on('click', function () {
		localStorage.setItem('Statue', $('input[type="radio"]:checked').val());
		UI.SuccessMessage(
			'The settings have been saved successfully.'
		);
	});
	$('#start').on('click', function (e) {
		e.preventDefault();
		val = Number($('input[type="radio"]:checked').val());
        var checkpala = document.getElementsByClassName('Select_pala');
        var x = 0;
		Object.keys(BuildingStatue.knights).forEach((i, el) => {
    const knightLevel = BuildingStatue.knights[i].level;
    // Verifica se o nível do cavaleiro é menor que x
        if (x < checkpala.length) {
           if (!checkpala[x].checked) {
              if (elementAction[x].textContent.includes("casa")) {
                if (knightLevel < 30) {
                    setTimeout(function () {
                        TribalWars.post(
                            game_data.link_base.replace('amp;screen=', '') +
                            'screen=statue&ajaxaction=regimen',
                            null, {
                                knight: BuildingStatue.knights[i].id,
                                regimen: BuildingStatue.knights[i].usable_regimens[val].id,
                            },
                            function () {
                                UI.SuccessMessage(_('386e303de70e5a2ff1b5cabefb0666f5'));
                            },
                            function (r) {
                                console.error(r);
                            }
                        );
                    }, el * 250);
                }
            }
        }
    }x++;
});
	});

    function atualizarTempoRestante() {
    // Obtém a referência para o elemento com o ID "horas"
    var horasElement = document.getElementById('horas');

    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximoCarregamento = localStorage.getItem('proximoCarregamentoPtraing');
    if (proximoCarregamento) {
        proximoCarregamento = new Date(proximoCarregamento);
    } else {
        // Executa o script imediatamente
        executarScript();

        // Define a próxima hora de carregamento para 2 horas após a execução
        proximoCarregamento = new Date();
        proximoCarregamento.setMinutes(proximoCarregamento.getMinutes() + PeriodoUparPaladino);
        // Salva a próxima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoPtraing', proximoCarregamento);
    }

    function executarScript() {

        setTimeout(function() {
            document.getElementById('start').click();
        }, 15000); // Após a execução, espera 15s para clicar para treinar
    }

    function atualizar() {
        // Obtém a hora atual
        var agora = new Date();

        // Verifica se é hora de recarregar a página
        if (agora >= proximoCarregamento) {
            localStorage.removeItem('proximoCarregamentoPtraing');
            // Recarrega a página
             window.location.reload();
            //setTimeout(window.location.reload, 1000);
        } else {
            // Calcula o tempo restante até o próximo carregamento
            var tempoRestante = proximoCarregamento - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = "Próximo Treinamento em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conteúdo do elemento com o tempo restante formatado
            horasElement.textContent = tempoRestanteFormatado;

            // Chama a função novamente após 1 segundo
            setTimeout(atualizar, 1000);
        }
    }

    // Chama a função pela primeira vez
    atualizar();
}

// Chama a função para iniciar o contador regressivo
atualizarTempoRestante();
    var v6 = 6;
    var valor6 = localStorage.getItem('check' + v6);
    var estado6 = valor6 === 'true';
    if(estado6){ var conf6 = 'ok'}
    if(conf6 === 'ok'){
function redirecionar(){
    var temp_farm = parseInt(localStorage.getItem('CupPala'));
             var rotacion = document.getElementById('Inforot');
    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximaRotacao = localStorage.getItem('proximoCarregamentoRot2');
    if (proximaRotacao) {
        proximaRotacao = new Date(proximaRotacao);
    } else {
        // Define a pr xima hora de carregamento para 2 horas ap s a execu  o
        proximaRotacao = new Date();
        proximaRotacao.setMinutes(proximaRotacao.getMinutes() + temp_farm);
        // Salva a pr xima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoRot2', proximaRotacao);
    }
function atualizares() {
        // Obt m a hora atual
        var agora = new Date();
        // Verifica se   hora de recarregar a p gina
        if (agora >= proximaRotacao) {
         localStorage.removeItem('proximoCarregamentoRot2');
            var redirecionamentos = [
    { screen: "main", delay: 5000 },
    { screen: "am_farm", delay: 7000 },
    { screen: "place&mode=scavenge", delay: 9000 },
    { screen: "place&mode=scavenge_mass", delay: 11000 },
    { screen: "market&mode=call", delay: 13000 },
    { screen: "market&mode=traders", delay: 15000 },
    { screen: "statue&mode=overview", delay: 20000 },
    { screen: "snob&mode=coin", delay: 1000 },
    { screen: "train", delay: 3000 }
];

redirecionamentos.forEach((item, index) => {
    let valorSalvo = localStorage.getItem('check' + index);
    if (valorSalvo === 'true') {
        setTimeout(() => {
            UI.InfoMessage('Redirecting...');
            window.location.href = game_data.link_base_pure + '&screen=' + item.screen;
        }, item.delay);
    }
});

        } else {
            // Calcula o tempo restante at  o pr ximo carregamento
            var tempoRestante = proximaRotacao - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = " || Rotacionando em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conte do do elemento com o tempo restante formatado
            rotacion.textContent = tempoRestanteFormatado;

            // Chama a fun  o novamente ap s 1 segundo
            setTimeout(atualizares, 1000);
        }
    }
    // Chama a fun  o pela primeira vez
    atualizares();}
    redirecionar();}
    let url = window.location.href;
    let subdominio = new URL(url).hostname.split('.')[0];
    let novoTitulo = subdominio + " - TREINANDO";
    document.title = novoTitulo;
}
//==================================================== Script Etiquetador ========================================================================
const EtiquetadorAtiva = localStorage.getItem('EtiquetadorAtiva');
if(window.location.href.includes('mode=incomings') && EtiquetadorAtiva === 'S'){
    const Alarmenobre = localStorage.getItem('Alarmenobre');
    let $html = `<div id="divScriptRodando">
        <table align="center" id="avisoScript" width="100%" style="margin-bottom: 5px;">
        <tbody><tr><td><table class="content-border" width="100%" cellspacing="0">
        <tbody><tr>
        <td id="inner-border" style="background-color: rgb(193,162,100); background-image: url(https://dsbr.innogamescdn.com/asset/7fe7ab60/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x;">
        <table class="main" align="left"><tbody><tr><td id="avisoScriptContent"><h1 style="text-align: center; margin-bottom: 0px;">ETIQUETANDO COMANDOS</h1></td>
        <td><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;"><img id="tocaSom" style="cursor:pointer;" alt="loud_sound" class="emoji" src="https://media.innogamescdn.com/TribalWars/emoji/1f50a.png">
        <audio id="audioElement" preload="auto" autoplay volume="1" loop>
                <source src="https://cdn.freesound.org/previews/448/448713_4473224-lq.mp3" type="audio/mpeg">
          Seu navegador não suporta o elemento de áudio.
        </audio></div></td></tr></tbody></table></td></tr></tbody></table></tbody></table></div>
           <small>
        <strong id="movendoTexto">
            As Etiquetas v3.0 by<span style="color: red"> Zigaeezz </span><span id="extra"></span><span id="horas"></span>
        </strong>
    </small>`;
// Captura a referência para a tabela de destino
let Inserir = document.getElementById('contentContainer');

   // Adiciona a nova div antes da divBorda
    Inserir.insertAdjacentHTML('beforebegin', $html);
        function Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    var cd = Aleatorio(7, 17); // intervalo de att em minutos
    setTimeout(function(){location.reload();}, cd*60*1000);

    // Obtém a referência para o elemento com o ID "horas"
    let horasElement = document.getElementById('horas');
    let extraElement = document.getElementById('extra');

		var d = new Date(),
		  h = String("0" + d.getHours()).slice(-2),
		  m = String("0" + d.getMinutes()).slice(-2),
		  s = String("0" + d.getSeconds()).slice(-2);
		var t = h + ":" + m + ":" + s;
		var seleciona = $("#select_all");
		var etiqueta = $('input[value=Etiqueta]');

	  function identificar(){
		 var millis = 0;
		 function setMillis()
		 {
			var tmp = millis;
			millis += 100;
			return tmp;
		 }

		 (function () {
			function getOriginCoords(i, row) {
			   var villName = $(row).children('td').eq(2).text();
			   return villName.match(/\d{3}\|\d{3}/)[0];
			}

			function count(coords) {
			   return coords.reduce(function (acc, coord) {
				  if (acc[coord] == undefined) {
					 acc[coord] = 1;}
				  else {
					 acc[coord]++; }

				  return acc; }, {}); }

			var $rows = $('#incomings_table tbody').children('.row_a, .row_b');
			var coords = $rows.map(getOriginCoords).toArray();
			var attackCount = count(coords);
			$rows.each(function (i, row) {
			   var coords = getOriginCoords(i, row);
			   var count = attackCount[coords];
			   $(row).children('td').eq(0).prepend(String("00" + count).slice(-3));

			   var nome = $(row).find(".quickedit-label").text().replace(/\t/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace("                        ","").replace(" DESIGNORAR!","");
			   var player = $(row).find("td a[href*='info_player&id']").text();
			   var distancia = $(row).find("td:contains('.'):not(:contains('às'))").last().text();
			  // alert(distancia);
			   var hora = $(row).find("td:contains(s)").text().split("às")[1].split(":")[0];
			   if(nome.match(/nobre/gi) && !nome.match(/morto/gi) && !nome.match(/ok/gi)){
                  $(row).children('td').css({ "background-color" : "yellow" });
				//  $(row).find(".rename-icon").click();
				 // $(row).find(".quickedit-edit input[type='text']").val(nome.split(" ")[0] + " " + nome.split(" ")[1] + " " + nome.split(" ")[2] + " " + player + " ALFACE ?");
                //  $(row).find(".quickedit-edit input[type='button']").click();
			   }
			   setTimeout(function()
						  {
				 if(!nome.match(/ataque/gi) && !nome.match(/nobre/gi) && !nome.match(/desv/gi) && !nome.match(/suporte/gi) && !nome.match(/apoio/gi) && !nome.match(/morto/gi) && !nome.match(/ok/gi) && !nome.match(/defendido/gi)){
						 if (count == 1) {
						$(row).children('td').css({ "background-color" : "violet" });
						if(!nome.match(/full/gi) && !nome.match(/desvia/gi)){
						   if(hora > 0 && hora < 7){
							  $(row).children('td').css({ "background-color" : "aquamarine" });
							  if(!nome.match(/bn/gi)){
								// $(row).find(".rename-icon").click();
								// $(row).find(".quickedit-edit input[type='text']").val(nome.split(" ")[0] + " " + nome.split(" ")[1] + " " + nome.split(" ")[2] + " " + player  + " FULL NO BN ?");
								// $(row).find(".quickedit-edit input[type='button']").click();
							  }
						   }
						   else{
							 // $(row).find(".rename-icon").click();
							 // $(row).find(".quickedit-edit input[type='text']").val(nome.split(" ")[0] + " " + nome.split(" ")[1] + " " + nome.split(" ")[2] + " " + player  + " FULL?");
							 // $(row).find(".quickedit-edit input[type='button']").click();
						   }
						}
					 }

					 if (count > 1) {
						$(row).children('td').css({ "background-color" : "white" });
						/*  if(eh()){
							  $(row).find(".rename-icon").click();
									   $(row).find(".quickedit-edit input[type='text']").val(nome.split(" ")[0] + " " + nome.split(" ")[1] + " " + nome.split(" ")[2] + " " + player  + " checar se é Nobre!");
						   }
						   else{*/
						if(!nome.match(/fake/gi)){
						   if(hora > 0 && hora < 7){

							  $(row).children('td').css({ "background-color" : "white" });
							  if(!nome.match(/bn/gi)){
								// $(row).find(".rename-icon").click();
								// $(row).find(".quickedit-edit input[type='text']").val(nome.split(" ")[0] + " " + nome.split(" ")[1] + " " + nome.split(" ")[2] + " " + player  + " FAKE? BN ");
								// $(row).find(".quickedit-edit input[type='button']").click();
							  }
						   }
						   else{
							//  $(row).find(".rename-icon").click();
							//  $(row).find(".quickedit-edit input[type='text']").val(nome.split(" ")[0] + " " + nome.split(" ")[1] + " " + nome.split(" ")[2] + " " + player  + "  FAKE? ");
							 // $(row).find(".quickedit-edit input[type='button']").click();
						   }
						}
					 }
				  }
				  // }
			   }, setMillis());
			});
		 })();
	  } identificar();
   function etiquetar(){
			// seleciona.click();
			etiqueta.click();
		 }
      var S_incoming = localStorage.getItem('valorSalvo');
          if (S_incoming === null) {S_incoming = 0;}
  function notific(){
        var incoming = parseInt($("#incomings_amount").text());
              if (incoming === null) {incoming = 0;}
    if(incoming > 0){ var tempoRestanteFormatado = "Estamos em Guerra: " + incoming + " Ataques a caminho";
            // Atualiza o conte do do elemento com o tempo restante formatado
            horasElement.textContent = tempoRestanteFormatado;}
   else{ tempoRestanteFormatado = "Estamos em Paz";
            // Atualiza o conte do do elemento com o tempo restante formatado
            horasElement.textContent = tempoRestanteFormatado;}
    }
    notific();

function atualizar() {
    var incoming = parseInt($("#incomings_amount").text());
    var result = incoming - S_incoming;
              if (incoming === null) {incoming = 0;}
        if (result !== 0) {
         localStorage.setItem('valorSalvo', incoming);
            setTimeout(function () { location.reload(); }, 2000);
        }
    setTimeout(atualizar, 30*1000);
}
atualizar();

            // Seleciona todos os elementos com a classe "quickedit-label"
        var elements = document.querySelectorAll('.quickedit-label');
         // Seleciona todas as checkboxes com nome começando por "id_"
          const checkboxes = document.querySelectorAll('input[type="checkbox"][name^="id_"]');

        var elementosAtuais = 0;
        var elementosA = 0;
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const text = element.innerText; // Obtém o texto dentro do elemento
    if (text.includes('Nobre')) {
                elementosAtuais++; }
    else if(text.includes('Ataque')) {
        const checkbox = checkboxes[i];
        checkbox.checked = true;
        elementosA++; }
        }
      if(elementosA > 0) { setTimeout(etiquetar, 29000); }
        // Variável para armazenar o número de elementos "Nobre" na última verificação
        var elementosAnteriores = localStorage.getItem('Nobres');
        if (elementosAnteriores === null) { elementosAnteriores = 0; }

        // Função para verificar e atualizar o número de elementos "Nobre"
        function verificarElementos() {
            // Verifica se o número de elementos "Nobre" mudou desde a última verificação
            var diferenca = elementosAtuais - elementosAnteriores;
            // Executa ação dependendo da diferença de elementos
            if (diferenca > 0) {
                var extraFormatado = "Mais Nobres a caminho, Fique em Alerta! || ";
                // Atualiza o conteúdo do elemento com o tempo restante formatado
                extraElement.textContent = extraFormatado;
                if(Alarmenobre === 'S'){
                funcaoParaMais();}
            } else {
                extraFormatado = "Comandos de Nobres identificados: " + elementosAtuais + " || ";
                // Atualiza o conteúdo do elemento com o tempo restante formatado
                extraElement.textContent = extraFormatado;
            }
        // Atualiza a variável com o número atual de elementos "Nobre"
            elementosAnteriores = elementosAtuais;
            localStorage.setItem('Nobres', elementosAnteriores);
        }

        // Chama a função verificarElementos inicialmente e a cada intervalo de tempo (por exemplo, a cada 2 segundos)
        verificarElementos(); // Chamada inicial
function funcaoParaMais() {
// Cria o elemento de áudio com as configurações desejadas
                            let $Html5 = `<tbody><tr><td><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;">
                                           <audio preload="auto" autoplay volume="0.9" loop>
                                           <source src="https://cdn.freesound.org/previews/174/174021_3240885-lq.mp3" type="audio/mpeg">
                                              Seu navegador não suporta o elemento de audio.
                                                 </audio></div></td></tr></tbody>`;

                                                   // Adiciona o elemento de áudio ao final do body
                                                        document.body.insertAdjacentHTML('beforeend', $Html5);
}
    let url = window.location.href;
    let subdominio = new URL(url).hostname.split('.')[0];
    let novoTitulo = subdominio + " - ETIQUETANDO";
    document.title = novoTitulo;
}
//=================================================== Script Recruit =============================================================================
var train = document.getElementById('train_form'); const RecruitAtivo = localStorage.getItem('RecruitAtivo');
if(train && RecruitAtivo === 'S'){

    // Cria um html
  let $html = `<div id="divScriptRodando">
        <table align="center" id="avisoScript" width="100%" style="margin-bottom: 5px;">
        <tbody><tr><td><table class="content-border" width="100%" cellspacing="0">
        <tbody><tr>
        <td id="inner-border" style="background-color: rgb(193,162,100); background-image: url(https://dsbr.innogamescdn.com/asset/7fe7ab60/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x;">
        <table class="main" align="left"><tbody><tr><td id="avisoScriptContent"><h1 style="text-align: center; margin-bottom: 0px;">RECRUTANDO</h1></td>
        <td><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;"><img id="tocaSom" style="cursor:pointer;" alt="loud_sound" class="emoji" src="https://media.innogamescdn.com/TribalWars/emoji/1f50a.png">
        <audio id="audioElement" preload="auto" autoplay volume="1" loop>
                 <source src="https://cdn.freesound.org/previews/448/448713_4473224-lq.mp3" type="audio/mpeg">
          Seu navegador não suporta o elemento de audio.
        </audio></div></td></tr></tbody></table></td></tr></tbody></table></tbody></table></div>
           <small>
        <strong id="movendoTexto">
            Recrutando Us Brabo v3.0 by<span style="color: red"> Zigaeezz </span><span id="horas"></span><span id="Inforot"></span>
        </strong>
    </small>`;
// Captura a referência para a tabela de destino
let Inserir = document.getElementById('contentContainer');
   // Adiciona a nova div antes da divBorda
Inserir.insertAdjacentHTML('beforebegin', $html);
let $InfoTimeTrops = `<div id="Max_recruit" class="clearfix vis " style="width: 890px; border: 1px solid #7d510f; margin: 0px 5px 15px 5px;"><h4>Meta de recrutamento: <span id="nameModel">Padrão</span></h4>
<div>
 <table class="vis" style="border-collapse:separate; border-spacing: 3px; table-layout: fixed; width: 100%;"><tbody><tr><th style="width: 10px">
  <a href="#" class="unit_link" data-unit="spear"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spear.png" data-title="Lanceiro"></a></th><th style="width: 10px">
  <a href="#" class="unit_link" data-unit="sword"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_sword.png" data-title="Espadachim"></a></th><th style="width: 10px">
  <a href="#" class="unit_link" data-unit="axe"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_axe.png" data-title="Bárbaro"></a></th><th style="width: 10px">
  <a href="#" class="unit_link" data-unit="archer"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_archer.png" data-title="Arqueiro"></a></th><th style="width: 10px">
  <a href="#" class="unit_link" data-unit="spy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spy.png" data-title="Explorador"></a></th><th style="width: 10px">
  <a href="#" class="unit_link" data-unit="light"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_light.png" data-title="Cavalaria leve"></a></th><th style="width: 10px">
  <a href="#" class="unit_link" data-unit="marcher"><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_marcher.png" data-title="Arqueiro a Cavalo"></a></th><th style="width: 10px">
  <a href="#" class="unit_link" data-unit="heavy"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_heavy.png" data-title="Cavalaria pesada"></a></th><th style="width: 10px">
  <a href="#" class="unit_link" data-unit="ram"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_ram.png" data-title="Aríete"></a></th><th style="width: 10px">
  <a href="#" class="unit_link" data-unit="catapult"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_catapult.png" data-title="Catapulta"></a></th><th style="width: 10px">
  <a href="#" class="unit_link" data-unit="knight"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_knight.png" data-title="Paladino"></a></th><th style="width: 10px">
  <a href="#" class="unit_link" data-unit="snob"><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_snob.png" data-title="Nobre"></a></th></tr><tr id="ModeloC" class="units-row">
  <td style="width: 10px" id="spear" class="nowrap unit-item unit-item-spear"></td>
  <td style="width: 10px" id="sword" class="nowrap unit-item unit-item-sword"></td>
  <td style="width: 10px" id="axe" class="nowrap unit-item unit-item-axe"></td>
  <td style="width: 10px" id="archer" class="nowrap unit-item unit-item-archer"></td>
  <td style="width: 10px" id="spy" class="nowrap unit-item unit-item-spy"></td>
  <td style="width: 10px" id="light" class="nowrap unit-item unit-item-light"></td>
  <td style="width: 10px" id="marcher" class="nowrap unit-item unit-item-archer"></td>
  <td style="width: 10px" id="heavy" class="nowrap unit-item unit-item-heavy"></td>
  <td style="width: 10px" id="ram" class="nowrap unit-item unit-item-ram"></td>
  <td style="width: 10px" id="catapult" class="nowrap unit-item unit-item-catapult"></td>
  <td style="width: 10px" id="knight" class="nowrap unit-item unit-item-knight"></td>
  <td style="width: 10px" id="snob" class="nowrap unit-item unit-item-snob"></td></tr>
  </tbody></table></div></div>
  <div style="font-size: 14px;" align="left"><table><tbody><tr><td>
                            <label for="modelNamer">Quantidade de tropas a recrutar por vez:</label>
                                <input type="number" value ="5" id="quantR" class="unitsInput input-nicer" style="width: 40px; font-size: 14px;"></tr></td>
                                <tr><td><label for="modelNamer">Defina o Máximo de Filas no Recrutamento:</label>
                                <input type="number"  value="3" id="quantRF" class="unitsInput input-nicer" style="width: 40px; font-size: 14px;"></td><td></td><td></td><td align="right">
                                <select id="chosen" style="width: 150px; font-size: 14px;">
                                    <option value="xxx">Recrutamento ON</option>
                                    <option value="edict">Criar modelo</option>
                                    <option value="Load">Carregar modelo</option>
                                    <option value="rotact">Rotacionar vilas</option>
                                </select></td></tr></tbody></table>
                            </div>
  <div id="carregarM" style="font-size: 14px; display: none;">
                                <label for="modelRSelect">Selecionar Modelo:</label>
                                <select id="modelRSelect" class="unitsInput input-nicer" style="width: 210px; font-size: 14px;"><option value="">Selecione um Modelo</option></select>
                                <button id="deleteModelR" type="button" class="btn-modify">
                                    <i class="fas fa-trash-alt"></i> Excluir Modelo
                                </button>
                                <button id="setModelButtonR" type="button" class="btn-modify">
                                    <i class="fas fa-cogs"></i> Definir Modelo
                                </button>
                            </div>
 <div id="Rotacionarsss" style="font-size: 14px; display: none;">
                                <label for="modelRSelects">Ativar rotação de Aldeias:</label>
                                <select  id="Rotacionarss" class="unitsInput input-nicer" style="width: 70px; font-size: 14px;"><option value="Sim">Sim</option><option value="Nao">Não</option></select>
                                <label for="modelRSelects">Ir á proxima vila em: </label>
                                <select  id="TimeRotacionarss" style="width: 210px; font-size: 14px;"><option value="30">30 segundos</option><option value="60">1 minuto</option><option value="120">2 minutos</option></select>
                            </div>
  <div id="ModeloE"  class="clearfix vis " style="width: 890px; display: none; border: 1px solid #7d510f; margin: 0px 5px 15px 5px;"><h4>Salvar Modelo:</h4><div><table class="vis" style="border-collapse:separate; border-spacing: 3px; table-layout: fixed; width: 100%;"><tbody><tr>
  <td><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spear.png" data-title="Lanceiro"><input type="number" value="0" style="width: 80px" id="spearc" class="nowrap unit-item unit-item-spear"/></td>
  <td><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_sword.png" data-title="Espadachim"><input type="number" value="0" style="width: 80px" id="swordc" class="nowrap unit-item unit-item-sword"/></td>
  <td><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_axe.png" data-title="Bárbaro"><input type="number" value="0" style="width: 80px" id="axec" class="nowrap unit-item unit-item-axe"/></td>
  <td><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_archer.png" data-title="Arqueiro"><input type="number" value="0" style="width: 80px" id="archerc" class="nowrap unit-item unit-item-archer"></td>
  </tr><tr>
  <td><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_spy.png" data-title="Explorador"><input type="number" value="0" style="width: 80px" id="spyc" class="nowrap unit-item unit-item-spy"/></td>
  <td><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_light.png" data-title="Cavalaria leve"><input type="number" value="0" style="width: 80px" id="lightc" class="nowrap unit-item unit-item-light"/></td>
  <td><img src="https://dsbr.innogamescdn.com/asset/c1748d3c/graphic/unit/unit_marcher.png" data-title="Arqueiro a Cavalo"><input type="number" value="0" style="width: 80px" id="marcherc" class="nowrap unit-item unit-item-archer"/></td>
  </tr><tr>
  <td><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_heavy.png" data-title="Cavalaria pesada"><input type="number" value="0" style="width: 80px" id="heavyc" class="nowrap unit-item unit-item-heavy"/></td>
  <td><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_ram.png" data-title="Aríete"><input type="number" value="0" style="width: 80px" id="ramc" class="nowrap unit-item unit-item-ram"/></td>
  <td><img src="https://dsbr.innogamescdn.com/asset/0e187870/graphic/unit/unit_catapult.png" data-title="Catapulta"><input type="number" value="0" style="width: 80px" id="catapultc" class="nowrap unit-item unit-item-catapult"/>
  </td></tr></tbody></table>
  <div style="font-size: 14px;">
                                <label for="modelNamer">Nome do Modelo:</label>
                                <input type="text" placeholder="Defina um nome para o modelo de Recrutamento" id="modelNamer" class="unitsInput input-nicer" style="width: 300px; font-size: 14px;">
                                <button id="saveButtonr" type="button" class="btn-modify">
                                    <i class="fas fa-save"></i> Salvar Modelo
                                </button>
                            </div></div></div>

  `;

let Insert = document.getElementById('contentContainer');
   // Adiciona a nova div antes da divBorda
Insert.insertAdjacentHTML('afterend', $InfoTimeTrops);
$('<style>').text(`
    #Max_recruit .units-row td,
    #Max_recruit th {
        display: none;
    }
`).appendTo('head');
function carregarM(){
let unitsr = ['spear', 'sword', 'axe', 'archer', 'spy', 'light', 'marcher', 'heavy', 'ram', 'catapult'];
// Definindo valores padrão
let defaultQuantities = {
    spear: localStorage.getItem('lancas'),
    sword: localStorage.getItem('espadas'),
    axe: localStorage.getItem('barbaros'),
    archer: localStorage.getItem('arcos'),
    spy: localStorage.getItem('espioes'),
    marcher: localStorage.getItem('arqueirosmontados'),
    light: localStorage.getItem('cavalosleves'),
    heavy: localStorage.getItem('cavalospesados'),
    ram: localStorage.getItem('arietes'),
    catapult: localStorage.getItem('catapas')
};
let unitsWithQuantities = {};
unitsr.forEach(function(unit) {
    // Recupera o valor armazenado no localStorage para a unidade
    let storedValue = localStorage.getItem(unit);
    // Se não houver valor no localStorage, usa o valor padrão
    if (storedValue === null) {
        storedValue = defaultQuantities[unit];
        localStorage.setItem(unit, storedValue);
    } else {
        // Converte para número caso tenha sido armazenado como string
        storedValue = Number(storedValue);
    }
    // Armazena o valor para a unidade
    unitsWithQuantities[unit] = storedValue;
});
}carregarM();
function RequestUnits() {
    return $.get('/interface.php?func=get_unit_info').then(function ($xml) {
        var $units = {};
        $($xml).find('config').children().each(function () {
            const unitName = this.tagName;
          if(unitName === 'snob' || unitName === 'knight' ){}else{
            const formattedTime = localStorage.getItem(`${unitName}`) || 0;

         //   $units[unitName] = { speed, unitTime };

            // Exibe apenas os elementos correspondentes da unidade requisitada
            $('#Max_recruit th a[data-unit="' + unitName + '"]').closest('th').css('display', 'table-cell');
            $('#Max_recruit #' + unitName).text(formattedTime).css('display', 'table-cell');
          }
        });
    let texts = localStorage.getItem('modeloSelect');
    document.getElementById('nameModel').textContent = texts;
        return $units;
    });
}
RequestUnits();
// Atualiza o select com os modelos salvos no localStorage
function updateModelSelect() {
    let select = document.getElementById('modelRSelect');
    select.innerHTML = '<option value="">Selecione um Modelo</option>'; // Reseta as opções

    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('Modelo_')) {
            let modelName = key.replace('Modelo_', '');
            let option = document.createElement('option');
            option.value = key;
            option.textContent = modelName;
            select.appendChild(option);
        }
    });
}updateModelSelect();
// Escutando a mudança no select
document.getElementById('chosen').addEventListener('change', function() {
    // Pegando o valor selecionado
    const selectedValue = this.value;
    // Verificando o valor selecionado
    switch (selectedValue) {
        case 'xxx':
            document.getElementById('ModeloE').style.display = 'none';
            document.getElementById('carregarM').style.display = 'none';
            document.getElementById('Rotacionarsss').style.display = 'none';
            break;

        case 'edict':
            document.getElementById('ModeloE').style.display = 'inline';
            document.getElementById('carregarM').style.display = 'none';
            document.getElementById('Rotacionarsss').style.display = 'none';
            //location.reload();
            break;

        case 'Load':
            // Ação para "Carregar modelo"
           document.getElementById('ModeloE').style.display = 'none';
           document.getElementById('carregarM').style.display = 'inline';
            document.getElementById('Rotacionarsss').style.display = 'none';
            // Aqui você pode colocar o código para carregar o modelo
            break;
        case 'rotact':
            // Ação para "Carregar modelo"
           document.getElementById('ModeloE').style.display = 'none';
           document.getElementById('carregarM').style.display = 'none';
            document.getElementById('Rotacionarsss').style.display = 'inline';
            // Aqui você pode colocar o código para carregar o modelo
            break;
        default:
            break;
    }
});
document.getElementById('saveButtonr').addEventListener('click', function () {
    let modelName = document.getElementById('modelNamer').value.trim(); // Nome do modelo
    if (!modelName) {
        alert('Por favor, insira um nome para o modelo.');
        return;
    }

    let unitsr = ['spear', 'sword', 'axe', 'archer', 'spy', 'light', 'marcher', 'heavy', 'ram', 'catapult'];
    let recruitmentModel = {};

    // Captura os valores das inputs
    unitsr.forEach(unit => {
        let input = document.getElementById(unit + 'c');
        if (input) {
            recruitmentModel[unit] = parseInt(input.value) || 0;
        }
    });

    // Salva no localStorage com o nome do modelo
    localStorage.setItem(`Modelo_${modelName}`, JSON.stringify(recruitmentModel));

    alert(`Modelo "${modelName}" salvo com sucesso!`);
    updateModelSelect();
});
// Excluir modelo do localStorage e atualizar o select
document.getElementById('deleteModelR').addEventListener('click', function () {
    let select = document.getElementById('modelRSelect');
    let selectedKey = select.value;

    if (!selectedKey) {
        alert('Selecione um modelo para excluir.');
        return;
    }

    localStorage.removeItem(selectedKey); // Remove do localStorage
    alert(`Modelo "${selectedKey.replace('Modelo_', '')}" excluído com sucesso!`);
    updateModelSelect(); // Atualiza o select
});
// Definir modelo carregando valores e salvando no localStorage das unidades
document.getElementById('setModelButtonR').addEventListener('click', function () {
    let select = document.getElementById('modelRSelect');
    let selectedKey = select.value;

    if (!selectedKey) {
        alert('Selecione um modelo para definir.');
        return;
    }

    let modelData = JSON.parse(localStorage.getItem(selectedKey));
    if (!modelData) {
        alert('Erro ao carregar o modelo.');
        return;
    }

    // Percorre todas as unidades e define os valores salvos
    Object.keys(modelData).forEach(unit => {
            localStorage.setItem(unit, modelData[unit]); // Salva no localStorage individual da unidade
    });
   localStorage.setItem('modeloSelect', selectedKey);
    RequestUnits();
    alert(`Modelo "${selectedKey.replace('Modelo_', '')}" definido com sucesso!`);
});
    let inputIds = ["quantR", "quantRF"];
    let selects = [
        { id: "Rotacionarss", storageKey: "RotON" },
        { id: "TimeRotacionarss", storageKey: "RotTime" }
    ];
    inputIds.forEach(id => {
        let input = document.getElementById(id);
        // Carrega o valor salvo no localStorage, se existir
        if (localStorage.getItem(id)) {
            input.value = localStorage.getItem(id);
        }
        // Adiciona o evento de change para salvar no localStorage
        input.addEventListener("change", function () {
            localStorage.setItem(id, this.value);
            console.log(`📌 [${id}] atualizado para: ${this.value}`);
        });
    });
    selects.forEach(({ id, storageKey }) => {
        let select = document.getElementById(id);
        let savedValue = localStorage.getItem(storageKey);

        // Se houver valor salvo, selecionar no dropdown
        if (savedValue) {
            select.value = savedValue;
        }

        // Adiciona evento para salvar a opção selecionada
        select.addEventListener("change", function () {
            localStorage.setItem(storageKey, this.value);
        });
    });
function getTroopCount(unitName) {
        const troopCountElement = $(`a[data-unit="${unitName}"]`).closest('tr').find('td:eq(2)');
        if (troopCountElement.length) {
            const troopCountText = troopCountElement.text().split('/')[1].trim(); // Pega apenas a parte DEPOIS da barra
            const count = parseInt(troopCountText);
            return count;
        } else {
            return null;
        }
    }
function getNumberFromElement(id) {
    let element = document.getElementById(id);
    if (element) {
        let match = element.textContent.match(/\((\d+)\)/); // Captura o número dentro dos parênteses
        if (match) {
            return parseInt(match[1], 10); // Converte para número inteiro
        }
    }
    return null; // Retorna null se não encontrar
}
function validarPreencher(unidade, maxsalvo, quantatual) {
    let Qtpvez = localStorage.getItem('quantR') || 5;
    let Aunit = unidade;
    let inputUnit = document.querySelector(`input[name="${Aunit}"]`);
    const recruitAmount = Math.min(maxsalvo - quantatual);
    if (recruitAmount > 0) {
        $(`input[name="${Aunit}"]`).val(Qtpvez);
        setTimeout(() => {
            let botao = document.querySelector('input.btn.btn-recruit');
            if (inputUnit && inputUnit.value > 0 && botao) {
                botao.click();
                console.log(`✅ Botão de recrutamento clicado!`);
            }
        }, 300);
    }
}
async function processUnitsWithDelay() {
    let unitsr = ['spear', 'sword', 'axe', 'archer', 'spy', 'marcher', 'light', 'heavy', 'ram', 'catapult'];
    let delay = 1000; // Tempo de espera (em ms) entre cada execução
    let statusUnits = {}; // Objeto para armazenar o status de cada unidade

    for (const unit of unitsr) {
        let savedCount = parseInt(localStorage.getItem(unit), 10) || 0; // Obtém a quantidade salva ou 0 se não existir
        let currentCount = getTroopCount(unit); // Obtém a quantidade atual da função
        let unitmax = getNumberFromElement(unit + '_0_a');
        let Qtpvez = localStorage.getItem('quantR') || 5;

        if (savedCount > currentCount && currentCount != null && unitmax >= Qtpvez) {
            console.log(`⚠️ Unidade ${unit}: Salvo (${savedCount}) > Atual (${currentCount}). Preenchendo...`);
            validarPreencher(unit, savedCount, currentCount);
            statusUnits[unit] = true; // Define como true pois foi processado
        } else {
            statusUnits[unit] = false; // Salva como false pois não atendeu à condição
        }

        await new Promise(resolve => setTimeout(resolve, delay)); // Aguarda antes de continuar
    }

    // Verifica se todas as unidades que têm algum valor salvo para análise estão como false
    let unidadesSalvas = Object.keys(statusUnits).filter(unit => localStorage.getItem(unit) !== null);
    let todasFalharam = unidadesSalvas.every(unit => statusUnits[unit] === false);

    if (todasFalharam) {
        console.log("🚨 Recrutamento Concluido!");
        localStorage.setItem('check' + 8, 'false'); localStorage.setItem('box8', 'false');
    }
}
let xist = localStorage.getItem('RotTime') || 120;
function recruit(){
 let Qtfila = localStorage.getItem('quantRF') || 3;
 let Rotime = localStorage.getItem('RotTime');
 let condR = localStorage.getItem('RotON') || 'N';
 let linhas = document.getElementsByClassName('sortable_row'); // Seleciona todas as linhas com a classe
    if (linhas.length < (Qtfila - 1)) {processUnitsWithDelay();}
    if (condR === 'S'){
        if(xist <= 0){
        var vai = document.getElementById('village_switch_right'); console.log('mudando de vila!')
        let vai2 = $('.groupRight');
       setTimeout(function(){if(vai){ vai.click();}},1*1000);
       setTimeout(function(){if(vai2){ vai2.click();}},2*1000);}
     xist = parseInt(xist) - 10;
    }
setTimeout(() => {
    recruit();
}, 16*1000);}recruit();

    var v8 = 8;
    var valor8 = localStorage.getItem('check' + v8);
    var estado8 = valor8 === 'true';
    if(estado8){ var conf8 = 'ok'}
    if(conf8 === 'ok'){
function redirecionar(){
    var temp_farm = parseInt(localStorage.getItem('Rrecruit'));
             var rotacion = document.getElementById('Inforot');
    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximaRotacao = localStorage.getItem('proximoCarregamentoRot2');
    if (proximaRotacao) {
        proximaRotacao = new Date(proximaRotacao);
    } else {
        // Define a pr xima hora de carregamento para 2 horas ap s a execu  o
        proximaRotacao = new Date();
        proximaRotacao.setMinutes(proximaRotacao.getMinutes() + temp_farm);
        // Salva a pr xima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoRot2', proximaRotacao);
    }
function atualizares() {
        // Obt m a hora atual
        var agora = new Date();
        // Verifica se   hora de recarregar a p gina
        if (agora >= proximaRotacao) {
         localStorage.removeItem('proximoCarregamentoRot2');
    var redirecionamentos = [
    { screen: "main", delay: 1000 },
    { screen: "am_farm", delay: 3000 },
    { screen: "place&mode=scavenge", delay: 5000 },
    { screen: "place&mode=scavenge_mass", delay: 7000 },
    { screen: "market&mode=call", delay: 9000 },
    { screen: "market&mode=traders", delay: 11000 },
    { screen: "statue&mode=overview", delay: 13000 },
    { screen: "snob&mode=coin", delay: 15000 },
    { screen: "train", delay: 5 * 60 * 1000 }
];
redirecionamentos.forEach((item, index) => {
    let valorSalvo = localStorage.getItem('check' + index);
    if (valorSalvo === 'true') {
        setTimeout(() => {
            UI.InfoMessage('Redirecting...');
            window.location.href = game_data.link_base_pure + '&screen=' + item.screen;
        }, item.delay);
    }
});

        } else {
            // Calcula o tempo restante at  o pr ximo carregamento
            var tempoRestante = proximaRotacao - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = " || Rotacionando em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conte do do elemento com o tempo restante formatado
            rotacion.textContent = tempoRestanteFormatado;

            // Chama a fun  o novamente ap s 1 segundo
            setTimeout(atualizares, 1000);
        }
    }
    // Chama a fun  o pela primeira vez
    atualizares();}
    redirecionar();}
let url = window.location.href;
    let subdominio = new URL(url).hostname.split('.')[0];
    let novoTitulo = subdominio + " - Recruit";
    document.title = novoTitulo;
}
//==================================================== Coleta ====================================================================================
var coleta = document.getElementById('scavenge_screen');
const ColetaAtiva = localStorage.getItem('ColetaAtiva');
 if(coleta && ColetaAtiva === 'S'){
const PeriodoColeta = parseInt(localStorage.getItem('PeriodoColeta'));
    // Cria um html
  let $html = `<div id="divScriptRodando">
        <table align="center" id="avisoScript" width="100%" style="margin-bottom: 5px;">
        <tbody><tr><td><table class="content-border" width="100%" cellspacing="0">
        <tbody><tr>
        <td id="inner-border" style="background-color: rgb(193,162,100); background-image: url(https://dsbr.innogamescdn.com/asset/7fe7ab60/graphic/screen/tableheader_bg3.png); background-repeat: repeat-x;">
        <table class="main" align="left"><tbody><tr><td id="avisoScriptContent"><h1 style="text-align: center; margin-bottom: 0px;">COLETANDO</h1></td>
        <td><div style="background-color: white; height: 1.2em; width: 1.5em; padding: 2px;"><img id="tocaSom" style="cursor:pointer;" alt="loud_sound" class="emoji" src="https://media.innogamescdn.com/TribalWars/emoji/1f50a.png">
        <audio id="audioElement" preload="auto" autoplay volume="1" loop>
                 <source src="https://cdn.freesound.org/previews/448/448713_4473224-lq.mp3" type="audio/mpeg">
          Seu navegador não suporta o elemento de audio.
        </audio></div></td></tr></tbody></table></td></tr></tbody></table></tbody></table></div>
           <small>
        <strong id="movendoTexto">
            Coletando Uns Rec v3.0 by<span style="color: red"> Zigaeezz </span><span id="horas"></span><span id="Inforot"></span>
        </strong>
    </small>`;
// Captura a referência para a tabela de destino
let Inserir = document.getElementById('contentContainer');

   // Adiciona a nova div antes da divBorda
    Inserir.insertAdjacentHTML('beforebegin', $html);
    function atualizarTempoRestante() {
        // Obtém a referência para o elemento com o ID "horas"
    var infopux = document.getElementById('horas');

    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximoCarregamentoRc = localStorage.getItem('proximoCarregamentoMcoletau');
    if (proximoCarregamentoRc) {
        proximoCarregamentoRc = new Date(proximoCarregamentoRc);
    } else {
        // Executa o script imediatamente
        executarScript();
        // Define a próxima hora de carregamento para 2 horas após a execução
        proximoCarregamentoRc = new Date();
        proximoCarregamentoRc.setMinutes(proximoCarregamentoRc.getMinutes() + (PeriodoColeta));
        // Salva a próxima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoMcoletau', proximoCarregamentoRc);
    }
function executarScript() {
  const Scavange = new function () {
    const scavangesWeight = [15, 6, 3, 2];
     let maxtrop = localStorage.getItem('MaxsendColeta');
    const getBlockedScavanges = () => {
      return document.getElementsByClassName("lock").length;
    };

    const getAvailableScavanges = () => {
      return document.getElementsByClassName("free_send_button");
    };

    const getScavangeWeight = () => {
      const blockedScavanges = getBlockedScavanges();

      let weightArray = scavangesWeight;
      if (blockedScavanges > 0) {
        weightArray = weightArray.slice(0, blockedScavanges * -1);
      }

      return weightArray.reduce((item1, item2) => {
        return item1 + item2;
      });
    };

    const getAvailableTroops = () => {
      // we want to avoid sendint the paladin in scavange
      // we want to avoid sending CL in scavange
      const unitsToAvoid = JSON.parse(localStorage.getItem("unitsToAvoid")) || ["spear"];
      let responseTroops = [];
      const troops = document.getElementsByClassName("units-entry-all");

      for (const troop of troops) {
        var unitType = troop.getAttribute("data-unit");

        if (unitsToAvoid.includes(unitType)) {
          responseTroops.push({
            unit: troop.getAttribute("data-unit"),
            quantity: parseInt(
              troop.innerHTML.replace("(", "").replace(")", "")
            ),
          });
        }
      }
      return responseTroops;
    };

    const calculateScavangeTroops = (scavangeWeight, troops) => {
      const totalWeight = getScavangeWeight();

      const result = [];
      for (const troop of troops) {
          console.log('Total:', troop.quantity)
        if(troop.quantity > maxtrop){
           const troopsToSend = Math.floor(
          (maxtrop * scavangeWeight) / totalWeight
        );
        result.push({
          unit: troop.unit,
          quantityToSend: troopsToSend,
        });
          }else{
          const troopsToSend = Math.floor(
          (troop.quantity * scavangeWeight) / totalWeight
        );
        result.push({
          unit: troop.unit,
          quantityToSend: troopsToSend,
        });
          }
      }

      return result;
    };

    const sendScavange = (weight, troops, element) => {
      const troopsToSend = calculateScavangeTroops(weight, troops);
      for (const troopToSend of troopsToSend) {
        if (troopToSend.quantityToSend) {
          var inputs = $(`[name=${troopToSend.unit}]`);
          inputs.val(troopToSend.quantityToSend.toString()).change();
        }
      }

      element.click();
    };

    this.init = () => {
      const troops = getAvailableTroops();
      const availableScavanges = getAvailableScavanges();

      const scavangesUnlocked = scavangesWeight.length - getBlockedScavanges();

      // only run scavange if all unlocked are available
      // to prevent from sending wrong number of troops
      if (availableScavanges.length >= scavangesUnlocked) {
        for (let index = 0; index < availableScavanges.length; index++) {
          const weight = scavangesWeight[index];
          const element = availableScavanges[index];

          const delayTime = 3000 + 3000 * index;
          setTimeout(() => sendScavange(weight, troops, element), delayTime);
        }
      }
    };
  };
  $(document).ready(() => {
    // wait 1 sec after page load to start script
    setTimeout(() => {
      Scavange.init();
    }, 1000);
  });
    function verificarRecursos() {
    const header = document.querySelector("h2.popup_box_header");
    // Obtém os valores disponíveis na aldeia
    var qtdFerroAldeia = parseInt($("#iron").text());
    var qtdArgilaAldeia = parseInt($("#stone").text());
    var qtdMadeiraAldeia = parseInt($("#wood").text());
    let custoMadeira;
    let custoArgila;
    let custoFerro;
if (header && header.innerText === "Desbloquear Pequena Coleta") {
     custoMadeira = 25;
     custoArgila = 30;
     custoFerro = 25;
}else if (header && header.innerText === "Desbloquear Média Coleta") {
     custoMadeira = 250;
     custoArgila = 300;
     custoFerro = 250;
}else if (header && header.innerText === "Desbloquear Grande Coleta") {
     custoMadeira = 1000;
     custoArgila = 1200;
     custoFerro = 1000;
}else if (header && header.innerText === "Desbloquear Extrema Coleta") {
     custoMadeira = 10000;
     custoArgila = 12000;
     custoFerro = 10000;
}
    // Compara os recursos disponíveis com os necessários
    let madeiraSuficiente = qtdMadeiraAldeia >= custoMadeira;
    let argilaSuficiente = qtdArgilaAldeia >= custoArgila;
    let ferroSuficiente = qtdFerroAldeia >= custoFerro;
    return madeiraSuficiente && argilaSuficiente && ferroSuficiente;
}
    function clicarBotaoDesbloquear() {
    let unlocks = localStorage.getItem('unlocks');
    let botao = document.querySelector('.btn.btn-default.unlock-button');
    if (unlocks === 'S') {
    if (botao) {
        botao.click();
        console.log('Botão "Desbloquear" clicado.');
       setTimeout(function(){ if (verificarRecursos()) {
    console.log("Recursos suficientes para a construção!");
    const desbloquearBotao = document.getElementsByClassName("btn btn-default");
           desbloquearBotao[desbloquearBotao.length - 1].click();
             }else {console.log("Recursos insuficientes.");
                      const closepop = document.querySelector("a.popup_box_close"); closepop.click();
                               }},2000);
    } else {
        console.log('Botão "Desbloquear" não encontrado.');
    }}
}
      setTimeout(clicarBotaoDesbloquear, 2000);
    }
function atualizarR() {
        // Obtém a hora atual
        var agora = new Date();

        // Verifica se é hora de recarregar a página
        if (agora >= proximoCarregamentoRc) {
            localStorage.removeItem('proximoCarregamentoMcoletau');
            // Recarrega a página
            location.reload();
        } else {
            // Calcula o tempo restante até o próximo carregamento
            var tempoRestante = proximoCarregamentoRc - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = "Próxima atualização em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conteúdo do elemento com o tempo restante formatado
            infopux.textContent = tempoRestanteFormatado;

            // Chama a função novamente após 1 segundo
            setTimeout(atualizarR, 1000);
        }
    }
    // Chama a função pela primeira vez
    atualizarR();
}
// Chama a função para iniciar o contador regressivo
atualizarTempoRestante();
    var v3 = 2;
    var valor3 = localStorage.getItem('check' + v3);
    var estado3 = valor3 === 'true';
    if(estado3){ var conf3 = 'ok'}
    if(conf3 === 'ok'){
function redirecionar(){
    var temp_Coleta = parseInt(localStorage.getItem('Coleta'));
             var rotacion = document.getElementById('Inforot');
    // Verifica se já existe uma próxima hora de carregamento no localStorage
    var proximaRotacao = localStorage.getItem('proximoCarregamentoRot2');
    if (proximaRotacao) {
        proximaRotacao = new Date(proximaRotacao);
    } else {
        // Define a pr xima hora de carregamento para 2 horas ap s a execu  o
        proximaRotacao = new Date();
        proximaRotacao.setMinutes(proximaRotacao.getMinutes() + temp_Coleta);
        // Salva a pr xima hora de carregamento no localStorage
        localStorage.setItem('proximoCarregamentoRot2', proximaRotacao);
    }
function atualizares() {
        // Obt m a hora atual
        var agora = new Date();
        // Verifica se   hora de recarregar a p gina
        if (agora >= proximaRotacao) {
         localStorage.removeItem('proximoCarregamentoRot2');
            var redirecionamentos = [
    { screen: "main", delay: 13000 },
    { screen: "am_farm", delay: 15000 },
    { screen: "place&mode=scavenge", delay: 5 * 60 * 1000 },
    { screen: "place&mode=scavenge_mass", delay: 1000 },
    { screen: "market&mode=call", delay: 3000 },
    { screen: "market&mode=traders", delay: 5000 },
    { screen: "statue&mode=overview", delay: 7000 },
    { screen: "snob&mode=coin", delay: 9000 },
    { screen: "train", delay: 11000 }
];
redirecionamentos.forEach((item, index) => {
    let valorSalvo = localStorage.getItem('check' + index);
    if (valorSalvo === 'true') {
        setTimeout(() => {
            UI.InfoMessage('Redirecting...');
            window.location.href = game_data.link_base_pure + '&screen=' + item.screen;
        }, item.delay);
    }
});
        } else {
            // Calcula o tempo restante at  o pr ximo carregamento
            var tempoRestante = proximaRotacao - agora;
            var horas = Math.floor(tempoRestante / 3600000); // 1 hora = 3600000 milissegundos
            var minutos = Math.floor((tempoRestante % 3600000) / 60000); // 1 minuto = 60000 milissegundos
            var segundos = Math.floor((tempoRestante % 60000) / 1000); // 1 segundo = 1000 milissegundos

            // Formata a string com o tempo restante
            var tempoRestanteFormatado = " || Rotacionando em: " + horas + " horas, " + minutos + " minutos e " + segundos + " segundos";

            // Atualiza o conte do do elemento com o tempo restante formatado
            rotacion.textContent = tempoRestanteFormatado;

            // Chama a fun  o novamente ap s 1 segundo
            setTimeout(atualizares, 1000);
        }
}
    // Chama a fun  o pela primeira vez
    atualizares();}
    redirecionar();}
let url = window.location.href;
    let subdominio = new URL(url).hostname.split('.')[0];
    let novoTitulo = subdominio + " - Coleta";
    document.title = novoTitulo;
    }
//==================================map info======================================================================================================
if(window.location.href.includes('screen=map')){
    let savedModels = JSON.parse(localStorage.getItem('savedModels')) || [];
    if (savedModels.length > 0) {
     let serverData = [];
  savedModels.forEach((model) => {
          let CFrom = model.CFrom; let CTo = model.CTo;
      serverData.push([CFrom],[CTo]);
});
        let mapOverlay = TWMap;
        if (!mapOverlay.mapHandler._spawnSector) {
            mapOverlay.mapHandler._spawnSector = mapOverlay.mapHandler.spawnSector;
        }

        function drawMapTowers(canvas, sector) {
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
         serverData.forEach(([village]) => {

        const [villageX, villageY] = village.split('|').map(Number); // Extrai as coordenadas do vilarejo
        const wt_pixel = mapOverlay.map.pixelByCoord(villageX, villageY);
        const st_pixel = mapOverlay.map.pixelByCoord(sector.x, sector.y);

        const x = (wt_pixel[0] - st_pixel[0]) + mapOverlay.tileSize[0] / 2;
        const y = (wt_pixel[1] - st_pixel[1]) + mapOverlay.tileSize[1] / 2;

        // Desenha o quadrado
        drawSquare(ctx, x, y, 0.17 * TWMap.map.scale[0] * 5, 'rgba(100, 0, 255, 0.3)');

        // Adiciona os ícones e números
        drawIconsAndNumbers(ctx,x,y,['Icon1', 'Icon2', 'Icon3'], [5, 10, 15], [
        { backgroundColor: 'rgb(255, 0, 0)', backgroundImage: '/graphic/unit_map/axe.png' },
        { backgroundColor: 'rgb(0, 255, 0)', backgroundImage: '/graphic/unit_map/spear.png' },
        { backgroundColor: 'rgb(0, 254, 254)', backgroundImage: '/graphic/unit_map/snob.png' }
    ]
);
    });
}
        function drawSquare(ctx, x, y, size, fillColor, strokeColor) {
    const halfSize = size / 2; // Metade do tamanho do quadrado para centralizar

    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.rect(x - halfSize, y - halfSize, size, size); // Desenha o quadrado
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
        function drawIconsAndNumbers(ctx, x, y, icons, numbers, styles) {
    const iconSpacing = 20; // Espaçamento horizontal entre os ícones
    const iconSize = 15; // Tamanho dos ícones
    const textSize = 10; // Tamanho do texto do número abaixo

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    icons.forEach((icon, index) => {
        const iconX = x - (icons.length - 1) * iconSpacing / 2 + index * iconSpacing;
        const iconY = y + 20; // Ajuste vertical para ícones
        const style = styles[index];

        // Cor de fundo
        if (style.backgroundColor) {
            ctx.fillStyle = style.backgroundColor;
            ctx.fillRect(iconX - iconSize / 2, iconY - iconSize / 2, iconSize, iconSize);
        }

        // Imagem de fundo
        if (style.backgroundImage) {
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, iconX - iconSize / 2, iconY - iconSize / 2, iconSize, iconSize);
            };
            img.src = style.backgroundImage;
        }

        // Desenha o número abaixo do ícone
        ctx.font = `${textSize}px Arial`;
        ctx.fillStyle = '#FFFFFF'; // Cor do texto
        ctx.fillText(numbers[index], iconX, iconY + iconSize);
    });
}

        mapOverlay.mapHandler.spawnSector = function (data, sector) {
            mapOverlay.mapHandler._spawnSector(data, sector);

            const beginX = sector.x - data.x;
            const endX = beginX + mapOverlay.mapSubSectorSize;
            const beginY = sector.y - data.y;
            const endY = beginY + mapOverlay.mapSubSectorSize;

            Object.keys(data.tiles).forEach((x) => {
                x = parseInt(x, 10);
                if (x < beginX || x >= endX) return;

                Object.keys(data.tiles[x]).forEach((y) => {
                    y = parseInt(y, 10);
                    if (y < beginY || y >= endY) return;

                    const v = mapOverlay.villages[(data.x + x) * 1000 + (data.y + y)];
                    if (v) {
                        let el = document.getElementById(`mapOverlay_canvas_${sector.x}_${sector.y}`);
                        if (!el) {
                            const canvas = document.createElement('canvas');
                            canvas.style.position = 'absolute';
                            canvas.width = mapOverlay.map.scale[0] * mapOverlay.map.sectorSize;
                            canvas.height = mapOverlay.map.scale[1] * mapOverlay.map.sectorSize;
                            canvas.style.zIndex = 10;
                            canvas.className = 'mapOverlay_map_canvas';
                            canvas.id = `mapOverlay_canvas_${sector.x}_${sector.y}`;

                            sector.appendElement(canvas, 0, 0);
                            drawMapTowers(canvas, sector);
                        }
                    }
                });
            });
        };
        mapOverlay.reload();
    }
/*function map(){
    var mapOverlay = TWMap;
    if (mapOverlay.mapHandler._spawnSector) {
        //exists already, don't recreate
    }
    else {
        //doesn't exist yet
        mapOverlay.mapHandler._spawnSector = mapOverlay.mapHandler.spawnSector;
    }
    let serverData = [["663|558"],["665|558"],];
function drawMapTowers(canvas, sector) {
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
    serverData.forEach(([village]) => {

        const [villageX, villageY] = village.split('|').map(Number); // Extrai as coordenadas do vilarejo
        const wt_pixel = mapOverlay.map.pixelByCoord(villageX, villageY);
        const st_pixel = mapOverlay.map.pixelByCoord(sector.x, sector.y);

        const x = (wt_pixel[0] - st_pixel[0]) + mapOverlay.tileSize[0] / 2;
        const y = (wt_pixel[1] - st_pixel[1]) + mapOverlay.tileSize[1] / 2;

        // Desenha o quadrado
        drawSquare(ctx, x, y, 0.17 * TWMap.map.scale[0] * 5, 'rgba(0, 100, 255, 0.3)');

        // Adiciona os ícones e números
        drawIconsAndNumbers(ctx,x,y,['Icon1', 'Icon2', 'Icon3'], [5, 10, 15], [
        { backgroundColor: 'rgb(255, 0, 0)', backgroundImage: '/graphic/unit_map/axe.png' },
        { backgroundColor: 'rgb(0, 255, 0)', backgroundImage: '/graphic/unit_map/spear.png' },
        { backgroundColor: 'rgb(0, 254, 254)', backgroundImage: '/graphic/unit_map/snob.png' }
    ]
);
    });
}
function drawSquare(ctx, x, y, size, fillColor, strokeColor) {
    const halfSize = size / 2; // Metade do tamanho do quadrado para centralizar

    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.rect(x - halfSize, y - halfSize, size, size); // Desenha o quadrado
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
function drawIconsAndNumbers(ctx, x, y, icons, numbers, styles) {
    const iconSpacing = 20; // Espaçamento horizontal entre os ícones
    const iconSize = 15; // Tamanho dos ícones
    const textSize = 10; // Tamanho do texto do número abaixo

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    icons.forEach((icon, index) => {
        const iconX = x - (icons.length - 1) * iconSpacing / 2 + index * iconSpacing;
        const iconY = y + 20; // Ajuste vertical para ícones
        const style = styles[index];

        // Cor de fundo
        if (style.backgroundColor) {
            ctx.fillStyle = style.backgroundColor;
            ctx.fillRect(iconX - iconSize / 2, iconY - iconSize / 2, iconSize, iconSize);
        }

        // Imagem de fundo
        if (style.backgroundImage) {
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, iconX - iconSize / 2, iconY - iconSize / 2, iconSize, iconSize);
            };
            img.src = style.backgroundImage;
        }

        // Desenha o número abaixo do ícone
        ctx.font = `${textSize}px Arial`;
        ctx.fillStyle = '#FFFFFF'; // Cor do texto
        ctx.fillText(numbers[index], iconX, iconY + iconSize);
    });
}

    mapOverlay.mapHandler.spawnSector = function (data, sector) {
     mapOverlay.mapHandler._spawnSector(data, sector);

        // Main map canvas
        var beginX = sector.x - data.x;
        var endX = beginX + mapOverlay.mapSubSectorSize;
        var beginY = sector.y - data.y;
        var endY = beginY + mapOverlay.mapSubSectorSize;
        for (let x in data.tiles) {
             x = parseInt(x, 10);
            if (x < beginX || x >= endX) {
                continue;
            }
            for (let y in data.tiles[x]) {
                 y = parseInt(y, 10);
                if (y < beginY || y >= endY) {
                    continue;
                }
                var v = mapOverlay.villages[(data.x + x) * 1000 + (data.y + y)];
                if (v) {
                    var el = $('#mapOverlay_canvas_' + sector.x + '_' + sector.y);
                    if (!el.length) {
                        var canvas = document.createElement('canvas');
                        canvas.style.position = 'absolute';
                        canvas.width = (mapOverlay.map.scale[0] * mapOverlay.map.sectorSize);
                        canvas.height = (mapOverlay.map.scale[1] * mapOverlay.map.sectorSize);
                        canvas.style.zIndex = 10;
                        canvas.className = 'mapOverlay_map_canvas';
                        canvas.id = 'mapOverlay_canvas_' + sector.x + '_' + sector.y;

                        sector.appendElement(canvas, 0, 0);
                        drawMapTowers(canvas, sector);
                    }
                }
            }
        }
    }
mapOverlay.reload();
}map();*/
}
//==================================================== Script audio ==============================================================================
 var audioElement = document.getElementById("audioElement");
if(audioElement){
    var tocaSom = document.getElementById("tocaSom");
for (var j = 0; j < 9; j++) {
    audioElement.volume = Math.max(0, audioElement.volume - 0.1); }
    tocaSom.onclick = function () {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }}
}

})();
