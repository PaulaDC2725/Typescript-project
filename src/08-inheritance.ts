export class Animal{
  constructor(
    public name: string
  ){}
  move(){
    console.log(`${this.name} Se está moviendo`);
  }
  greeting(){
    return `Hello, I'm ${this.name}`;
  }
}
export class Dog extends Animal{

  constructor(name: string,
    public owner:string){
    super(name);
  }
  woof(times: number): void{
    for (let index = 0; index < times; index++) {
      console.log('Woof');
    }
  }
}
// const Megan = new Animal('Megan');
// Megan.move();
// console.log(Megan.greeting());

const Lucky = new Dog('Megan', 'Jhon');
Lucky.move();
console.log(Lucky.greeting());
Lucky.woof(6);
console.log('el dueño de',Lucky.name,'se llama',Lucky.owner);

