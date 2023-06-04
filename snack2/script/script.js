let elencoStudenti = [
    {
      id: '213',
      name: 'Marco della Rovere',
      grades: '78',
    },
    {
      id: '110',
      name: 'Paola Coretellessa',
      grades: '96',
    },
    {
      id: '250',
      name: 'Andrea Mantegna',
      grades: '48',
    },
    {
      id: '145',
      name: 'Gaia Borromini',
      grades: '74',
    },
    {
      id: '196',
      name: 'Luigi Grimaldello',
      grades: '68',
    },
    {
      id: '102',
      name: 'Piero della Francesca',
      grades: '50',
    },
    {
      id: '120',
      name: 'Francesca da Polenta',
      grades: '84',
    },
  ];
  
  console.log('Elenco degli studenti in maiuscolo per le targhe:');
  elencoStudenti.forEach((studente) => {
    let nomeInMaiuscolo = studente.name.toUpperCase();
    console.log(nomeInMaiuscolo);
  });
  
  console.log('\nElenco degli studenti con voto superiore a 70:');
  elencoStudenti.forEach((studente) => {
    if (studente.grades > 70) {
      console.log(`Lo studente ${studente.name} ha ottenuto una media voti: ${studente.grades} punti`);
    }
  });
  
  console.log('\nElenco degli studenti con voto superiore a 70 ed id superiore a 120:');
  elencoStudenti.forEach((studente) => {
    if (studente.grades > 70 && studente.id > 120) {
      console.log(`Lo studente ${studente.name} ha ottenuto una media voti: ${studente.grades} punti, ed ha l'identificativo: N.${studente.id}`);
    }
  });
  