import GameSaving from '../gamesaving';
import GameSavingLoader from '../basic';

test('should return object', () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  return GameSavingLoader.load().then((saving) => { expect(saving).toEqual(expected); });
});

test('should return error', () => {

});
