let a : number = 6
let b : string = "Muhamad Kamran"

function sum(c:number, d:number) {
    return console.log(c + d);
}

const data1 = {
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "country": "USA"
    },
    "favoriteFruits": ["apple", "banana", "orange"],
    "contact": {
      "email": "john@example.com",
      "phone": "555-123-4567"
    }
  }

  interface Student {
    name: string;
    age: number;
    grade: number;
  }
  
  const students: Student[] = [
    {
      name: "Alice",
      age: 18,
      grade: 12,
    },
    {
      name: "Bob",
      age: 17,
      grade: 11,
    },
    {
      name: "Charlie",
      age: 16,
      grade: 10,
    },
    // You can add more student objects here
  ];
  
  
  export{Student, a, b, data1, sum}