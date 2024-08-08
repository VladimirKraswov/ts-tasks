/**
 * Задача 8: Обобщенные типы (Generics)
 * 
 * Напишите обобщенную функцию, которая принимает массив и
 * возвращает первый элемент этого массива.
 */

export function genericsTask(): void {
  function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
  }

  const numbers = [1, 2, 3];
  const firstNumber = getFirstElement(numbers);

  const strings = ['a', 'b', 'c'];
  const firstString = getFirstElement(strings);

  console.log(`08-generics: ${firstNumber}, ${firstString}`);
}
