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