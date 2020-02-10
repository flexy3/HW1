let mult = a + b + c;
let a = 2;
let b = 4;
let c = 5;

if (a >= 0 && b >= 0 && c >= 0)
	alert (mult);
else if (a < 0 && b < 0 && c < 0)
	alert ("Все числа меньше 0");
else if (a < 0 || b < 0 || c < 0)
	alert ("Одно из чисел меньше 0");
else if (a >= 0 && b >= 0 )
	alert (a + b);
else if (b >= 0 && c >= 0)
	alert (b + c);
else if (a >= 0 && c >= 0)
	alert (a + c);
console.log(mult);