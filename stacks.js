//Stacks

function Stack(){
  //array to act as a container for the stack
  var items = [];

  //adds a new item(s) to the top of the stack
  this.push = function(element){
    items.push(element);
  };

  //removes item from the top/end of the stack
  this.pop = function(){
    return items.pop();
  };

  // returns the element at the top of the stack,
  // but doesn't modify the stack at all
  this.peek = function(){
    return items[items.length-1];
  };

  //returns true if the stack doesnt
  //have any elements and false
  this.isEmpty = function(){
    return items.length==0;
  };

  //removes all elements from the stack
  this.clear = function(){
    items = 0;
  };

  //returns how many elements the stack contains
  //similar to the length property of an array
  this.size = function(){
    return items.length;
  };

  //output content of the stack on the console
  this.print = function(){
    console.log(items.toString());
  };
}

var stack = new Stack;
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);
console.log(stack.peek());

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size());
stack.print();


//DECIMAL TO BINARY

function divideBy2(decNumber){

  //declare variables for the Stack, each value
  //to be pushed into the stack, and the
  //binary string to be returned at the end
  var remStack     = new Stack(),
      rem,
      binaryString = '';


  //while the result of division by 2 is not 0,
  //take the remainder and push it into the stack
  //and update the decNumber to the value that
  //needs to be divided by two next
  //.floor is used because js doesnt distinguish
  //integers from floats
  while (decNumber>0){
    rem = Math.floor(decNumber%2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber/2);
  };

  //pop the elements off the stack and into the
  //string until the stack is empty
  while(!remStack.isEmpty()){
    binaryString += remStack.pop().toString();
  };

  return binaryString;

};

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));

//DECIMAL TO ANY BASE VALUE

function baseConverter(decNumber,base){

  //same as above but digits is included
  //to account for hexadecimal values
  var remStack = new Stack(),
      rem,
      baseString = '',
      digits = '123456789ABCDEF';

  //same as above but base is substitued where
  //just 2 used to be
  while (decNumber>0){
      rem = Math.floor(decNumber%base);
      remStack.push(rem);
      decNumber = Math.floor(decNumber/base);
    };

  //same as above but values from the digits string are
  //used instead of the toString function
  while(!remStack.isEmpty()){
    baseString += digits[remStack.pop()];
    };

  return baseString
};

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
