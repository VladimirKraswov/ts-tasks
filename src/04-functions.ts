/**
 * Задача 4: Функции и обратные вызовы
 * 
 * Определите типы для функции, которая принимает строку и
 * обратный вызов. Обратный вызов принимает строку и возвращает ничего (`void`).
 */

export function functionsTask(): void {
  function processString(str: string, callback: (s: string) => void): void {
    callback(str.toUpperCase());
  }

  processString('hello', (result) => {
    console.log(`04-functions: ${result}`);
  });
}
