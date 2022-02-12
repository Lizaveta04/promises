import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((data) => new GameSaving(JSON.parse(data)))
      .catch((err) => new Error('Ошибка!Не удалось распарсить строку!'));
  }
}
