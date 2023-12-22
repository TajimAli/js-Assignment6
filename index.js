//Q1...Find Grades by if else....
// let marks=(prompt("Enter Your Number"))
// if(marks>=0 && marks<=10){
//     console.log("Gread E")
// }
// else if(marks >=11 && marks<=20){
//     console.log("Gread D")
// }
// else if(marks>=21 && marks <= 30){
//     console.log("Gread c")
// }
// else if(marks >=31 && marks <=40){
//     console.log("gread B")
// }
// else if(marks >=41 && marks<=50){
//     console.log("gread A")
// }
// else{
//     console.log("Not in a gread")
// }


//Q1...Find Grades by switch condition....
// let marks=Number(prompt("Enter Your Marks"))
// let gread;
// switch(true){
//     case marks>=0 && marks <=10 : gread='E'
//     break;

//     case marks>=11 && marks<=20 : gread= 'D'
//     break;

//     case marks>=21 && marks<=30 : gread='C'
//     break;

//     case marks>=31 && marks<40 : gread='B'
//     break;

//     case marks>= 41 && marks<=50 : gread= 'A'
//     break;

//     default : gread="Gread not found"
// }
// console.log(gread);


//Q2. ........Get Value by if else.........
// let value=(prompt("Enter Your value"))
// if(value==="P" || value==="p" ){
//     console.log("prepBytes")
// }
// else if (value==="Z" || value=== "z"){
//     console.log("Zenith")
// }
// else if (value=== "E"|| value === "e"){
//     console.log("EXpert coder")
// }
// else if (value=== "D" || value ==="d"){
//     console.log("Data structure")
// }
// else {
//     console.log("value is not in a table")
// }


//Q2. ........Get Value by switch case.........
// let value=(prompt("Enter Your value"))
// let result;
// switch(true){
//     case value==="P" || value==="p" : result="PrepBytes"
//     break;

//     case value==="Z" || value==="z" : result="Zenith"
//     break;

//     case value==="E" || value==="e" : result="EXpert coder"
//     break;

//     case value==="D" || value==="d" : result="Data structure"
//     break;

//     default: result= "value invalid"
// }
// console.log(result);


//......Q3. Find the maximum out of three numbers by if elses conditions......
// let a=parseInt(prompt("Enter 1st Number"))
// let b=parseInt(prompt("Enter 2nd Number"))
// let c=parseInt(prompt("Enter 3rd Number"))

// if(a>b && a>c){
//     console.log(a)
// }
// else if(b>a && b>c){
//     console.log(b)
// }
// else{
//     console.log(c)
// }


//......Q3. Find the maximum out of three numbers by if elses conditions......
// let a=parseInt(prompt("Enter 1st Number"))
// let b=parseInt(prompt("Enter 2nd Number"))
// let c=parseInt(prompt("Enter 3rd Number"))
// switch(true){
//     case a>b && a>c :console.log(a)
//     break;

//     case b>a && b>c : console.log(b)
//     break;

//     default :console.log(c)
// }

// .......Q4. Second Smallest by if else conditions......
// let X=parseInt(prompt("Enter 1st Number"))
// let Y=parseInt(prompt("Enter 2nd Number"))
// let Z=parseInt(prompt("Enter 3rd Number"))
// if ((X <= Y && Y <= Z) || (Z <= Y && Y <= X)) {
//     console.log(Y)
// }
// else if ((Y <= X && X <= Z) || (Z <= X && X <= Y)) {
//     console.log(X)
// }
// else {
//     console.log(Z)
// }


// .......Q4. Second Smallest by switch case ......
// let X=parseInt(prompt("Enter 1st Number"))
// let Y=parseInt(prompt("Enter 2nd Number"))
// let Z=parseInt(prompt("Enter 3rd Number"))
// switch(true){
//     case X<=Y && Y<=Z || Z<=Y && Y<=X : console.log(Y)
//     break;

//     case Y<=X && X<=Z || Z<=Z && X<+Y : console.log(X)
//     break;

//     default : console.log(Z)
// }


//Q5........Check whether the triangle is Acute or Obtuse by if else condition..

// let a = parseInt(prompt("Enter value of a"))
// let b = parseInt(prompt("Enter value of b"))
// let c = parseInt(prompt("Enter value of c"))
// if (a * a + b * b > c * c) {
//     console.log('acute')
// }
// else if (a * a + b * b < c * c) {
//     console.log('obtuse')
// }
// else {
//     console.log('not found')
// }


//Q5......Check whether the triangle is Acute or Obtuse switch case..
// let a = parseInt(prompt("Enter value of a"))
// let b = parseInt(prompt("Enter value of b"))
// let c = parseInt(prompt("Enter value of c"))
// switch(true){
//     case a*a + b*b >c*c : console.log("acute")
//     break;

//     case a*a + b*b < c*c : console.log("obtuse")
//     break;
//     default : console.log("Nit found")
// }