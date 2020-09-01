/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

/* 
function contar_caracteres(texto = ""){
        
        if(!texto){
            console.warn('no ingresaste nada');
        }else{
            console.info(`el texto "${texto}" tiene ${texto.length} caracteres`);
        }
}; 
let texto = 'hola mundo';
contar_caracteres(texto) */

//el codigo expresado en una arroyfunction
 /* const contarCaracters = (texto = "")=>
    (!texto)
    ?console.warn('no ingresaste nada')
    :console.info(`el texto "${texto}" tiene ${texto.length} caracteres`);

contarCaracters(texto)

 */

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

/* function cortar_caracteres (texto,caracter){
    return console.log(texto.substr(0,caracter));
}

cortar_caracteres("Hola Mundo",6);

const cortarCaracteres = (texto = "",longitud = undefined)=>
(!texto)?console.warn('no ingresaste un texto')
:console.log(`El texto "${texto}" cortado en ${longitud} caracters es igual a : ${texto.substr(0,longitud)}`);


cortarCaracteres("Hola Mundo",6)
cortarCaracteres("hola mundo")
 */



/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

/* function Array_texto(texto){
    
    return console.log(texto.split(' '));
}
Array_texto("fernando esta aprendiendo javascript")

const ArrayTexto=(texto = "",separador = undefined)=>(!texto)
?console.warn('no ingresaste en texto')
:(separador === undefined)
    ?console.warn('no definiste el punto de saparacion')
    :console.info(texto.split(separador));

ArrayTexto("fernando esta aprendiendo javascript",(' '))
ArrayTexto("hola mundo",); */





/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

/* function repetir_texto(texto,bis){
    return console.log(texto.repeat(bis))
}
repetir_texto("hola mundo", 5);

const repetirTexto = (texto = "",bis = undefined)=>(!texto)
?console.warn("no ingresaste un texto")
:(bis === undefined)
    ?console.warn('no definiste la cantidad de repeticiones')
    :console.log(texto.repeat(bis));

repetirTexto('fernando',4);
repetirTexto('',6);
repetirTexto('fernando');
 */
//correjido por el preofe

/* const repitiendoTexto = (texto = "",bis = undefined)=>{
    if(!texto) return console.warn("no ingresaste un texto");
    
    if(bis === undefined) return console.warn('no definiste la cantidad de repeticiones')

    if( bis === 0) return console.error('el numero de veces no puede ser 0');

    if(Math.sign(bis) === -1) return console.error ("El numero de veces no puede ser negativo");

    for (let i = 1; i<= bis; i++){
        console.info(`${texto} ${i}`);
    }    
}

repitiendoTexto(texto,5);
repitiendoTexto(texto);
repitiendoTexto("",5);
repitiendoTexto(texto,-5);
repitiendoTexto(texto,0); */

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */


/* const invertirTexto = (texto = "")=>{

    if (!texto) return console.warn('Olvidaste ingresar una cadena')
    else{
        return console.log(texto.split('').reverse().join('')) ;
    }
}   
const revertir = (texto)=>{
    let reverso = "";
    for (let i = texto.length - 1; i >= 0; i--){
    reverso += texto[i];}
        return console.log(reverso);
}
invertirTexto('Hola Mundo');


revertir('texto'); */




/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

/* const contarRepeticiones = (texto = "",buscador=undefined) => {
    
    if (!texto)return console.warn('No as ingresado ningun texto');

    if (!buscador) return console.warn('Te falta indicar que palabra quieres busacar');

    texto = texto.toLowerCase();
    buscador = buscador.toLowerCase();
    texto = texto.split(' ');

    
    let con = 0;
    for (let i = 0; i<= texto.length; i++){
        if (texto[i] === buscador) {
                con += 1 }
        }
    return console.log(`La palabra se repite ${con} veces en el texto`);
        
    }

contarRepeticiones( "BUSCAR quiero Buscar cuaBtas veces se repite la palaBra buScar mientra trato de buscar","buscar");

//codigo del profesor

*/
/* const buscarTextoEnCadena = (cadena = "",texto= "")=>{

let i = 0,
 contador = 0;

 while (i !== -1){

    i = cadena.indexOf(texto,i);
    if ( i !== -1){
        i++;
        contador++;
    }
 }
return console.info(`La palabra ${texto} se repite ${contador} veces`)
}

buscarTextoEnCadena('hola mundo adios mundo mundo','mundo');
 */
    


/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

/* 
const palidromo = (texto = "")=>{

    let invertida ="";

    if (!texto) return console.warn('Ingrese una palabra porfavor');

    invertida = texto.split('').reverse().join('');
    invertida = invertida.toLowerCase();
    texto = texto.toLowerCase();
    if (texto === invertida ){
        
        return console.log(`La palabra ${texto} es palidromo`);
    } else{
        return console.log(`La palabra ${texto} no es palindromo`);
        }
    
}
palidromo('SaLas'); */




/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

/* const remover = (texto= "",patron = undefined)=>{
    
    if (!texto) return console.log('Olvido poner el texto');
    
    if (!patron) return console.info('Coloque el patron a borrar porfavor');
    
    
    let texto2 = " ";
    
    let re = patron
    texto2 = texto.replace(re," ");
    
   return console.log(`El nuevo texto sin el patron ${patron} es : ${texto2}`);

    

}
remover("xyz1, xyz2, xyz3, xyz4 y xyz5", /xyz/gi); */


//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

/* const numeroAl501_600 = () =>{
   
    return console.info(Math.floor(Math.random()*(500-601)) + 601 ) 
   // solucion del profesor
   // const aleatorio = ()=> console.info(Math.round((Math.random()* 100) + 500));
}

numeroAl501_600(); */


/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

/*  const capicua = (numero = undefined)=>{

    if(!numero) return console.warn('Olvido ingresar un numero');

    //validacion del profe
    //if(typeof numero !== "number")return console.error('no es un numero);

    if(numero === String) return console.error(`Ha ingresado ${numero} y esto no es un numero `);
   
    numero = Math.abs(numero);
    numeroInvertido = numero.toString();
    numeroInvertido = numeroInvertido.split('').reverse().join('');
    numeroInvertido = Number(numeroInvertido);

    if(numero === numeroInvertido){

        return console.info(`El numero ${numero} es capicua`);
    }

    else{
        return console.info(`El numero ${numero} no es capicua`);
    }
    
}
capicua(2000);  */
 


/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

/*  const factorial = (numero = undefined)=>{
     
    if(numero === 0){return console.warn('No puede ingresar el cero')}
     
    if(typeof numero !== "number") {return console.error('no a ingresado ningun numero');}
     
    if(numero < 1) {return console.error('Porfavor ingrese un numero mayor a cero');}

    else{
        let n_numero = 1;
        for (let i = 1; i <=numero; i++){
             n_numero = n_numero * [i];
       }
    return console.log(`El factorial del ${numero} es : ${n_numero}`);
    }
        
}
factorial(); 
factorial('fernando'); 
factorial([1,2,3]); 
factorial(0);
factorial(-5);
factorial(5); 
factorial(8);     */

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

/* const primo = (numero = undefined) => {
    if(numero === undefined) return console.warn('Olvido poner un numero');

    if(typeof numero !== "number")return console.error('no a ingresado ningun numero');

    if(numero === 0 || numero === 1)return console.error('No debe ingresar el 0 o el 1'); 

    if(Math.sign(numero) === -1) return console.warn('Porfavor intrudusca un numero positivo');

    for (let i = 2;i < numero; i++){
        if(numero %  [i]=== 0){
            console.log(numero)
            return console.info(`${numero} no es un numero primo`);
        }
        else{
            return console.info(`${numero} es un numero primo`);
        }
    }
}
primo (7);
primo ();
primo("1");
primo(1);
primo(-7); */


/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

/* const par = (numero = undefined)=>{
    if(numero === undefined) return console.warn('Ingrese un numero porfavor');

    if(typeof(numero) !== "number") return console.error(`Ingresaste ${numero} y este no es un numero`);

    if (numero % 2 === 0 ) return console.info(`El numero : ${numero} es un numero par`);

    else return console.log(`el numero : ${numero} es impar`);

}

par(10);
par(11);
par(-20);
par();
par(0);
par('1fer'); */


/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

/* const temperatura = (grados = undefined,tipo = "") =>{
    if(grados === undefined) return console.warn('Ingrese los grados a convertir');

    if (!tipo)return console.warn('Porfavor ingrese a que medida desea convertir los grados');
    
    if(tipo !== "C" && tipo !== "F") return console.warn('Debe ingresar C para convertir a CELSIUS o F para FAHRENHEIT');

    if(tipo === "C"){
        let f = (grados*1.8)+32
        return console.info(`${grados}° CELSIUS es igual a ${f}° FAHRENHEIT`);
    }
    if(tipo === "F" ){
        let c = (grados-32)/1.8
        return console.info(`${grados}° FAHRENHEIT  es igual a ${c}° CELSIUS`);
    }
}

temperatura(30,"C");
temperatura(86,"F");
temperatura()
temperatura(32)
temperatura(32,"a") */