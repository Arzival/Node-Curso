const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

const { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);

const heroes = ['Flash', 'Spiderman', 'Ironman'];

const [nombre1, nombre2, nombre3] = heroes;

const [, , nombreI] = heroes;