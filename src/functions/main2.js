<script>
var num = prompt("Write a number");
function convertor(n, a, b) {
    n = parseInt(n);
    if (n < 20) {
        return ((b && !n) ? '' : a[0][n]);
    }
    if (n >= 100) {
        return (a[2][('' + n).substr(0, 1)] + ' '
            + arguments.callee(('' + n).substr(1), a, true));
    }
    return (a[1][parseInt(n / 10)] + ' ' + ((n % 10)
                                           ? a[0][n % 10]
                                           : ''));
}
var arr = [
    ["ноль", "один", "два", "три", "четыре", "пять", "шесть",
        "семь", "восемь", "девять", "десять", "одиннадцать",
        "двенадцать", "тринадцать", "четырнадцать", "пятнадцать",
        "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"],

    [,,"двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят",
        "семьдесят", "восемьдесят", "девяносто"],

    [,"сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот",
        "семьсот", "восемьсот", "девятьсот"]
];
alert(convertor(num, arr));
</script>