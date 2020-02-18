var d = new Date();
var n = d.getDay();

function getaDay (){

    switch(days){
    case 0:
    console.log('Воскресенье');
        break;
    case 1:
    console.log('Понедельник');
        break;
    case 2:
    console.log('Вторник');
        break;
    case 3:
    console.log('Среда');
        break;
    case 4:
    console.log('Четверг');
        break;
    case 5:
    console.log('Пятница');
        break;
    case 6:
    console.log('Суббота');
        break;
}
}
console.log((2), n)
// var days = [
//   'Воскресенье',
//   'Понедельник',
//   'Вторник',
//   'Среда',
//   'Четверг',
//   'Пятница',
//   'Суббота'
// ];
// console.log(days[n])