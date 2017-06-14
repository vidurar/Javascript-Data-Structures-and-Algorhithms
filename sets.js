//SETS
//A collection of items that aren't in any particular
//order and consists of unique elements (meaning
//they can't be repeated). Uses the mathematical
//concept of finite sets, but as applied to a
//Computer Science Data Structure

//held within object brackets   {}
//objects in javascript do not allow
//you to have two diferent properties
//in the same key, which guaruntees
//unique elements in each set


//Has basic operations including union,
//intersection, and difference

//Skeleton of the set class
function Set (){
  var items = {};

  //ADD METHOD: Given a value, we
  //check if it exists in the set already,
  //and if not we add it in and
  //return true to indicate that
  //the value was successfully added
  //and return false otherwise.
  this.add = (value)=>{
    if (!this.has(value)){
      //We add the value as a key
      //and value because it will
      //help us search for the value
      //if we store with a key
      items[value] = value;
      return true;
    }
    return false;
  };


  //REMOVE METHOD: first verify that
  //the value exists in the set, then
  //delete it from the set and return
  //true to indicate success, or
  //false otherwise.
  this.remove = (value)=>{
    if (this.has(value)){
      delete items[value];
      return true;
    }
    return false;
  };

  //Check if a value is present in the set.
  //The hasOwnProperty function returns a
  //boolean stating whether the object has
  //the specified property or not
  this.has = (value)=>{
    return items.hasOwnProperty(value);
  };

  //CLEAR METHOD: clears items
  //in the array by resetting it
  //to an empty object
  this.clear=()=>{
    items = {};
  };

  //SIZE METHOD: determines how many
  //items are in the set
  this.size=()=>{
    //use the length property of the
    //array of keys in the object
    // to find how many there are
    return Object.keys(items).length;
  };

  //VALUES METHOD: extract all the
  //properties of the set and return
  //it as an array.
  this.values = ()=>{
    return Object.keys(items);
  };


}

//TESTS

var set = new Set();

set.add(1);
console.log(set.values());//Outputs: ["1"]
console.log(set.has(1));//Outputs: true
console.log(set.size());//Outputs: 1

set.add(2);
console.log(set.values()); //Outputs: ["1","2"]
console.log(set.has(2));//Outputs: true
console.log(set.size());//Outputs: 2

set.remove(1);
console.log(set.values()); //Outputs: ["2"]

set.remove(2);
console.log(set.values());//Outputs: []

//SET OPERATIONS

//UNION: Given one set, returns a new set
//with elements from both given sets


//INTERSECTION: Given two sets, returns a new
//set with the elements which existed in both
//input sets

//DIFFERENCE: Given two sets, returns a new set
//with all elements that exist in the first set
//but not the second

//SUBSET: confirms whether a given set is a subset
//of another set
