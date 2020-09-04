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

/*  const primo = (numero = undefined) => {
    if(numero === undefined) return console.warn('Olvido poner un numero');

    if(typeof numero !== "number")return console.error('no a ingresado ningun numero');

    if(numero === 0 || numero === 1)return console.error('No debe ingresar el 0 o el 1'); 

    if(Math.sign(numero) === -1) return console.warn('Porfavor intrudusca un numero positivo');

    for (let i = 2;i < numero; i++){console.log(numero)
        if(numero %  [i]=== 0){
            
            return console.info(`${numero} no es un numero primo`);
            break;
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
primo(-7);
primo(200);
primo(false);  */


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

/* const temperatura = (grados = undefined,tipo = undefined) =>{
    if(grados === undefined) return console.warn('Ingrese los grados a convertir');

    if(tipo === undefined)return console.warn('Porfavor ingrese a que medida desea convertir los grados');
    
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


/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */

/* const convercionBinaria = (numero = undefined  ,base = undefined)=>{
    if(numero === undefined) return console.warn('No ingresaste el numero a convertir');
    
    if (typeof numero !== "number") return console.war('El valor ingresado a convertir no es un numero');

    if(base === undefined) return console.warn('No ingresaste la base');

    if (typeof base !== "number") return console.warn('El valor ingresado como base no es un numero');

    if (base ===2 ){
        return console.info(`El numero ${numero} en base ${base} = ${parseInt(numero,base)} base 10`);
    }else if(base === 10){
        return console.info(`El numero ${numero} en base ${base} es = ${(numero.toString(2))} base 2`);
    }else{
        return console.warn('El tipo de base no es valido');
    }
}
convercionBinaria(100,);
convercionBinaria();
convercionBinaria(100,"2");
convercionBinaria(100,2);
convercionBinaria(1110010,2);
convercionBinaria(4,10); */


/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */



/* const descuento = (monto= undefined,descuento = undefined)=>{

    if (monto === undefined)return console.warn('Ingrese el monto a pagar');

    if(descuento === undefined)return console.warn('Que descuento aplicara');

    if(typeof(monto) !=="number" || typeof(descuento) !=="number") return console.error('Algunos de los valores o los dos no corresponden a un numero');

    if(Math.sign(monto) === -1 || Math.sign(descuento) === -1) return console.error('Algunos de los valores o los dos son numeros negativos');

    let descuentoTotal = 0;
    let montoFinal = 0;
    
    descuentoTotal  = monto * descuento / 100;
    montoFinal = monto - descuentoTotal;

    return console.info(`El descuento de ${descuento}% sobre su compra de ${monto}$ es de ${descuentoTotal}$ y usted debe pagar ${montoFinal}$`)
}

descuento(1000,20);
descuento();
descuento(1000)
descuento(1000,"20");
descuento("1000",20);
descuento(1000,-20); */


/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020 ).*/


/*  const volverFuturo = (fecha = undefined)=>{

    if(fecha === undefined) return console.warn('Olvidaste pasarme la fecha');

    if(!(fecha instanceof Date)) return console.error('El valor ingresado no es una fecha vaildad');
    
    let calculoAnios = new Date().getTime() - fecha.getTime();
    let transMiles = 1000*60*60*24*365;
    let anios = Math.floor(calculoAnios/transMiles);

    return (Math.sign(anios) === -1)
    ? console.info(`Faltan ${Math.abs(anios)} años para el ${fecha.getFullYear()}.`)
    :(Math.sign(anios) === 1)
     ?console.info(`Pasaron ${anios} años desde ${fecha.getFullYear()}.`)
     : console-info (`No hay diferencia en el año actual ${fecha.getFullYear()}.`)
}
 volverFuturo();
 volverFuturo(new Date(1984,4,23)) */



/*  18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

/* const contarLetras = (texto = undefined)=>{

    if (texto === undefined) return console.warn('Ingrese un texto porfavor');

    if (typeof(texto) !== "string") return console.error('Lo ingresado no es un texto');

    let textocopy = texto.replace(/ /g,'');
    let vocales = new RegExp(/[aeiou]/ig);
    let consonante = /[^aeiou]/ig;
    let cantidadVocales = textocopy.match(vocales).length;
    let cantidadConsonantes = textocopy.match(consonante).length;
    


   return  console.info(`En el texto ${texto} hay ${cantidadVocales} vocales y ${cantidadConsonantes} consonantes`);
}    

contarLetras();
contarLetras(true);
contarLetras('Hola Mundo'); */



/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

/* const validarNombre = (nombre = undefined,apellido = undefined)=>{

    if(nombre === undefined)return console.warn('No completo el nombre');

    if(apellido === undefined)return console.warn('No completo el apellido');

    let regularNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
    
    if ( !regularNombre.test(nombre))return console.error("Nombre no valido");

    if ( !regularNombre.test(apellido))return console.error("Apellido no valido");

    else if(regularNombre.test(nombre) && regularNombre.test(apellido)) {return console.info(`Nombre : "${nombre} ${apellido}" valido`)};
}

validarNombre("Fernando","Romero");
validarNombre();
validarNombre('fernando'); */


/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

/* const validarEmail = (email= undefined)=>{

    if(email === undefined) return console.warn('Debe ingresar su email');

    const regularEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!regularEmail.test(email))return console.error('Email invalido');

    else return console.info(`email : ${email} aceptado`);

}

validarEmail();
validarEmail("fernando.romero.com");
validarEmail("fernando_0135@hotmail.com.ar");
validarEmail("fernando@hotmail.com.ar"); */



/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

/* const numerosCuadrado = (numeros = []) =>{

    if(!numeros) return console.warn('No ingresaste un arreglo de numero');

    if(!(numeros instanceof Array)) return console.error(`${numeros} no es un Arreglo de numero`);

    if(numeros === 0) return console.error('Arreglo vacio');

    //validaciones del profesor

    for(let num of numeros){
        if(typeof num !== "number") return console.error (`El valor "${num}" no es un número`);
    }
    
    numeros.forEach(numero => { 
        console.info(numero * 2);
    });

    //resolucion del profe
    const newArr = numeros.map(el => el * el);

    return console.info(`Arreglo original ${numeros},\n Arreglo elevado al cuadrado : ${newArr}`);
}

numerosCuadrador([1,2,3]);
numerosCuadrador(2);
numerosCuadrador(['hola','chau','goodbay']);
 */



/*  22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

/*  const maxMin = (ArregloNum = undefined) =>{

    if(ArregloNum === undefined) return console.info('No ingresaste un Arreglo de numeros');

    if(!(ArregloNum instanceof Array)) return console.error(` no es un Arreglo de numero`);

    if(ArregloNum === 0) return console.error('Arreglo vacio');

    for(let num of ArregloNum){
        if(typeof num !== "number") return console.error (`El valor "${num}" no es un número`);
    }

    let numeroAlto = Math.max(...ArregloNum);

    let numeroBajo = Math.min(...ArregloNum);

    const minMax = [];
    minMax.push(numeroAlto);
    minMax.push(numeroBajo);
    return console.info(`El arreglo de maximo y minimo es: [${minMax}]`);

}
maxMin([1,4,5,99,-60]);
maxMin();
maxMin((1,2,3,4,5,6));  */




/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */



/* const paresImpares = (arregloNumeros = undefined) =>{

    if(arregloNumeros === undefined) return console.info('No ingresaste un Arreglo de numeros');
hola
    if(!(arregloNumeros instanceof Arr const maxMin = (ArregloNum = undefined) =>{

    if(ArregloNum === undefined) return console.info('No ingresaste un Arreglo de numeros');

    if(!(ArregloNum instanceof Array)) return console.error(` no es un Arreglo de numero`);

    if(ArregloNum === 0) return console.error('Arreglo vacio');

    for(let num of ArregloNum){
        if(typeof num !== "number") return console.error (`El valor "${num}" no es un número`);
    }

    let numeroAlto = Math.max(...ArregloNum);

    let numeroBajo = Math.min(...ArregloNum);

    const minMax = [];
    minMax.push(numeroAlto);
    minMax.push(numeroBajo);
    return console.info(`El arreglo de maximo y minimo es: [${minMax}]`);

}
maxMin([1,4,5,99,-60]);
maxMin();
maxMin((1,2,3,4,5,6)); ay)) return console.error(`Esto no es un Arreglo de numero`)

      if(AarregloNumeros === 0) return console.error('Arreglo vacio');

    for(let num of arregloNumeros){
        if(typeof num !== "number") return console.error (`El valor "${num}" no es un número`);
    }


    const pares = []
    const impares = []
  
    const parImpar = {
        pares : pares,
        impares :impares
    }
    
    for (let i = 0; i< arregloNumeros.length; i++){
        if (i % 2 === 0 )pares.push(arregloNumeros[i]); 
        else {impares.push(arregloNumeros[i]) ;}
    }
    //return console.log(pares,impares);
    return console.log(parImpar);

    //resultade del profe

    return console.info({
       pares:arregloNumeros.filter(mun => num % 2 === 0),
       impares:arregloNumeros.filter(mun => num % 2 === 1), 
    })
    
}

paresImpares([1,2,3,4,5,6,7,8,9,0]);
paresImpares();
paresImpares(1,2,3,4,5,6,7,8); */



/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */

/* const subeBaja = (numeros = undefined) =>{
    if(numeros === undefined) return console.info('No ingresaste un Arreglo de numeros');

    if(!(numeros instanceof Array)) return console.error(`Esto no es un Arreglo de numero`)

    if(numeros === 0) return console.error('Arreglo vacio');

    for(let num of numeros){
        if(typeof num !== "number") return console.error (`El valor "${num}" no es un número`);
    }
   
     console.info({
         numeros,
         asc:numeros.map(el => el).sort((a,b)=>a-b),
         desc:numeros.map(el => el).sort((a,b)=>a-b).reverse()
     });
}
subeBaja([7, 5,7,8,6,200]);
 */



/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */


/* const eliminarDuplicado = (arreglo = undefined)=>{

    if(arreglo === undefined) return console.info('No ingresaste un Arreglo de arreglo');

    if(!(arreglo instanceof Array)) return console.error(`Esto no es un Arreglo de numero`)

    if(arreglo === 0) return console.error('Arreglo vacio');

   

    return console.info(`El arreglo "${arreglo}"\n sin duplicados es : ${ arreglos =[...new Set(arreglo)] }`)

    //solucion profesor

    return console.info({
        original:arreglo,
        sinDuplicados:arreglo.filter((value,index,self)=> self.indexOf(value) === index))
    })

}
eliminarDuplicado(["x", 10, "x", 2, "10", 10, true, true]); */





/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

/* const promedios = (arreglo = undefined) =>{
 
    if(arreglo === undefined) return console.info('No ingresaste un Arreglo de arreglo');

    if(!(arreglo instanceof Array)) return console.error(`Esto no es un Arreglo de numero`)

    for(let num of numeros){
        if(typeof num !== "number") return console.error (`El valor "${num}" no es un número`);
    }

   return console.info((arreglo.reduce((a,b)=>a+b))/arreglo.length) 
}

promedios([9,8,7,6,5,4,3,2,1,0]); */




/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

//No lo pude realizar

/* 
class Pelicula {

    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;


        this.validarIMBD(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros(){
        return ["Action","Adult","Adventure","Animation","Biography", "Comedy","Crime","Documentary","Drama","Family","Fantasy","Film Noir","Game-Show","History","Horror","Musical","Music","Mystery","News","Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Western"];
    }

    static generosAceptados (){
        return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(', ')}`)
    }

    validarCadena(propiedad,valor){
        if(!valor) return console.warn(`${propiedad}"${valor}"esta vacio`);

        if(typeof valor !== "string") return console.error (`${propiedad}"${valor}" ingresado,No es una cadena de texto`);

        return true;
    }
    validarLongitudCadena(propiedad,valor,longitud){
        if(valor.length > longitud)returnconsole.error(`${propiedad} "${valor}" excede el numero de caracteres per,itidos(${longitud}).`);

        return true;
    }
    validarIMBD(id){

       if(this.validarCadena("IMDB id",id)){
           if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
               return console.error(`IMDB id "${id}" no es valido ,debe tener 9 caracteres,los 2 primeros letras minusculas , los 7 restantes números.`);
           }
       }    
    }
    validarNumero(propiedad,valor){

        if(!valor)return console.warn(`${propiedad} "${valor}" esta vacio `);

        if(typeof valor !== "number")return console.error(`${propiedad} "${valor}" ingresado,No es un numero`);
        
        return true;
    }
    validarArreglo(propiedad,valor){
        if(!valor)return console.warn(`${propiedad} "${valor}" esta vacio`);

        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresados,No es un arreglo`)

        if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);
    
        for(let cadena of valor){
            if(typeof cadena!== "string") return console.error (`El valor "${cadena}"ingresado ,No es cadena texto`);
        }

        
        return true;
    }


    validarTitulo(titulo){

        if(this.validarCadena("titulo",titulo))
          this.validarLongitudCadena("titulo",titulo,100)  
         
     }
     validarDirector(director){

        if(this.validarCadena("director",director))
          this.validarLongitudCadena("director",director,50)  
         
     }
     validarEstreno(estreno){

        if(this.validarNumero("Año de estreno",estreno)){
            if(!(/^([0-9]){4}$/.test(estreno))){
                return console.error(`Año de estreno "${estreno}" no es valido ,debe tener 4 digitos`);
            }
        }    
     }
     validarPais(pais){

        if(this.validarArreglo("pais",pais));
          
     }
     validarGeneros(generos){

        if(this.validarArreglo("Generos",generos)){
            for (let genero of generos){
                if(!Pelicula.listaGeneros.includes(genero)){
                    console.error(`Genero(s)incorrectos"${generos.join(', ')}"`);
                    Pelicula.generosAceptados();
                }
            }
        }      
     }
     validarCalificacion(calificacion){
         if(this.validarNumero("Calificacion",calificacion))
         return(calificacion < 0 || calificacion > 10)
         ? console.error(`La calificacion tiene que estar en un rango entre0 10`)
         : this.calificacion = calificacion.toFixed(1)
     }
     fichaTecnica(){
         console.info(`Ficha Tecnica:\nTitulo:"${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.estreno}"\nPais:"${this.pais.join("-")}"\nGenero:"${this.generos.join(", ")}"\nCalificacion:"${this.calificacion}"\nIMDB id:"${this.id}"`)
     }


}

const peli = new Pelicula({
    id:"tt1234567",
    titulo:"rocky",
    director: "Sysvester Stalone",
    estreno:1972,
    pais: ["Estados Unidos"],
    generos:["Sport"],
    calificacion :8.5,
});

peli.fichaTecnica();

const misPelis = [
    {
        id:"tt1200000",
        titulo:"rocky",
        director: "Sysvester Stalone",
        estreno:1972,
        pais: ["Estados Unidos"],
        generos:["Sport"],
        calificacion :8.5,
    },
    {
        id:"tt1234567",
        titulo:"tango",
        director: "maradonae",
        estreno:1927,
        pais: ["argentinas"],
        generos:["Sport"],
        calificacion :9.5,
    },{
        id:"tt7584567",
        titulo:"rambo",
        director: "messie",
        estreno:1972,
        pais: ["paraguay"],
        generos:["Sport"],
        calificacion :6.5,
    }
]
misPelis.forEach(el => new Pelicula(el).fichaTecnica()); */