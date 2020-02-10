<script>
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let c = +prompt("Введите третье число");

let mul = a * b * c;
let sum = a + b + c;

if (mul > sum)
  alert(mul + 3);
else
  alert(sum + 3);
</script>