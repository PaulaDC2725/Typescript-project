
export class MyDate{
  year: number;
  month: number;
  day: number;

  constructor(year: number,month: number,day: number){
    this.year= year;
    this.month =month;
    this.day = day;
  }

  printFormat(): string{
    return `${this.day}/${this.month}/${this.year}`;
  }
  add(amount: number, type: 'days'|'months'|'years'){
    if(type==='days'){
      if (this.month == 12) {
        let diaMayor = 31;
        let diasRestantes = diaMayor - this.day;
        let diferencia = amount - diasRestantes
       if(diferencia != 0 ){
        this.day -= this.day;
       this.day += diferencia;
       this.month=0
        this.month+=1;
        this.year+=1;
      }
      if(diferencia==0){
        this.day += amount ;
       }
       if(diferencia >=32){
        this.day = diferencia - diaMayor;
        this.day =this.day + 1;
        // this.month=0
          this.month+=1;
          return this.day ;
       }
      return this.day;
      return this.month;
      return this.year

       }
      if (this.month == 2) {
       let diaMayor = 28;
       let diasRestantes = diaMayor - this.day;
       let diferencia = amount - diasRestantes
      if(diferencia != 0 ){
       this.day -= this.day;
      this.day += diferencia;
       this.month+=1;
     }
     if(diferencia==0){
       this.day += amount ;
      }
      if(diferencia >=29){
       this.day = diferencia - diaMayor;
       this.day =this.day + 1;
         this.month+=2;
         return this.day ;
      }
     return this.day;
     return this.month;
     return this.year

      }
      if(this.month==12 && this.day<31){
        let diaMayor=31;
        let diasRestantes = diaMayor - this.day;
        let diferencia = amount - diasRestantes
       if(diferencia != 0 ){
        this.day -= this.day;
       this.day += diferencia;
        this.month=0;
        this.month+=1;
        this.year +=1;
      }
      if(diferencia==0){
        this.day += amount ;
       }
       if(diferencia >=32){
        this.day = diferencia - diaMayor;
        this.day =this.day + 1;
          this.month+=2;
          return this.day ;
       }
      return this.day;
      return this.month;
      return this.year

      }
        let diaMayor=31;
        let diasRestantes = diaMayor - this.day;
        let diferencia = amount - diasRestantes
        console.log(diaMayor,diasRestantes,diferencia,this.day);
        if(diferencia > 0){
          if(diferencia >=32){
            this.day = diferencia - diaMayor;
            this.day =this.day + 1;
              this.month+=2;
              return this.day ;
           }
            if(diferencia != 0 ){
             this.day -= this.day;
            this.day += diferencia;
             this.month+=1;
           }
           if(diasRestantes == 0){
             this.day =0;
             this.day + amount;
           this.month +=0
           }
           if (this.month==12 && this.day>=31) {
             this.day = 0
             this.month = 0;
             this.month +=1
             this.year += 1
             this.day += amount;
           }
        }else if(diferencia < 0){
          this.day += amount;
        }

      }

    if(type==='months'){
      if(this.month>=12){
          this.year += 1;
          for (let index = 0; this.month>=12; index++) {
            this.month = 0;
          this.month+=1;
          }
          return this.month;
      }
      this.month+=amount;
    }
    if(type==='years'){
      this.year+=amount;
    }
  }
}
const myDate = new MyDate(2002,10,27);

console.log('Mi fecha de nacimiento es: ' ,myDate.printFormat());

myDate.add(10,'days');

console.log('Mi fecha final1 es: ', myDate.printFormat());
const myDate2 = new MyDate(2020,2,25);
myDate2.add(10,'months');

console.log('Mi fecha final2 es: ', myDate2.printFormat());
const myDate3 = new MyDate(2020,2,25);
myDate3.add(10,'years');

console.log('Mi fecha final3 es: ', myDate3.printFormat());
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
