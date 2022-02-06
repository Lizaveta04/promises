import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static load() {
    const data = read(); // возвращается Promise!
    const value = json(data); // возвращается Promise!
    return data.then((res) => value).then((res) => new GameSaving(value)); // .catch((err) => new Error('Ошибка!Не удалось распарсить строку!'));
  }
}
