const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 10 ) => {
    
    // return new Promise( (resolve, reject) => {
        
    //     let salida = '';

    //     console.log('===============');
    //     console.log(` Tabla del ${ base } `);
    //     console.log('===============');

    //     for (let i = 1; i <= 10; i++) {
            
    //         salida += ` ${ base } x ${ i } = ${ base * i } \n`;

    //     }

    //     console.log( salida );

    //     fs.writeFileSync( `tabla-${ base }.txt`, salida );

    //     resolve( `tabla-${ base }.txt` );

    // } );

    try {

        let salida = '';
        let salidaConsola = '';

        for (let i = 1; i <= hasta; i++) {
            
            salida += `${ base } x ${ i } = ${ base * i } \n`;
            salidaConsola += `${ base } ${ 'x'.bgRed } ${ i } = ${ base * i } \n`
        }

        if( listar ) {
            console.log('==============='.gray);
            console.log(` Tabla del ${ base } `.bgYellow);
            console.log('==============='.gray);  
            
            console.log( salidaConsola );
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

        // fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
        //     if (err) throw err;

        //     console.log(`tabla-${ base }.txt creado`);
        // });

        return `tabla-${ base }.txt`;

        } catch (err) {
            throw err;
        }

}

module.exports = {
    crearArchivo
}