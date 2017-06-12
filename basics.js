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

var self = this;
//use self to substitute this, to prevent the this from
//resolving to the global variable


//________________________________________________________
//________________________________________________________
//________________________________________________________

//CALL, BIND, AND APPLY!!!???

function a (b,c,d){
  console.log(this);
  console.log(b);
  console.log(c);
  console.log(d);
}

//CALL
//A function acting on a function
  //Simply calls the function, but is better than
  //the usual (); because it allows you to pass in
  //what you want the this keyword to be. Allows us
  //to explicitly stabilize the value of this

  //You can also pass in parameters. the FIRST parameter
  //will still refer to this, but then each following parameter
  //will be passed into the function being called in the respective
  //order

a.call(1,2,3,4);

//APPLY
//Another function you can call on a function
  //Like the call(); function, but the parameters that
  //come after the this declaration are put inside an array

  //Used in preference to call when you want to take in a variable
  //that has a variable number of parameters, like an array for example

a.apply(1,[2,3,4]);


//BIND
//Yet another function that acts on other functions

  //permanently binds the this value of a function with
  //whatever you pass in to the bind(); function

  //only works with function expressions

var a = function a(){
  console.log(this)
}.bind(1);
a();

//or
var b = function b(){
  console.log(this)
};
b = b.bind(1);
b();

//________________________________________________________
//________________________________________________________
//________________________________________________________

//WHAT'S THE PROTOTYPE CHAIN??

//Objects in jaascript are linked to each other in a
//prototype chain, and when looking for a property,
//the javascript engine traverses this chain, and if
//it can't find what it's looking for will end up returning
//undefined.

//You can manually edit the chain with the manual
// __proto__ property or the Object.create() function
//to create an object and assign a prototype to it
//automatically.

//You can pass a properties object param to the second
//parameter of the Object.create() function to bootstrap
//the object created with a default set of functions


//Classical vs Prototypal Inheritance??

  //Classical Inheritance refers to methods of
  //object orientation of languages like C++ and Java,
  //where a class is used as a sort of 'blueprint',
  //and instances of the class are used and passed
  //around throughout an application.

  //Prototypal inheritance, new objects are created from
  //existing objects.
    //Constructor pattern looks like classical inheritance
    //but actually isn't


    //________________________________________________________
    //________________________________________________________
    //________________________________________________________

//How to implement pseudo-classical inheritance in Javascript

//The Constructor pattern
//Uses function constructors to mimic classic inheritance

function Person(first_name, last_name){
  this.first_name = first_name;
  this.last_name = last_name;
};

var dude = new Person("vidura","rajapaksa");
//is the same as
var dude = {};
Person.call(dude,"vidura","rajapaksa");

//The function constructor allows you to make new
//instances of a templated object, without clogging up
//your application, because the prototype chain will
//always end up pointing to the original constructor

//Putting things inside the function constructor lets you
//similate private properties/member variables which you would
//see in typical OO languages like C++ and Java, but by taking
//advantage of closures in Javascript

function Professional(honorific, first_name, last_name){
  Person.call(this, first_name, last_name);
  this.honorific = honorific;
}

//Here we make a professional derived class using the
//base properties from the Person variable.

Professional.prototype = Object.create(Person.prototype);

//This is how we add inheritance to pseudo-classical
//design patterns in Javascript


//WHAT IS THE PROTOPYTAL OO DESIGN PATTERN??

//An alternative which is considered by many better suited
//to Javascript, and much easier to conceptualize in general

//Just refers to the prototype chain. Nothing more. Nothing less.
//Uses Javascripts inherent properties, rather than trying to
//imitate Java/C++ features

var newPerson = {
    full_name: function(){
      return this.first_name + " " + this.last_name;
    }
  }

function personFactory(first_name, last_name){
  var person = Object.create(newPerson);
  person.first_name = first_name;
  person.last_name = last_name;
  return person;
};

var vid = Object.create(newPerson);

//There is no specific inheritance method for this pattern.
//We just keep adding to the prototype chain, and Javascript
//takes care of the rest.


//Pros of Constructor vs. Prototypal
  //Most widely used
  //Similar to common languages like Java and C++
  //Allows for private/member variables

//Pros of Prototypal vs. Constructor
  //More "natural" to Javascript
  //Easier to conceptualize


  //________________________________________________________
  //________________________________________________________
  //________________________________________________________

  //WHAT IS CORS??

//CORS is Cross Origin Resource Shareing
  //allows you to break the same Origin
  //policy of a browser

//What is JSONP??

  //JSON wrapped in a function
  //regular strict tag has no limitations
  //to where it can pull a script from

  //If a JSONP file/snippet is loaded in a script
  //tag, the data is loaded and executed immediately

  //Making a server request without actually making a server
  //request :P

//Event bubbling vs. Event capturing

  //No matter where you click on the page, the event
  //goes from the window to the target (event capturing),
  //and back from the target to the window (event bubbling)

  //Event listeners listen to the bubbling phase by default

//stopPropagation() vs. preventDefault()

  //stopPropagation() stops the event from going
  //down the event capturing phase or up the
  //event bubbling phase.

  //preventDefault() stops the default behavior
  //that the event would have triggered on the target
