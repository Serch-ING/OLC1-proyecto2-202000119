import { Symbol } from "./symbols";
import { Type } from "./type";

export class Environment {

  private tablaSimbolos: Map<string, Symbol>;
  constructor(public anterior: Environment | null) {
    this.tablaSimbolos = new Map();
  }

  public guardar_variable(nombre: string, valor: any, type: Type): boolean {
    this.tablaSimbolos.set(nombre, new Symbol(valor, nombre, type));
    return true;
  }

  //metodo traer variable
  //ingresar variable
}