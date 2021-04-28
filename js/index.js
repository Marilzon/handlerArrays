const app = document.querySelector('#app');

function addElement(tag, content) {
  const text = `
      <${tag}>${content}</${tag}>
    `;
  app.insertAdjacentHTML('beforeend', text);
}

const languages = [
  'PHP',
  'Javascript',
  'C',
  'C++',
  'Java',
  'Python',
  'Ruby',
  'C#',
  'Lua',
  'Swift',
].sort();

const languageReleaseDate = [
  { name: 'PHP', release: 1994 },
  { name: 'Javascript', release: 1995 },
  { name: 'C', release: 1972 },
  { name: 'C++', release: 1979 },
  { name: 'Java', release: 1995 },
  { name: 'Python', release: 1991 },
  { name: 'Ruby', release: 1993 },
  { name: 'C#', release: 2000 },
  { name: 'Lua', release: 1993 },
  { name: 'Swift', release: 2014 },
];

/*---------------------------------------------------------------*/

const orderBySort = () => {
  for (let item of languages) {
    sortedItems = addElement(`p class='list-item'`, item);
  }
}

const orderByLength = (languages) => {
  const result = [];

  for (let i = 0; i < languages.length; i += 1) {
    result.push(`${languages[i]}: ${languages[i].length} Caracteres. `);
  }

  const filteredResult = [...new Set(result)];

  const ordenedAndFiltered = filteredResult.sort((a, b) => {
    return a.length - b.length
  });

  for (let item of ordenedAndFiltered) {
    addElement(`p class='list-item'`, item);
  }
}

const startWithP = (languages) => {
  const result = [];

  for (let i = 0; i < languages.length; i += 1) {
    if (languages[i].substring(0, 1) === 'P') {
      result.push(languages[i]);
    }
  }

  for (let item of result) {
    addElement(`p class='list-item'`, item);
  }
}

const minorOfThree = (languages) => {
  const result = [];

  for (let i = 0; i < languages.length; i += 1) {
    if (languages[i].length < 4) {
      result.push(languages[i]);
    }
  }

  for (let item of result) {
    addElement(`p class='list-item'`, item);
  }
}

const groupByDecade = (languageReleaseDate) => {
  const result = [];

  const decade = [];
  decade['70s'] = [];
  decade['80s'] = [];
  decade['90s'] = [];
  decade['2000'] = [];
  decade['2010'] = [];

  for (let i = 0; i < languageReleaseDate.length; i += 1) {
    if (languageReleaseDate[i].release < 1980) {
      decade['70s'].push(`
        Linguagem: ${languageReleaseDate[i].name},
        Lançamento: ${languageReleaseDate[i].release}`);
    }
    else if (languageReleaseDate[i].release < 2000
      && languageReleaseDate[i].release > 1989) {
      decade['90s'].push(`Linguagem: ${languageReleaseDate[i].name},
      Lançamento: ${languageReleaseDate[i].release}`);
    }
    else if (languageReleaseDate[i].release < 2010
      && languageReleaseDate[i].release > 1999) {
      decade['2000'].push(`Linguagem: ${languageReleaseDate[i].name},
      Lançamento: ${languageReleaseDate[i].release}`);
    }

    else if (languageReleaseDate[i].release > 2009) {
      decade['2010'].push(`Linguagem: ${languageReleaseDate[i].name},
      Lançamento: ${languageReleaseDate[i].release}`);
    }
  }

  for (let item of decade['70s']) {
    addElement(`p class='release-70s'`, item);
  }

  for (let item of decade['90s']) {
    addElement(`p class='release-90s'`, item);
  }

  for (let item of decade['2000']) {
    addElement(`p class='release-2000'`, item);
  }

  for (let item of decade['2010']) {
    addElement(`p class='release-2010'`, item);
  }
}

/*---------------------------------------------------------------*/

addElement('h1', 'Dasafio!');
addElement('h2', 'Manipulando Arrays');
addElement('div', `
  <a href="https://github.com/Marilzon/handlerArrays"
  target="_blank">Repósitório</a>`
);

addElement(`pre class='code-formated'`, `[${languages}]`);

addElement('h3', '1) Organize os dados por ordem alfabética.');
orderBySort();

addElement('h3', '2) Organize os dados por quantidade de caracteres.');
orderByLength(languages);

addElement('h3', '3) Filtre todas as linguagens que comecem com a letra P.');
startWithP(languages);

addElement('h3', '4) Recupere todas as linguagens que possuem 3 caracteres ou menos.');
minorOfThree(languages);

addElement('h3', `5) Crie um novo array, agrupando as linguagens
  por Lançamento, crie seu novo array com a linguagem e seu Lançamento,
  Após isso, agrupe - os de 10 em 10 anos.`
);
groupByDecade(languageReleaseDate);

addElement('h2', 'Códigos utilizados na questões:');

addElement('h2', 'exercicio 1:');
addElement(`pre class='code-formated'`, orderBySort);

addElement('h2', 'exercicio 2:');
addElement(`pre class='code-formated'`, orderByLength);

addElement('h2', 'exercicio 3:');
addElement(`pre class='code-formated'`, startWithP);

addElement('h2', 'exercicio 4:');
addElement(`pre class='code-formated'`, minorOfThree);

addElement('h2', 'exercicio 5:');
addElement(`pre class='code-formated'`, groupByDecade);
