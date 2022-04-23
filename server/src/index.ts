import { Environment } from "./symbol/enviroment";

const parser = require("./grammar/grammar");
const fs = require("fs");

try {
  console.log("funcionando al 100");
  const entrada = fs.readFileSync("src/entrada.txt");
  const ast = parser.parse(entrada.toString());
  const env = new Environment(null);

  //recorrer las instrucciones y ejecutarlas
  for (const instruccion of ast) {
    try {
      //console.log(RegresarInfo)
      //instruccion.execute(env);
    } catch (error) {
      console.log(error);
    }
  }
} catch (error) {
  console.log(error);
}