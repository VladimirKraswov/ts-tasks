/**
 * Задача 6: Перечисления (Enums)
 * 
 * Создайте перечисление для дней недели и напишите функцию,
 * которая принимает день недели и возвращает, является ли он выходным.
 */

export function enumsTask(): void {
  enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
  }

  function isWeekend(day: DayOfWeek): boolean {
    return day === DayOfWeek.Sunday || day === DayOfWeek.Saturday;
  }

  const today: DayOfWeek = DayOfWeek.Friday;
  console.log(`06-enums: ${isWeekend(today)}`);
}
