import GameSavingLoader from './basic';

console.log('app worked');

GameSavingLoader.load()
  .then((saving) => console.log(saving))
  .catch((err) => console.error(new Error('Ошибка!Не удалось распарсить строку!')));
