import Team from '../team';
import Character from '../character';

test('проверка добавления игрока', () => {
  const team = new Team();
  const ivan = new Character('Ivan', 'Magician');
  team.add(ivan);
  expect(team.members.size).toEqual(1);
});
test('проверка на выброс ошибки', () => {
  const team = new Team();
  const ivan = new Character('Ivan', 'Magician');
  team.add(ivan);
  expect(() => team.add(ivan)).toThrow('Такой персонаж уже существует!');
});
test('проверка метода addAll', () => {
  const team = new Team();
  const ivan = new Character('Ivan', 'Magician');
  const oleg = new Character('Oleg', 'Magician');
  team.addAll(ivan, ivan, oleg);
  expect(team.members.size).toEqual(2);
});
test('проверка метода toArray', () => {
  const team = new Team();
  const ivan = new Character('Ivan', 'Magician');
  const oleg = new Character('Oleg', 'Magician');
  team.addAll(ivan, ivan, oleg);
  team.toArray();
  const received = team.members;
  expect(Array.isArray(received)).toEqual(true);
});
