/**
 * Задача 3: Массивы и кортежи
 * 
 * Определите тип для массива строк и кортежа, содержащего
 * строку и число.
 */

export function arraysTuplesTask(): void {
  const names: string[] = ['Alice', 'Bob', 'Charlie'];
  const person: [string, number] = ['Alice', 30];

  console.log(`03-arrays-tuples: ${names.join(', ')}, ${person}`);
}
