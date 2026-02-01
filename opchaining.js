const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: {
      name: 'USA',
      code: 'US'
    }
  }
}
console.log(person?.address?.country?.name); // USA
console.log(person?.job?.title); // undefined
console.log(person["name"]); // John
console.log(person?.["address"]?.["city"]); // New York
