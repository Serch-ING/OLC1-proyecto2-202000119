import { Console } from "console";
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Environment } from "../symbol/enviroment";
import { Type } from "../symbol/type";

export class Declaracion extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
    public expresion:Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {
    env.guardar_variable(this.nombre, 1, this.tipo);
    console.log("acabo de guardar una variable en la tabla de simbolos");
    //console.log(env);
    let olc = this.expresion.execute(env);
    console.log(olc);
    if(olc.type == Type.NUMBER){
      env.guardar_variable(this.nombre,1,this.tipo)
    }else{
      console.error("error");
    }
  }
}