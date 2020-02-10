<script>
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let c = +prompt("Введите третье число");

let mult = a + b + c;

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
    
</script>