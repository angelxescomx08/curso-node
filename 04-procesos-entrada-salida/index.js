//salida 
process.stdout.write("Hola, escribe tu nombre")

//Entrada
process.stdin.on('data',(data)=>{
    let nombre = data.toString()
    process.stdout.write(`Tu nombre es: ${nombre}`)
    process.exit()
})