//WHAT IS STRICT MODE?

//it's a string because not all browsers supports it
//as a keyword, so it was first implemented as a string
'use strict';

//or

function newCode(){
  'use strict';
}

//prevents you from using a variable
//before it has been defined.
  //very useful for preventing errors
  //related to syntax errors and
  //accidental global variables

//prevents you from deleting functions
//variables, arguments to functions

//makes eval safer to use by keeping
//stuff defined in eval inside the
//namespace

//________________________________________________________
//________________________________________________________
//________________________________________________________

//DOES JAVASCRIPT PASS VARIABLES BY VALUE OR REFERENCE? 0.0

//Primitive types (strings, numbers, booleans) are passed by value

//Objects are passed by reference

//Passed by value means that something like a 'copy'
//of the data inside said variable is passed.
//Means changes made to things within functions
//ARE NOT reflected in the outer scopes.

//Passed by reference means that a pointer to the
//original object is passed in (similar to 'pointers'
// in C/C++/Java), so changes made within the namespace
//ARE ALSO made in the original object

//________________________________________________________
//________________________________________________________
//________________________________________________________

//WHAT ARE THE DIFFERENT TYPES IN JAVASCRIPT

//Primitive
  //Boolean
  //Number
  //String
  //Null
  //Undefined


//Non-primitive
  //Objects

//typeof(whateverVariable) gives you what type tha variable is
  //all normal with the exception of null evaluating in an object
    //typeof(null) would equal "object"

//Javascript is dynamically typed.

//Null vs Undefined??
  //undefined is used by the JAVASCRIPT ENGINE to denote
  //"no value", or "unknown/uninitialized variables"

  //null is similar to endefined, but can only ever be defined
  //by the PROGRAMMER

  // null == undefined oddly evaluated to true

  //________________________________________________________
  //________________________________________________________
  //________________________________________________________

// == VS ===???

//== just checks value equality

//=== checks for both value and type equality

  //Wierdness
    // 0 == '' = true
    // 0 == '0' = true
      //with ==, the javascript engine actively
      //uses 'type coertion' to evaluate two values
      //to be equal to each other

    // 0 === '' = false
    // 0 === '0' = false

//Just use === be default unless provided with a good reason
//to do otherwise

//________________________________________________________
//________________________________________________________
//________________________________________________________

//WTF is NaN??

//NaN evaluates to the type of number


//Wierdness
    //NaN equal to anything INCLUDING ITSELF
    //is always false

    //checking NaN means you have to use isNaN()
      //for some reason strings with letters
      //also evaluate to true

    //only foolproof wat to check for NaN is
    // by using the !== operator on itself
      //because NaN is the only type not
      //equal to itself

//________________________________________________________
//________________________________________________________
//________________________________________________________

//WHAT ARE SCOPES IN JAVASCRIPT?

//variables can exist in either a function/local
//scope or the local scope

//What's variable hoisting?
  //Javascript 'hoists' all variable declarations
  //to the top of the namespace where it's delcared
  //in

//What is the scope chain?
  //the scoep chain is defined by how the program
  //is written in the file
    //"lexically", or in the order in which the code is
    //written on the page

//What's IIFE and why might you use it?
  //Immediately Invoked Function Expression
  //To prevent internal function variables from
  //leaking out into the global namespace

//What are function closures?

//closures can refer to outer scope variables,
//even if the function in question has exited

var foo = [];
for (var i =0; i<10; i++){
  foo[i] = function(){return i};
}

console.log(foo[0]());
console.log(foo[1]());
console.log(foo[2]());

//All three avaluate to 10
// To get them to return 0,1,2, do this...
var boo = [];
for (var i =0; i<10; i++){
  (function(y){
    boo[i] = function(){return y};
  })(i);
}

console.log(boo[0]());
console.log(boo[1]());
console.log(boo[2]());

//The first set of resutls was because closures don't
//point to the refernce in memory of a variable, but
//the current value of the variable, not the value
//when the closure was created

//________________________________________________________
//________________________________________________________
//________________________________________________________

//WHAT'S THE this KEYWORD??

//this is determined by the way in which a function
//is called. It refers to the calling context of a function
//and if not refers to the global variable.
