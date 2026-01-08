var firstName = 'Lilian';
console.log(firstName);

//var lastName = 'Nwagbo';
var age = 26;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Billonaire Real estate consultant';
console.log(job);

console.log(firstName + ' '+ age);

var job, isMarried;
isMarried = false;

console.log(firstName +  ' is a' + age + 'year old'  +  job  + '.is she married?' + isMarried);
alert(firstName +  ' is a' + age + 'year old'  +  job  + '.is she married?' + isMarried);
var lastName = prompt('What is her last name?');
console.log(firstName + ' ' + lastName);

//BASIC MATH OPERATORS
var year, yearJohn, yearLilian;
var year = 2025;
ageJohn = 28;
ageLilian = 24;
var yearJohn = 2025 - ageJohn;
var yearLilian = year - ageLilian;
console.log(yearJohn);
console.log(year + 2);
console.log(year / 10);

//LOGICAL OPERATORS
var johnOlder = ageJohn > ageLilian;
console.log(johnOlder);

//typeOf operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Lilian is older than John');
var x;
console.log(typeof x);

//OPERATOR PRECEDENCE
var now = 2018;
var yearJohn = 1982;
var fullAge = 16;

var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

//GROUPING
var ageJohn = now - yearJohn;
var ageLilian = 32;
var average = ageJohn + ageLilian / 2;
console.log(average);

//MULTIPLE ASSIGNMENTS
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//MORE OPERATORS
x *= 2;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);




