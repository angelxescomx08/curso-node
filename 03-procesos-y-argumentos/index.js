/*
    Dentro de node existe un objeto para los procesos este es process, este objeto puede acceder a difrentes
    propiedades una de ellas son los argumentos proces.argv, los argumentos son puestos al correr el script con node
*/

const args = process.argv
console.log(args)

const param = (p)=>{
    const index = process.argv.indexOf(p)
    return process.argv[index+1]
}

console.log(`Tu nombre es ${param('-nombre')} y tu apellido es ${param('-apellido')}`)