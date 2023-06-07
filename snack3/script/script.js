

const bike = [
    {
        bike_name: 'AEROAD CFR',
        bike_weigth: 8,
    },
    {
        bike_name: 'VAN RYSEL',
        bike_weigth: 9,
    },
    {
        bike_name: 'TRIBAN DONNA',
        bike_weigth: 7,
    },
    {
        bike_name: 'BTWIN',
        bike_weigth: 10,
    },
    {
        bike_name: 'LOBITO CARBONIO',
        bike_weigth: 6,
    },
]        
console.log(bike)
console.log(bike[4].bike_name)
console.log(bike[4].bike_weigth)



let {bike_name, bike_weigth} = bike[4];
console.log(`La biciceltta ${bike_name} ha il peso minore, ${bike_weigth} kg`)



const bici_corsa = [
    {
        nome: 'AEROAD CFR',
        peso: 8,
    },
    {
        nome: 'VAN RYSEL',
        peso: 9,
    },
    {
        nome: 'TRIBAN DONNA',
        peso: 7,
    },
    {
        nome: 'BTWIN',
        peso: 10,
    },
    {
        nome: 'LOBITO CARBONIO',
        peso: 6,
    },
]        



let bici_peso_min = bici_corsa[0];

for(let i=0; i<bici_corsa.length; i++){
    if(bici_corsa[i].peso < bici_peso_min.peso){
        bici_peso_min = bici_corsa[i];
    }
}
console.log(bici_peso_min)

let {nome, peso} = bici_peso_min;

console.log(`La bicicletta ${nome}, ha il peso minore, ${peso} kg`)