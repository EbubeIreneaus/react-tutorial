import React from 'react'

function ObjectList() {
    let persons = [
        { name: "John Doe", id: 1, age: 25, country: "USA" },
        { name: "Alice Smith", id: 2, age: 30, country: "Canada" },
        { name: "Bob Johnson", id: 3, age: 22, country: "UK" },
        { name: "Eva Martinez", id: 4, age: 28, country: "Spain" },
        { name: "Chris Lee", id: 5, age: 35, country: "South Korea" },
        { name: "Sophie Brown", id: 6, age: 27, country: "Australia" },
        { name: "Ahmed Ali", id: 7, age: 32, country: "Egypt" },
        { name: "Maria Garcia", id: 8, age: 29, country: "Mexico" },
        { name: "Ravi Patel", id: 9, age: 26, country: "India" },
        { name: "Yuki Tanaka", id: 10, age: 31, country: "Japan" }
      ];
  return (
    <div>
      {
        persons.map(
            person => 
            <div>
                <p>Hello my name is {person.name}, I am {person.age} old years I come from {person.country}</p>
            </div>
            )
      }
    </div>
  )
}

export default ObjectList
