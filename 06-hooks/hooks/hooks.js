export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  updateName(newName) {
    this.name = newName;
  }

  deleteAge() {
    this.age = null;
  }
}
