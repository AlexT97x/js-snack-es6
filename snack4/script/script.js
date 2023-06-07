const squadreSerieA = [
    {
      nome: 'Napoli',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Lazio',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Inter',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Milan',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Atalanta',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Roma',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Juventus',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Fiorentina',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Bologna',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Torino',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Monza',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Udinese',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Sassuolo',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Empoli',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Salernitana',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Lecce',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Spezia',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Verona',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Cremonese',
      punti_fatti: 0,
      falli_subiti: 0,
    },
    {
      nome: 'Sampdoria',
      punti_fatti: 0,
      falli_subiti: 0,
    },
  ];
  
  console.log(squadreSerieA);
  
  squadreSerieA.forEach((element) => {
    element.punti_fatti = Math.floor(Math.random() * 95) + 1;
    element.falli_subiti = Math.floor(Math.random() * 20) + 1;
});

const array_valorizzato = squadreSerieA.map((element) => {
    const {nome, falli_subiti} = element; 

    let object = {
        nome,
        falli_subiti
    }
    return object;
});

console.log(array_valorizzato)