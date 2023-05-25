//! .......... CHALLENGE 21 ..........

// Realizar un programa que dada la vida de un personaje, realice una acción:
// [a]- Si la vida entá entre 0 y 20 que el personaje huya (escribir).
// [b]- Si la vida entá entre 21 y 50 que el personaje se ponga en modo defensivo.
//[c]- Si la vida entá entre 51 y 80 que el personaje se ponga en modo moderado.
//[d]- Si la vida entá entre 81 y 100 que el personaje se ponga en modo ofensivo.

//* Resolverlo sin conectores lógicos.

let vida = prompt("Ingresar cantidad de vida del personaje: ");

if(vida >= 0){
    if(vida <= 20){
    console.log("El personaje huye!!!");
    }
    if(vida >=21){
        if(vida <= 50){
        console.log("El personaje se pone en modo defensivo!!!");
        }
        if(vida >= 51){
            if(vida <= 80){
                console.log("El personaje se pone en modo moderado!!!");
            }
            if(vida >= 81){
                if(vida <= 100){
                    console.log("El personaje se pone en modo ofensivo!!!");
                }
                if(vida < 0){
                    if(vida > 100)
                    console.log("¡¡¡El valor ingresado no es válido!!!")
                }
            }
        }
    }
}



//* Resolverlo con conectores lógicos (contemplar que tanto valores menores a cero y mayores a cien no pueden ser válidos)

if(vida >= 0 && vida <= 20){
    console.log("El personaje huye!!!");
    }else if(vida >=21 && vida <= 50){
        console.log("El personaje se pone en modo defensivo!!!");
        }else if(vida >= 51 && vida <= 80){
                console.log("El personaje se pone en modo moderado!!!");
            } else if(vida >= 81 && vida <= 100){
                    console.log("El personaje se pone en modo ofensivo!!!");
                }else if(vida < 0 && vida > 100){
                    console.log("¡¡¡El valor ingresado no es válido!!!")
                }else{
                    console.log("¡¡¡El valor ingresado no es válido!!!");
                }