
let tavoloVip = [
    {
        nome_tavolo: 'Tavolo Vip',
        nome_ospite: 'Brad Pitt',
        posto_occupato: '1',
    },
    {
        nome_tavolo: 'Tavolo Vip',
        nome_ospite: 'Johnny Depp',
        posto_occupato: '2',
    },
    {
        nome_tavolo: 'Tavolo Vip',
        nome_ospite: 'Lady Gaga',
        posto_occupato: '3',
    },
    {
        nome_tavolo: 'Tavolo Vip',
        nome_ospite: 'Cristiano Ronaldo',
        posto_occupato: '4',
    },
    {
        nome_tavolo: 'Tavolo Vip',
        nome_ospite: 'Georgina Rodriguez',
        posto_occupato: '5',
    },
    {
        nome_tavolo: 'Tavolo Vip',
        nome_ospite: 'Chiara Ferragni',
        posto_occupato: '6',
    },
    {
        nome_tavolo: 'Tavolo Vip',
        nome_ospite: 'Fedez',
        posto_occupato: '6',
    },
    {
        nome_tavolo: 'Tavolo Vip',
        nome_ospite: 'George Clooney',
        posto_occupato: '7',
    },
    {
        nome_tavolo: 'Tavolo Vip',
        nome_ospite: 'Amal Clooney',
        posto_occupato: '8',
    },
    {
        nome_tavolo: 'Tavolo Vip',
        nome_ospite: 'Maneskin',
        posto_occupato: '9, 10, 11, 12',
    }, 
]
console.log(tavoloVip)


tavoloVip.forEach((vip) => {
    console.log(`L'Ospite ${vip.nome_ospite} siederà al ${vip.nome_tavolo} al posto n. ${vip.posto_occupato}`)
});