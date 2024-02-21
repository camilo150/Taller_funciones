// camilo castrillon y miguel higuita
var opciones = 1;

do {

    opciones = Number(
        prompt("seleccione la opcion que desea con su numero\n1.calcular salario\n2.numeros desde n hasta m\n3.calculadora basica\n4.documentacion\n5.tabla de multiplicar\n6.area y perimetro"));

    if (opciones == 1) {
        function salario() {
            let valorHora = Number(prompt("ingrese el valor de la hora de trabajo"))
            let horasTrabajo = Number(prompt("ingrese la cantidad de horas trabajadas"))
            let totalPlata = Number(valorHora * horasTrabajo);
            alert("la cantidad de dinero por sus horas de tabajo es de " + totalPlata);
        }salario();

    } else if (opciones == 2) {
        function pares() {
                var n=Number(prompt("Ingrese el valor de n: ")) 
                var m=Number(prompt("Ingrese el valor de m: "))  
                for (let i = n; i <= m; i++) {
                if (i % 2 === 0) {
                console.log("Números pares entre " + n + " y " + m + ":"+i); 
            }}   
        }pares()

    } else if (opciones == 3) {
        do{
            var opcionEcuacion=Number(prompt("indique que operacion quieres hacer:\n1.suma\n2.resta\n3.multiplicación\n4.divicion\n5.salir"))

            if (opcionEcuacion==1){
                    function suma(){
                    var numero1=Number(prompt("numero 1"))
                    var numero2=Number(prompt("numero 2"))
                    var total=numero1+numero2
                    alert ("la suma de "+numero1+" y "+numero2+" es "+total)
                }suma()
            

            } else if (opcionEcuacion==2){
                function resta(){
                    var numero1=Number(prompt("numero 1"))
                    var numero2=Number(prompt("numero 2"))
                    var total=numero1-numero2
                    alert ("la resta de "+numero1+" y "+numero2+" es "+total)
                } resta()

            } else if (opcionEcuacion==3){
                    function multiplicacion(){
                    var numero1=Number(prompt("numero 1"))
                    var numero2=Number(prompt("numero 2"))
                    var total=numero1*numero2
                    alert ("la multiplicacion de "+numero1+" y "+numero2+" es "+total)
                }multiplicacion()

            } else if (opcionEcuacion==4){
                function divicion(){
                    var numero1=Number(prompt("numero 1"))
                    var numero2=Number(prompt("numero 2"))
                    var total=numero1/numero2
                    alert ("la divición de "+numero1+" y "+numero2+" es "+total)
                }divicion()

            }else if (opcionEcuacion<1 || opcionEcuacion>5){

                alert("opcion invalida")
                break;
            }

        }while(opcionEcuacion!=5)
        break;

    } else if (opciones == 4) {
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
            alert("su nombre y apellido es "+ nombre + apellido + "usted tiene una edad de " + edad+ " y su cargo es " + cargo)
            
        } identidicacion()
        
    } else if (opciones == 5) {

        function tablaMultiplicar(){
            let numeroMultiplicar=Number (prompt("ingrese el numero al que desea saber la tabla de multiplicar"))
            for (let index = 0; index <= 10; index++) {
            let totalCalculo= numeroMultiplicar*index
            alert ("la tabla del numero"+numeroMultiplicar+"es "+numeroMultiplicar+"x"+index+"="+totalCalculo)}
        } tablaMultiplicar()

    } else if (opciones == 6) {
       do{    
            var figura= Number (prompt("de que figura geometrica desea calcualar area, perimetro o area y perimetro\n1.cuadrado\n2.triangulo equilatero\n3.rectangulo\n4.salir"))
            if(figura==1){
                function Cuadrado(){
                let lado=Number(prompt("digite uno de los lados del cuadrado")) 
                let perimetro=lado+lado+lado+lado
                let area= lado*lado
                alert("el area del cuadrado es de " +area+" y su perimetro de " +perimetro)
                } Cuadrado()

            }else if(figura==2){
                function Triangulo(){
                let lado=Number(prompt("digite uno de los lados del triangulo equilatero")) 
                let altura=Number(prompt("digite la altura del triangulo"))
                let area= (lado*altura)/2
                let perimetro=lado+lado+lado  
                alert("el area del triangulo equilatero es de "+area+" y su perimetro es de "+perimetro)
                }Triangulo()

            }else if (figura==3){
                function Rectangulo(){
                let base=Number(prompt("digite la base del rectangulo")) 
                let altura=Number(prompt("digite la altura del rectangulo"))
                let area= base*altura
                let perimetro=2*(base+altura)
                alert("el area del rectangulo es de "+area+" y su perimetro es de " +perimetro)
                }Rectangulo()
            }else {(figura<1 || figura>4)
                break;
            }
            
                
        } while(figura!= 4) ;
          alert("el proceso se terminará")
        
    } else if (opciones == 7) {
        alert("se terminará el programa")
        break 
    }
  
} while (opciones != 7);