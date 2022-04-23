import { Instruccion } from "../abstract/instruccion";
import { Environment } from "../symbol/enviroment";
import { Type } from "../symbol/type";

export class Asignacion extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {

    console.log("acabo de guardar una variable en la tabla de simbolos");
    //console.log(env);
  }
}