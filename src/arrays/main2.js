function f2(array) 
{
	var res = array[0];
	for (var i = 1; i < array.length; i++)
 	{
		if (array[i] > res) 
		{
			res = array[i];
		}
	}
	console.log(res);
}
f2(array);
//console.log(f2([5,3,9,7,2,4]));