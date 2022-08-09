// function getValue(value: unknown){
//   return value;
// }
// function getValue(value: string | number){
//   return value;
// }
function getValue<myType>(value: myType){
  return value;
}
getValue(12).toFixed();
getValue('12').toUpperCase;
getValue< number[]>([1,2,3]).map;
