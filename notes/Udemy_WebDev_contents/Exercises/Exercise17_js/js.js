/*	1. Print -10 to 19
var myNum = -10;
for (var i = myNum; i <= 19; i++) {
	console.log(i);
}
*/

/* 2. Print even nums from 10 to 40
for (var i = 10; i <= 40; i += 2) {
	console.log(i);
}
*/

/* 3. Print odd nums from 300 to 333
for (var i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}
*/

// 4. Print nums divisible by 5 AND 3 between 5 and 50
for (var i = 5; i <= 50; i++) {
	if ((i % 5 === 0) && (i % 3 === 0)) {
		console.log(i);
	}
}

