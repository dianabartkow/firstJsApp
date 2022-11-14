// ES6
import { Person } from './entity/Person.js'

let me = new Person('Damian', 26);
me.present();

// Take object from DOM
let appContainer = document.getElementById('app');
appContainer.innerHTML = `<strong>Blablabla</strong>`;

let button = document.createElement('button');
button.innerHTML = 'Test';
appContainer.appendChild(button);

let counter = 0;

button.onclick = () => {
    counter++;
    button.innerHTML = counter;
};

let persons = [
    {
        name: 'Diana',
        height: 160
    },
    {
        name: 'Damian',
        height: 190
    }
];
console.log(persons);

let newPersons = persons.filter(person => person.height > 170);
console.log(newPersons);
