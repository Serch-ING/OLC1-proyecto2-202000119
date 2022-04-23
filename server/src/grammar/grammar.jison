
%{
    const {Declaracion} = require('../instruccion/declaracion');
    const {Type} = require('../symbol/type');
    const {Arithmetic} = require('../expression/aritmeticas');
    const {ArithmeticOption} = require('../expression/aritmeticOption');
    const {Literal} = require('../expression/literal');
%}

%lex
%options case-insensitive
number  [0-9]+  
%%




\s+                   /* skip whitespace */
"//".*                              // comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] // comentario multiple líneas


{number}               return 'expreNUMBER' 
"var"                  return 'var'
"number"               return 'tnumber'

"+"                    return '+'
"-"                    return '-'
";"                    return ';'
":"                    return ':'
"="                    return '='

([a-zA-Z_])[a-zA-Z0-9_ñÑ]*	return 'id';

<<EOF>>		            return 'EOF'

.   { 
        console.log("error lexico")
    }

/lex

%left '+' '-'
%start Init

%%

Init    
    : Instructions EOF          {  return $1;  }
;

Instructions
    : Instructions Instruction  { $1.push($2); $$ = $1; }
    | Instruction               { $$ = [$1];            }
;

Instruction
    : DECLARACION                {  $$ = $1;  }
;

DECLARACION
    : 'var' 'id' ':' 'tnumber' '=' EXPRE ';'{ $$= new Declaracion($2,$4,$6, @1.first_line, @1.first_column)}
;

EXPRE
    : EXPRE '+' EXPRE {$$=new Arithmetic($1, $3,ArithmeticOption.MAS,   @1.first_line, @1.first_column)}
    | EXPRE '-' EXPRE {$$=new Arithmetic($1, $3,ArithmeticOption.MENOS, @1.first_line, @1.first_column)}
    | F               {$$= $1}
;


F
    : expreNUMBER {$$= new Literal($1,Type.NUMBER,  @1.first_line, @1.first_column)}
   
;