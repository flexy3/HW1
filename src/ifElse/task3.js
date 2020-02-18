// let a = 2;
// let b = 4;
// let c = 3;
function summ(a,b,c)
{
if (a >= 0 && b >= 0 && c >= 0)
	console.log (a + b + c);
else if (a < 0 && b < 0 && c < 0)
	console.log ("Все числа меньше 0");
else if (a < 0 || b < 0 || c < 0)
	console.log ("Одно из чисел меньше 0");
else if (a >= 0 && b >= 0 )
	console.log (a + b);
else if (b >= 0 && c >= 0)
	console.log (b + c);
else if (a >= 0 && c >= 0)
	console.log (a + c);
}
console.log(summ(a, b, c))