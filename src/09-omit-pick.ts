/**
 * Задача 9: Omit и Pick
 * 
 * Используйте `Omit` для создания типа, исключающего одно из
 * полей интерфейса, и `Pick` для создания типа, включающего
 * только выбранные поля интерфейса.
 */

export function omitPickTask(): void {
  interface User {
    name: string;
    age: number;
    email: string;
  }

  type UserWithoutEmail = Omit<User, 'email'>;
  const userWithoutEmail: UserWithoutEmail = {
    name: 'Alice',
    age: 30
  };

  type UserNameAndAge = Pick<User, 'name' | 'age'>;
  const userNameAndAge: UserNameAndAge = {
    name: 'Bob',
    age: 25
  };

  console.log(`09-omit-pick: ${JSON.stringify(userWithoutEmail)}, ${JSON.stringify(userNameAndAge)}`);
}
