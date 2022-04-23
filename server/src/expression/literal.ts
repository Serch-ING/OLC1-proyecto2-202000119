import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/Retorno"
import { Type } from "../symbol/type"


export class Literal extends Expression {

    constructor(
        private value: any,
        private type: Type,
        line: number,
        column: number
    ) {
        super(line, column)
    }

    public execute(): Retorno {
        
        if (this.type == Type.NUMBER)
            return { value: Number(this.value), type: Type.NUMBER }
        else if (this.type == Type.STRING){
            this.value = (this.value).replaceAll("\"","")
            return { value: this.value, type: Type.STRING }
        }
        else if (this.type == Type.BOOLEAN) {
            if (this.value == "true") return { value: Boolean(true), type: Type.BOOLEAN }
            else return { value: Boolean(false), type: Type.BOOLEAN }
        }
        else return { value: this.value, type: Type.error }

    }
}