import { Environment } from "../symbol/enviroment";

export abstract class Instruccion {
  constructor(public line: number, public column: number) {
    this.line = line;
    this.column = column;
  }

  public abstract execute(env: Environment): any;
}