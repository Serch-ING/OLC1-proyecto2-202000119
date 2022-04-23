import { Type } from "./type";

//Esta clase tiene la informacion de la variable
export class Symbol {
  constructor(public value: any, public id: string, public type: Type) {}
}