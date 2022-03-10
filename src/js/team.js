export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже существует!');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    const arr = characters;
    this.members = new Set(arr);
  }

  toArray() {
    const arrayFromSet = [];
    this.members.forEach((item) => {
      arrayFromSet.push(item);
    });
    this.members = arrayFromSet;
  }
}
