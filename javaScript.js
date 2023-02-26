const employees = [{
    id: 1,
    name: 'Jack',
    age: 45,
    salaries: [120000, 130000, 110000, 140000, 150000]
  }, {
    id: 2,
    name: 'Bob',
    age: 40,
    salaries: [170000, 130000, 190000, 140000, 160000]
  }, {
    id: 3,
    age: 38,
    name: 'Tom',
    salaries: [200000, 230000, 210000, 240000, 250000]
  }];
  
  //Отсортировать сотрудников по возрасту от меньшего к большему

  employees.sort(function(a, b) {
    return a.age - b.age;
  });
  
  console.log('employees', employees)

  //Отфильтровать данный массив оставив только сотрудников старше 40.

  
const filteredEmployees = employees.filter(function(element) {
  return element.age > 40;
});

console.log('employees', filteredEmployees)

// Из данного массива получить массив следующего вида


const avgSalary = employees.map(function(element) {
    return {
      id: element.id,
      name: element.name,
      avgsalary: element.salaries.reduce(function(a, b,) {
      let sum = (a + b);
          return sum;
      })
    }
  });
  
  console.log(avgSalary);