export class MyService{
static instance : MyService | null = null;
  private constructor(private name: string){

  }
  getName(){
    return this.name;
  }
  static create(name: string){
    if(MyService.instance == null){
      console.log('deberia entrar una sola vez')
      MyService.instance = new MyService(name)
    }
    return MyService.instance;
  }
}
const myService1 = MyService.create('Servicio 58');
console.log(myService1.getName());

const myService2 = MyService.create('Servicio 2');
console.log(myService2.getName());

const myService3 = MyService.create('Servicio 3');
console.log(myService3.getName());

const myService4 = MyService.create('');
console.log(myService4.getName());

console.log(myService1===myService2);
