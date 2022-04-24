import { Environment } from "./symbol/enviroment";
const axios = require('axios');

const parser = require("./grammar/grammar");
const fs = require("fs");
var info: string;

try {
  const url: string = 'http://localhost:8080/getInfo';
  async function example() {  
    const response = await axios.get(url);
    //console.log(response.data.info);
    info = response.data.info;
    appstart();
  }
  
  
  function appstart(){
   
    console.log(info);
  
   // const entrada = fs.readFileSync("src/entrada.txt");
    const ast = parser.parse(info.toString());
  
    //const ast = parser.parse("s".toString());
    const env = new Environment(null);
  
    //recorrer las instrucciones y ejecutarlas
    for (const instruccion of ast) {
      try {
        instruccion.execute(env);
      } catch (error) {
        console.log(error);
      }
    }
  }
 
  example();
} catch (error) {
  console.log("////////ERROR/////////")
  console.log(error);
}
