function _1(md){return(
md`# prueba aventura viz Jhohan`
)}

function _2(md){return(
md`D3 como función global`
)}

function _d3(require){return(
require("d3@7")
)}

function _4(d3)
{
  window.d3 = d3
}


function _5(md){return(
md`Carga la tabla de google drive`
)}

function _path(){return(
"https://docs.google.com/spreadsheets/d/e/2PACX-1vRYlcmf4oLMQ_t7GavGIp1ou4o5jD2C8iYWZ6K77wnCokbQmotbS5vYxco_2f3sSai7niiZXkJU_SRg/pub?output=csv"
)}

function _7(md){return(
md`Fragmento para crear url de las imágenes con google drive`
)}

function _imgUrl(){return(
"https://lh3.googleusercontent.com/d/"
)}

function _9(md){return(
md`Carga datos como esting`
)}

function _csvString(path){return(
fetch(path).then((response) => response.text())
)}

function _11(md){return(
md`Carga datos y crea columnas requeridas por aventura`
)}

function _data(d3,csvString){return(
d3.csvParse(csvString, d3.autoType)
)}

function _13(md){return(
md`Visualiza en una tabla`
)}

function _tabla(Inputs,data){return(
Inputs.table(data)
)}

function _15(htl){return(
htl.html`<div id="contenedor-panel"></div>`
)}

function _16(htl){return(
htl.html`Importa la librearía Aventura`
)}

async function _Aventura(FileAttachment){return(
(await import(await FileAttachment("aventura-2.js").url())).default
)}

function _18(md){return(
md`Crea una instancia de Aventura`
)}

function _aventura(Aventura){return(
new Aventura("es", {

      adventureSlide: true,
      typewriterSpeed: 0,
      evalTags: true,
      vizImageSize: 70,
      urlWord: "Repositorio",
      vizWidth: 1000,
      vizHeight: 1000,
  contenedorAventura: "contenedor-panel"
})
)}

function _20(md){return(
md`Crea las escenas`
)}

function _escenas(){return(
{

  "inicio": {
    "titulo": "Comparar",
    "texto": "Eso es",
    "viz": {"filter":[[]], "type": "pack", "x": "LUGAR", "y": "modalidad_violencia"},
  }
}
)}

function _22(md){return(
md`Fija las escenas con los datos cargados`
)}

async function _23(aventura,escenas,data){return(
await aventura.fijarDatosEscenas(escenas, data)
)}

function _24(md){return(
md`Inicia aventura`
)}

function _25(aventura){return(
aventura.iniciarAventura("inicio")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["aventura-2.js", {url: new URL("./files/5f74a05a8443df6756187ac642cc3b8f69b8eb15a64c5bac762dc941c30331158023009e69d6cec234759db26c707150ef01ea39c412d4e0ec108b0fcceb5fa1.js", import.meta.url), mimeType: "application/javascript", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer()).define(["d3"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer("path")).define("path", _path);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer("imgUrl")).define("imgUrl", _imgUrl);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer("csvString")).define("csvString", ["path"], _csvString);
  main.variable(observer()).define(["md"], _11);
  main.variable(observer("data")).define("data", ["d3","csvString"], _data);
  main.variable(observer()).define(["md"], _13);
  main.variable(observer("tabla")).define("tabla", ["Inputs","data"], _tabla);
  main.variable(observer()).define(["htl"], _15);
  main.variable(observer()).define(["htl"], _16);
  main.variable(observer("Aventura")).define("Aventura", ["FileAttachment"], _Aventura);
  main.variable(observer()).define(["md"], _18);
  main.variable(observer("aventura")).define("aventura", ["Aventura"], _aventura);
  main.variable(observer()).define(["md"], _20);
  main.variable(observer("escenas")).define("escenas", _escenas);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer()).define(["aventura","escenas","data"], _23);
  main.variable(observer()).define(["md"], _24);
  main.variable(observer()).define(["aventura"], _25);
  return main;
}
