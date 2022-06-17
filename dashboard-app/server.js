// Importar express
const EXPRESS = require('express');

// Iniciar express
const APP = EXPRESS();

// Nome da pasta no dist que será feito o build
const APP_NAME = 'dashboard-app';

// Local onde o build irá gerar os arquivos
const OUT_PUT_PATH = `${__dirname}/dist/${APP_NAME}`;

// Seta o diretorio de build para servir o conteúdo angular
APP.use(EXPRESS.static(OUT_PUT_PATH));

// Redirecionar qualquer requisição para o index.html
APP.get('/*', (req, res) => {
  res.sendFile(`${OUT_PUT_PATH}/index.html`);
});

// Ouvir a porta que o heroku disponibilizar
APP.listen(process.env.PORT);
