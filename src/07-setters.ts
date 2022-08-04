export class MyDate {

  constructor(
   public year: number = 1993,
   private _month: number = 7,
   private _day: number = 9
   ) {}

  printFormat(): string {
   const day = this.addPadding(this.day);
   const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }
  private addPadding(value: number){
   if(value < 10){
     return`0${value}`;
   }

   return`${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
  get day(){
   return this._day;
  }
  get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 ===0;
  }
  get month(){
  return this._month;
  }
  set month(newValue){
     if(newValue > 12 || this._month > 12 || newValue < 1 || this.month <1){
      throw new Error('Mes inválido')
     }else{
     this._month = newValue;
     }
  }
 }
 const myDate = new MyDate(1993, 7, 10);
 console.log('1993',myDate.isLeapYear);
const myDate2 = new MyDate(2000,2,10);
console.log('La fecha original es: ',myDate2.printFormat());
myDate2.month = 12;
console.log('Run',myDate2.month);
console.log('La nueva fecha es: ', myDate2.printFormat());

 // console.log(myDate.day);
 // myDate.day=12;
//  console.log(myDate.getDay());


//  console.log(myDate.printFormat());
// console.log(myDate.day);

// myDate2.month = 58;
// console.log('esto no debe aparecer',myDate2.month);

// const myDate2 = new MyDate(2000, 7, 10);
// console.log('2000', myDate2.isLeapYear);

// const myDate3 = new MyDate(2001, 7, 10);
// console.log('2001', myDate3.isLeapYear);

// const myDate4 = new MyDate(2002, 7, 10);
// console.log('2002', myDate4.isLeapYear);

// const myDate5 = new MyDate(2004, 7, 10);
// console.log('2004', myDate5.isLeapYear);
