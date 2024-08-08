/**
 * Задача 10: Классы и наследование
 * 
 * Создайте класс `Animal` с методами `speak` и `move`, затем
 * создайте подкласс `Dog`, который переопределяет метод `speak`.
 */

export function classesTask(): void {
  class Animal {
    constructor(public name: string) {}

    speak(): void {
      console.log(`${this.name} makes a sound.`);
    }

    move(distance: number): void {
      console.log(`${this.name} moves ${distance} meters.`);
    }
  }

  class Dog extends Animal {
    speak(): void {
      console.log(`${this.name} barks.`);
    }
  }

  const dog = new Dog('Rex');
  dog.speak();
  dog.move(10);

  console.log(`10-classes: ${dog.name}`);
}
