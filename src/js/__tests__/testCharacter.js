import Character from '../character';

test('checking the error in the name not a string', () => {
  expect(() => new Character(5, 'Bowman')).toThrow('the entered name is incorrect!');
  expect(() => new Character('И', 'Bowman')).toThrow('the entered name is incorrect!');
  expect(() => new Character('Иваниваниваниван', 'Bowman')).toThrow('the entered name is incorrect!');
});
test('checking the name for too long', () => {
  expect(() => new Character('Иван', 'Bond')).toThrow('the entered type is incorrect!');
});
