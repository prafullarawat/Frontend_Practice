var name = "Prafulla";
console.log(name); //It Will Alert Msg - Prafulla

var namee;
console.log(namee); //Undefined - As namee Is Only Declared

var marks = 85;
console.log(name, namee, marks);

const surname = "Rawat";
//surname = "PRawat"; //Uncaught TypeError: Assignment to constant variable.
console.log(surname);

var city = "Ahmednagar"; //Var -
{
  let city = "Shrirampur";
  console.log(city);
}
console.log(city);

const arr1 = [12, 15, 18, 9];
//arr1 = [2,4,5]; //We Can't Redeclare As arr1 Is Const
arr1.push(10); //We Can Perform Operations

console.log(arr1);
