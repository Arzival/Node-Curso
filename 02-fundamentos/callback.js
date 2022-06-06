const getUsuarioById = (id, callback) => {
    const usuario = {
        nombre: 'Juan',
        id
    };

setTimeout(() => {
    console.log(usuario);
    callback( usuario );
}, 3000)
};

getUsuarioById(1, (usuario) => {
    console.log(`Usuario obtenido ${usuario.nombre}`);
    });