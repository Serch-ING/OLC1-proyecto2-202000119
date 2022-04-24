void Principal(){
    WriteLine("-----------Factorial Iterativo---------");
    WriteLine("8! = " + factorialIterativo(8));
    WriteLine("-----------Factorial Recursivo---------");
    WriteLine("8! = " + factorialRecursivo(8));
}

int factorialIterativo(int n){
    int resultado = 1;
    for (int i = 1; i <= n; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

int factorialRecursivo(int n) {
    if (n == 0) {
        return 1;
    }
    return (n * factorialRecursivo(n - 1));
}

start With Principal();

/*
--------------------SALIDA ESPERADA-----------------
-----------Factorial Iterativo---------
8! = 40320
-----------Factorial Recursivo---------
8! = 40320
*/