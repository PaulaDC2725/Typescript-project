import {Animal,Dog} from './09-protected';

const animal = new Animal('Andy');
animal.greeting();
const Lucky = new Dog('Apolo','Tomas');
Lucky.greeting();
Lucky.woof(5);
Lucky.move();
