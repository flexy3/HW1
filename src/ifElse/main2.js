<script> // не рабочий
function max (a,b,c)
{
if ((a * b * c) > (a + b + c))
return (a * b * c + 3);
}
else ((a + b + c) > (a * b * c))
{
return (a + b + c + 3);
}
var a = +prompt("Введите первое число");     
var b = +prompt("Введите второе число");   
var c = +prompt("Введите второе число");
alert(max(a,b,c));
</script>