<script>
function chetnost(a,b)
{
 if (a % b == 0)
 {
  return (a * b);
 }
  return (a + b);
}
 
var a = +prompt("Введите первое число");     
var b = +prompt("Введите второе число");    
alert(chetnost(a,b));
</script>