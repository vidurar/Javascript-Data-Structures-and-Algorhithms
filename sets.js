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

  //SET OPERATIONS

  //UNION: Given one set, returns a new set
  //with elements from both given sets
  this.union = (otherSet)=>{
    //Create a set to represent
    //the union of the other sets
    var unionSet = new Set();

    //iterate through the first set
    //and add all the values to the new
    //union set
    var values = this.values();
    for (var i=0; i<values.length; i++){
      unionSet.add(values[i]);
    }

    //do the same thing of the other/second set
    values = otherSet.values();
    for (var i=0; i<values.length;i++){
      unionSet.add(values[i]);
    }

    return unionSet;

  };


  //INTERSECTION: Given two sets, returns a new
  //set with the elements which existed in both
  //input sets
  this.intersection = (otherSet)=>{
    //New set to store the common
    //elements in
    var intersectionSet = new Set();

    //Isolate and iterate through the
    //values of the primary set
    var values = this.values();
    for (var i=0;i<values.length;i++){
      //Verify that these values also
      //exist in the other set
      if(otherSet.has(values[i])){
        //and if so, add the common
        //values to the new set
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  };

  //DIFFERENCE: Given two sets, returns a new set
  //with all elements that exist in the first set
  //but not the second/other
  this.difference = (otherSet)=>{
    //initialize another storage set
    //for the output
    var differenceSet = new Set();

    //iterate through the values
    var values = this.values();
    for(var i=0;i<values.length;i++){
      //make sure that the second set
      //DOESN'T have a value from the
      //first, and then add it to the
      //output set
      if(!otherSet.has(values[i])){
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  };



  //SUBSET: confirms whether a given set is a subset
  //of another set. returns a boolean
  this.subset = (otherSet)=>{
    //check that the primary set is smaller
    //than the other set. if it's not, there's
    //no way the former can be a subset of the latter
    if(this.size()>otherSet.size()){
      return false;
    }


      else{
        //iterate through the elements, and check
        //if any of the values in the primary set
        //DON'T match the other set. If even one of
        //them doesn't, then return false.
        var values = this.values();
        for(var i=0;i<values.length;i++){
          if(!otherSet.has(values[i])){
            return false;
          }
        }
        //If all of them match and the loop finishes,
        //then we know the main set is a subset of
        //the other set, and we return true
        return true;
    }
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

//Union tests
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();
setB.add(4);
setB.add(5);
setB.add(6);

var unionAB = setA.union(setB);
console.log(unionAB.values());//Output: ["1","2","3","4","5","6"]


//Intersection tests
var setC = new Set();
setC.add(1);
setC.add(2);
setC.add(3);

var setD = new Set();
setD.add(2);
setD.add(3);
setD.add(4);

var intersectionAB = setC.intersection(setD);
console.log(intersectionAB.values());//Output: ["2","3"]


//Difference tests
var setE = new Set();
setE.add(1);
setE.add(2);
setE.add(3);

var setF = new Set();
setF.add(2);
setF.add(3);
setF.add(4);

var differenceAB = setE.difference(setF);
console.log(differenceAB.values());//Output: ["2","3"]

//Subset tests
var setG = new Set();
setG.add(1);
setG.add(2);


var setH = new Set();
setH.add(1);
setH.add(2);
setH.add(3);

var setI = new Set();
setI.add(2);
setI.add(3);
setI.add(4);

console.log(setG.subset(setH));//Output: ["2","3"]
console.log(setG.subset(setI));//Output: ["2","3"]
