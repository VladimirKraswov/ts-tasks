/**
 * Задача 7: Утилиты типа: Partial и Readonly
 * 
 * Используйте `Partial` для создания типа с необязательными полями
 * и `Readonly` для создания типа с только для чтения полями.
 */

export function utilityTypesTask(): void {
  interface User {
    name: string;
    age: number;
    email: string;
  }

  const updateUser: Partial<User> = { name: 'Alice' };

  const user: Readonly<User> = {
    name: 'Bob',
    age: 25,
    email: 'bob@example.com'
  };

  console.log(`07-utility-types: ${JSON.stringify(updateUser)}, ${JSON.stringify(user)}`);
}
