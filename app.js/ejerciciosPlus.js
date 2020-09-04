//crea una class gamers que resiba un objeto usuariocon los siguientes datos obligatorios
//nombre del usuario ,apellido,edad,id,alias,telefono,email,hobby.
//todo con sus validaciones coorespondientes.
//el nombre y el apellido no pueden superar los 50 caracters
//que solo acepte mayores de 18 años 
//el id debe comenzar en mayuscula seguir con cuantro letras minusculas y cuatro numero
//el alias debe tener un maximo de 30 caracteres y un minimo de 10 y no puede contener numeros
//el numero de telefono no puede superar lo 10 digitos
//validar que el email ingresado se valido
//el hobby solo pueden salir de una lista antes predeterminada
//realizar una ficha del usuario


class Gamers {

    constructor({userName,userLastName,age,id,alias,telephone,email,hobby}){
        this.userName = userName;
        this.userLastName = userLastName;
        this.age = age;
        this.id = id;
        this.alias = alias;
        this.telephone = telephone;
        this.email = email;
        this.hobby = hobby;

        this.validarUserName(userName);
        this.validarUserLastName(userLastName);
        this.validarEdad(age);
        this.validarId(id);
        this.validarAlias(alias);
        this.validarTelefono(telephone);
        this.validarEmail(email);
        this.validarHobbys(hobby);
    }
    static get listaHobbys(){
        return["ACTUAR EN TEATRO","ACUARIOS","AEROBIC","AEROMODELISMO","AIKIDO","AIRSOFT","AJEDREZ","ANIMACION","AQUAGYM","AROMATERAPIA","ARTE DIGITAL","ARTE","ASOCIACIONES","ASTROLOGIA","ASTRONOMIA","ATLETISMO","AUDIOLIBROS","AUTOCARAVANAS","AUTOMOVILES CLASICOS/ANTIGUOS","AVIACION DEPORTIVA","AVICULTURA","AVISTAMIENTO DE AVES","BACKGAMMON","BADMINTON","BAILAR","BALONCESTO","BALONMANO","BARCO DENTRO DE UNA BOTELLA","BARCOS DE MOTOR","BARRANQUISMO","BATIK Y ESTAMPACION DE TEJIDOS","BEISBOL","BELLEZA Y ESTETICA","BIATLON","BIBLIOFILIA","BICICLETA","BICICLETA DE MONTAÑA"]
    }
    static hobbysAceptados(){
        return console.info(`Los Hobbys posibles son : ${Gamers.listaHobbys.join(', ')}`);
    }
    validarCadena(propiedad,valor){
        if(valor === undefined) return console.warn('Hobby sin llenar')

        if(!valor) return console.warn(`${propiedad}"${valor}" Esta vacio`);

        if(typeof valor != "string") return console.error(`${propiedad}"${valor}" ingresado,No es una cadena de texto`);


        return true;
    }
    validarLongitud(propiedad,valor,longitud){
        if(valor.length > longitud ) return console.error(`${propiedad}"${valor}" supera la longitud permitida`);

        return true;
    }
    validarLongitudMin(propiedad,valor,longitud){
        if(valor.length < longitud ) return console.error(`${propiedad}"${valor}" No alcanza al minimo de longitud requerida`);

        return true;
    }
     validarNumeros(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} Esta vacio`);
        if(typeof valor !== "number") return console.error(`${propiedad} "${valor} "Solo permite numeros`);

        return true;
    }
    
    
    validarUserName(userName) {
    
        if(this.validarCadena("UserName",userName));
           this.validarLongitud("UserName",userName,50);{
            let regularNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
            if ( !regularNombre.test(userName)){return console.error(`"${userName}" Debe empezar en        mayuscula y solo puede contener letras`);}}
    }
    validarUserLastName(userLastName) {
    
        if(this.validarCadena("UserLastName",userLastName));
           this.validarLongitud("UserLastName",userLastName,50);{
            let regularNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
            if ( !regularNombre.test(userLastName)){return console.error(`"${userLastName}" Debe empezar en mayuscula y solo puede contener letras`);}}
    }
    validarEdad(age){
        if(this.validarNumeros("age",age));{
            if(age < 18) return console.warn(`Tienes "${age}" y este sitio solo acepta mayores de 18 año`);
        }     
    }
    validarId(id){
        if(id === undefined)return console.warn("id vacio");
        if(!(/^([A-Z]){1}([a-z]){4}([0-9]){4}$/.test(id))){
            return console.error(`El Id "${id}" ,No es valido tiene que empezar con una letra mayuscula seguir con cuatro letras y terminar con cuatro numeros`);
        }
    }
    validarAlias(alias){
        if(this.validarLongitud("Alias",alias,30));
            this.validarLongitudMin("alias",alias,5);
            this.validarCadena("Alias",alias);
    }
    validarTelefono(telephone){
        if(this.validarNumeros("Telephone",telephone));
          if(!(/^([0-9]){10}$/.test(telephone))){
              return console.error('El numero telefonico debe tener 10 caracteres');
          } 
    }
    validarEmail(email = undefined){
        if(email === undefined || email === "") return console.warn('Debe ingresar su email');

        if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email))){
            return console.error(`${email} No valido `);
        } ;
    }
    validarHobbys(hobby){

        if(this.validarCadena("Hobbys",hobby)){
            for (let hobbys of hobby){
                if(!Gamers.listaHobbys.includes(hobby)){
                    console.error(`Hobbys incorrectos"${hobby}"`);
                    Gamers.hobbysAceptados();
                    break;
                }
            }
        }      
     }
     fichaUsuario(){
         console.info(`Ficha Del Usuario:\nNombre: "${this.userName}"\nApellido: "${this.userLastName}"\nEdad: "${this.age}"\nID: "${this.id}"\nAlias: "${this.alias}"\nTelefono:"${this.telephone}"\nEmail: "${this.email}"\nHobby: "${this.hobby}"`)
     }
} 


const user1 = new Gamers({
    userName :"Fernando",
    userLastName : "Romero",
    age:42,
    id:"Ferna1234",
    alias:"fernando1234",
    telephone:1234567891,
    email:"fernando@1234.com",
    hobby:"BEISBOL"
})
user1.fichaUsuario()