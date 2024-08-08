/**
 * Задача 1: Основные типы и аннотации
 * 
 * Определите типы для функции, которая принимает два числа
 * и возвращает их сумму.
 */

export function basicTypesTask(): void {
  function add(a: number, b: number): number {
    return a + b;
  }

  const result = add(2, 3);
  console.log(`01-basic-types: ${result}`);
}
