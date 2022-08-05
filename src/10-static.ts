console.log('Versión original Math.PI =>',Math.PI);
console.log('Versión original Math.max =>',Math.max(1,2,8,9,6,5,4,8,5,10,25,1,5));

class MyMath{
 static readonly PI = 3.14;

 static max(...numbers: number[]){
  // console.log('los numeros ingresados son:',numbers);
  return numbers.reduce((max, item)=> max >= item ? max: item);
 }
}
console.log('Versión MyMath.PI =>',MyMath.PI);
const numbers =[12,2,1,1112,9,30000];
console.log('Versión MyMath.max =>',MyMath.max(...numbers));
console.log('Versión MyMath.max =>',MyMath.max(-1,-9,-8));
