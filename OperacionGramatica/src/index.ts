import Ast from '../src/Interprete/Ast/Ast';
import Nodo from '../src/Interprete/Ast/Nodo';
import Controlador from '../src/Interprete/Controlador';
import TablaSimbolos from '../src/Interprete/TablaSimbolos/TablaSimbolos';


var interprete = require('../src/Analizador/interprete').parser;
const fs = require("fs");

try {
 
  const entrada = fs.readFileSync("./entrada.txt");
  let ast : Ast = interprete.parse(entrada.toString());
  let nodo_ast : Nodo = ast.recorrer();
  let grafo = nodo_ast.GraficarSintactico();
  
} catch (error) {
  console.log(error);
}
