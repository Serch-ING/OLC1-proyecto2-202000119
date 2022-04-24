void funcionesEspecialesYNativas(){
    int a = 15;
    writeline("------------------TOLOWER-------------------");
    writeline("SIN TOLOWER");
    writeline(toLower("CON TOLOWER"));
    writeline("------------------TOUPPER-------------------");
    writeline("sin toupper");
    writeline(toUpper("con toupper"));
    writeline("------------------TRUNCATE------------------");
    double b=17.8;
    writeline("sin truncate: "+b);
    b=truncate(b);
    writeline("con truncate "+b);
    writeline("------------------ROUND-------------------");
    double c=26.5;
    writeline("sin round: "+c);
    c=round(c);
    writeline("con round "+c);
    double cc=26.4;
    writeline("sin round: "+cc);
    cc=round(cc);
    writeline("con round "+cc);
    writeline("-----------------TYPEOF--------------------");
    string x="soy una cadena";
    int y = 50;
    double z = 78.5;
    char xx = 'a';
    boolean yy = true;
    writeline("tipo: "+typeof(x));
    writeline("tipo: "+typeof(y));
    writeline("tipo: "+typeof(z));
    writeline("tipo: "+typeof(xx));
    writeline("tipo: "+typeof(yy));
    writeline("------------------LENGTH-------------------");
    string cadena="soy una cadena";
    writeline("tamaño: "+length(cadena));
    writeline("------------------TOSTRING-------------------");
    int numero=105;
    writeline("tipo: "+typeof(numero));
    writeline("tipo: "+typeof(toString(numero)));
    writeline("----------------TOCHARARRAY------------------");
    dynamiclist<char> listaChar = toCharArray("SOY UNA LISTA");
    writeline("########imprimiendo lista de caracteres#######");
    imprimirListaChar(listaChar);
}

start with funcionesEspecialesYNativas();

void imprimirListaChar(dynamiclist<char> miLista){
    for (int i = 0; i < length(miLista); i++) {
        writeLine("listaChar[[" + i + "]] = " + getValue(miLista,i));
    }
}

/*
--------------------SALIDA ESPERADA-----------------
------------------TOLOWER-------------------
SIN TOLOWER
con tolower
------------------TOUPPER-------------------
sin toupper
CON TOUPPER
------------------TRUNCATE------------------
sin truncate: 17.8
con truncate 17
------------------ROUND-------------------
sin round: 26.5
con round 27
sin round: 26.4
con round 26
-----------------TYPEOF--------------------
tipo: STRING
tipo: INT
tipo: DOUBLE
tipo: CHAR
tipo: BOOLEAN
------------------LENGTH-------------------
tamaño: 14
------------------TOSTRING-------------------
tipo: INT
tipo: STRING
----------------TOCHARARRAY------------------
########imprimiendo lista de caracteres#######
listaChar[[0]] = S
listaChar[[1]] = O
listaChar[[2]] = Y
listaChar[[3]] =  
listaChar[[4]] = U
listaChar[[5]] = N
listaChar[[6]] = A
listaChar[[7]] =  
listaChar[[8]] = L
listaChar[[9]] = I
listaChar[[10]] = S
listaChar[[11]] = T
listaChar[[12]] = A
*/