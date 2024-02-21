var opciones = 1

var intentos = 0

do{
    intentos++
    opciones=Number(
    prompt("Seleccione la opcion deseada\n1. Calcular salario\n2. Numeros desde n hasta m\n3. Calculadora basica\n4. Documentacion\n5. Tabla de multiplicar\n6. Area y perimetro\n7. Salir"));
    if(opciones == 1){
        //Calcular salario
        function salario(){
            var valorHora=Number(prompt("Ingrese el valor de la hora de trabajo"))
            var cantidadHoras=Number(prompt("Ingrese la cantidad de horas que trabajó"))
            var totalSalario=Number(valorHora*cantidadHoras)
            alert("Su salario es de: "+totalSalario)
        }salario()
    }else if(opciones == 2){
        //Numeros de n hasta m
        function pares() {
            var n=Number(prompt("Ingrese el valor de n: ")) 
            var m=Number(prompt("Ingrese el valor de m: ")) 
            var numerosPares = "Numeros pares entre " + n + " y " + m + ":\n" 
            for (let i = n; i <= m; i++) {
            if (i % 2 === 0) {
            numerosPares += i + "\n"
        }
    }   
    alert(numerosPares)
    }pares()
    }else if(opciones == 3){
        //Calculadora basica
        do{
            var opcionEcuacion = Number(prompt("Digite la operacion que desea hacer: \n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir"))
            if(opcionEcuacion==1){
                //Suma
                function suma(){
                    var numeroUno=Number(prompt("Ingrese el valor del primer numero"))
                    var numeroDos=Number(prompt("Ingrese el valor del segundo numero"))
                    var totalEcuacion=Number=numeroUno+numeroDos
                alert("El total de su suma es de: "+totalEcuacion)
                }suma()
            }else if(opcionEcuacion==2){
                //Resta
                function resta(){
                    var numeroUno=Number(prompt("Ingrese el valor del primer numero"))
                    var numeroDos=Number(prompt("Ingrese el valor del segundo numero"))
                    var totalEcuacion=Number=numeroUno-numeroDos
                alert("El total de su resta es de: "+totalEcuacion)
                }resta()
            }else if(opcionEcuacion==3){
                //Multiplicación
                function Multiplicación(){
                    var numeroUno=Number(prompt("Ingrese el valor del primer numero"))
                    var numeroDos=Number(prompt("Ingrese el valor del segundo numero"))
                    var totalEcuacion=Number=numeroUno*numeroDos
                alert("El total de su multiplicación es de: "+totalEcuacion)
                }Multiplicación()
            }else if(opcionEcuacion==4){
                //División
                function División(){
                    var numeroUno=Number(prompt("Ingrese el valor del primer numero"))
                    var numeroDos=Number(prompt("Ingrese el valor del segundo numero"))
                    var totalEcuacion=Number=numeroUno/numeroDos
                alert("El total de su división es de: "+totalEcuacion)
                }División()
            }else if(opcionEcuacion==5){
                //Salir
                alert("Saliendo...")
                break;
            }else{
                alert("Digite una opcion valida")
            }
        }while(opcionEcuacion!=5)
    }else if(opciones == 4){
        //Documentacion
        function Nombre(){
            return prompt("introduzca su nombre")
        }
        function Apellido(){
            return prompt("introduzca su apellido")
        }
        function Edad(){
            return Number(prompt("introduzca su edad"))
        }
        function Cargo(){
            return prompt("introduzca su cargo")
        }
        function identidicacion(){
            const nombre = Nombre();
            const apellido = Apellido();
            const edad = Edad();
            const cargo = Cargo();
            alert("Su nombre y apellido es: "+ nombre +" "+ apellido + ", usted tiene una edad de " + edad+ " y su cargo es " + cargo)   
        } identidicacion()
    }else if(opciones == 5){
        //Tabla de multiplicar
        function tablaMultiplicar() {
            let numeroMultiplicar = Number(prompt("Ingrese un número para ver su tabla de multiplicar"));
            let tabla = "Tabla de multiplicar del " + numeroMultiplicar + ":\n";
            for (let i = 0; i <= 10; i++) {
              let totalCalculo = numeroMultiplicar * i;
              tabla += numeroMultiplicar + " x " + i + " = " + totalCalculo + "\n";
            }
            alert(tabla);
          }
          tablaMultiplicar();    
    }else if(opciones == 6){
        //Area y perimetro
        do{    
            var figura= Number (prompt("De que figura geometrica desea calcular area, perimetro o area y perimetro\n1. Cuadrado\n2. Triangulo equilatero\n3. Rectangulo\n4. Salir"))
            if(figura==1){
                function Cuadrado(){
                let lado=Number(prompt("Digite la longitud de uno de los lados del cuadrado")) 
                let perimetro=lado+lado+lado+lado
                let area= lado*lado
                alert("El area del cuadrado es de " +area+" y su perimetro de " +perimetro)
                }Cuadrado()
            }else if(figura==2){
                function Triangulo(){
                let lado=Number(prompt("Digite uno de los lados del triangulo equilatero")) 
                let altura=Number(prompt("Digite la altura del triangulo"))
                let area= (lado*altura)/2
                let perimetro=lado+lado+lado  
                alert("El area del triangulo equilatero es de "+area+" y su perimetro es de "+perimetro)
                }Triangulo()
            }else if(figura==3){
                function Rectangulo(){
                let base=Number(prompt("Digite la base del rectangulo")) 
                let altura=Number(prompt("Digite la altura del rectangulo"))
                let area= base*altura
                let perimetro=2*(base+altura)
                alert("El area del rectangulo es de "+area+" y su perimetro es de " +perimetro)
                }Rectangulo()
            }else if(figura==4){
                alert("Adios.")
                break;
            }else{
                alert("Digite una opcioón valida")
            }
        } while(figura!= 4) ;
    }else if(opciones == 7){
        //Salir
        alert("Adios.")
        break;
    }else{
        alert("Digite una opcion valida")
    }
}while(opciones != 7)
alert ("la cantidad de intentos fue de: "+intentos)
