export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error('the entered name is incorrect!');
    }
    const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (arr.includes(type)) {
      this.type = type;
    } else {
      throw new Error('the entered type is incorrect!');
    }
  }
}
