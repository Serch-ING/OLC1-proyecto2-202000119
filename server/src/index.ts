import { Console } from "console";
import { Environment } from "./symbol/enviroment";
const axios = require('axios');

const parser = require("./grammar/grammar");
const fs = require("fs");
var info: string = '';
const url: string = 'http://localhost:8080/getInfo';


// name is a member of myModule due to the export above


try {

  console.log('hola iniciando');
  console.log(name);
  example();
  
  async function example() {  
    console.log('HOLA TONTO');
    //var response = await axios.get(url);
    //info = response.data.info;
   // appstart();
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
 
  
} catch (error) {
  console.log("////////ERROR/////////")
  console.log(error);
}
