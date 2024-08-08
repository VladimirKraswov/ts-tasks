/**
 * Задача 2: Интерфейсы и типы объектов
 * 
 * Определите интерфейс для объекта, представляющего пользователя,
 * с полями `name` (строка), `age` (число) и `email` (строка).
 */

export function interfacesTask(): void {
  interface User {
    name: string;
    age: number;
    email: string;
  }

  const user: User = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
  };

  console.log(`02-interfaces: ${JSON.stringify(user)}`);
}
