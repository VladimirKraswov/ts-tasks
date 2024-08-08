/**
 * Задача 5: Объединение и пересечение типов
 * 
 * Создайте объединение типов для переменной, которая может быть
 * строкой или числом. Также создайте пересечение типов для двух интерфейсов.
 */

export function unionIntersectionTask(): void {
  type StringOrNumber = string | number;
  const value: StringOrNumber = 42;

  interface Person {
    name: string;
  }

  interface Employee {
    employeeId: number;
  }

  type EmployeePerson = Person & Employee;

  const employee: EmployeePerson = {
    name: 'Alice',
    employeeId: 1234
  };

  console.log(`05-union-intersection: ${value}, ${JSON.stringify(employee)}`);
}
