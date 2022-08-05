export class Animal{
    constructor(
      protected name: string
    ){}
    move(){
      console.log(`${this.name} Se está moviendo`);
    }
    greeting(){
      return `Hello, I'm ${this.name}`;
    }
    protected doSomething(){
      console.log('dooo');
    }

  }
  export class Dog extends Animal{

    constructor(name: string,
      public owner:string){
      super(name);
    }
    woof(times: number): void{
      for (let index = 0; index < times; index++) {
        console.log(`Woof! ${this.name}`);
      }
      this.doSomething();
    }
    move() {
      console.log(`${this.name} está moviendose como un perro`);
      super.move()
    }
    get nameDog(): string{
      return this.name;
    }
  }
  // const Megan = new Animal('Megan');
  // Megan.move();
  // console.log(Megan.greeting());

  const Lucky = new Dog('Megan', 'Jhon');
  // Lucky.name = 'Otro nombre'
  Lucky.woof(1);
  // console.log('el dueño de',Lucky.nameDog,'se llama',Lucky.owner);
  Lucky.move();


