function greeter(person: string | string[]) {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //This will work correctly

let user2 = "Jane Doe";
console.log(greeter(user2)); //This will also work correctly