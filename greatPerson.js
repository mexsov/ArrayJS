
function greetPerson(name = 'Guest', message = 'Welcome'){
  const defaultMessage = message + ' ' + name 
  return defaultMessage
}
const newGreeting = greetPerson().concat(' ','Tomas');

 
console.log(newGreeting);
 
console.log(greetPerson())
