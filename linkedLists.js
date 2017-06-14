//LINKED LISTS
//In a nutshell: like an array except instead of being stored
//in one big block of memory, each element is stored at a
//different place in memory, and the list is held together
//by pointers accompanying each element that point to the
//next one.

function LinkedList(){

  //initialize the helper class Node
  //to represent the item we want to
  //add to the list.element attribute
  //is the value we want to add, and the
  //next attribute is a pointer to the
  //next item in the list
  var Node = function (element){
    this.element = element;
    this.next = null;
  };

  //length property stores how many elements are
  //in the list
  let length = 0;
  //head serves as a reference to the first node
  let head = null;

  //add new item to the end of the list
  this.append= (element)=>{

    //declare a new Node, and pass in
    //it's value as element
    var node = new Node(element),
        current;

    //this first scenario is for an empty
    //list, where the new node becomes
    //the first Node in the list
    if(head === null){
      head = node;
    } else{

      //use current as a reference value
      //for the beginning of the list
      current = head;

      //loop the list until the last
      //item is found. we know we reached
      //the end when current.next is null
      while(current.next){
        current = current.next;
      }

      //once you get to it it, make the
      //last node to point to the new
      //one, thereby adding it to the
      //end of the list
      current.next = node;
    }

    //dont forget to iterate the length of the
    //list!
    length ++;
  };

  //insert new item at a specified position
  //in the list
  this.insert= (position, element)=>{

    //check for out-of-bounds values in the input
    //if invalid inputs, we return false (see below)
    if(position >= 0 && position <= length){

      //Node is the new element to be inserted
      //current is an initial refernce for the head
      //and used to keep track of where we are as we iterate
      //through the list.
      //previous keeps track of whatever value is right before
      //current
      //index is used as an iterator as we go through the list
      var node = new Node(element),
          current = head,
          previous,
          index = 0;

      //first handle insertion into the first position
      if(position === 0){
        //make the next position of the new node
        //point to the current first node, and make
        //the new node the head
        node.next=current;
        head = node;
      }
        //or we go through the list until we get to
        //the desired position
        else{
          while(index++ < position){
            previous = current;
            current = current.next;
          }
          //make the new value's next point to
          //the current value in the desired position,
          //and the next value of the previous value point
          //to the new node, essentially sticking it in between
          //the two of them
          node.next = current;
          previous.next = node;
      }
      //iterate the length!!
      length ++;
      return true;

    }else{
      //return false if the initial input was invalid
      return false;
    }

  };

  //remove a specific value from the list
  this.remove= (element)=>{
    //call the pre-written indexOf function
    //to find where this element is on
    //the list
    var index = this.indexOf(element);

    //then call the pre-written removeAt
    //to remove the element from it's
    //index position
    return this.removeAt(index);
  };


  //remove item from a specified position
  this.removeAt= (position)=>{

    //first verify that the position input
    //is valid. includes any value from 0
    // to the length of the list. return
    //null if not valie (see below)
    if(position > -1 && position < length){

      //declare the variables to be used. current
      //will be a reference to the first element
      //and use it to iterate through the list
      var current = head,
          previous,
          index=0;

      //first check for removing the first item, and
      //if so just change the head from the
      //current current first item to the second item,
      //thereby removing the current first element
      if(position === 0){
        head = current.next;
      }

        //now for item other than the first, we iterate
        //through the list till we reach the desired position
        //(using index for internal control and increment). the
        //current variable will be the reference to the element of
        //the list we are looping through at any given point. previous
        //is of course a reference to the value that comes before the current
        //element.
        else{
        while(index++ < position){
          previous = current;
          current = current.next;
        }

        //once we get to the right positon, we remove
        //the element by making previous.next BYPASS
        //the current element, and point straight to
        //the once after it, thereby removing the current
        //element from the list
        previous.next = current.next;
      }

      //dont forget to decrement the length!
      length--;

      return current.element;
    }
      //if the initial input wasnt valid
      //we just return null
      else{
        return null;
    }
  };

  //return the index of a specific value.
  //if said value isnt in the list, it
  //returns -1
  this.indexOf= (element)=>{

    //current is a refernce to the head and used
    //to iterate through the list.
    //index is used to iterate the count number
    //position
    var current = head,
        index = -1;

    //iterate through all the element
    while(current){
      //check if the current element is
      //the one we're looking for
      if(element ===  current.element){
        //if we find it, we return where
        //the index is at
        return index
      }
      //if not, keep iterating through
      index++;
      //to the next node in the list
      current = current.next;
    }
    //if we don't find the value,
    // we return -1
    return -1;
  };

  //returns true if list is empty
  //false if otherwise
  this.isEmpty= ()=>{
    return length===0;
  };

  //returns how many elements are in
  //the list. similar to the .length
  //function on an array
  this.size= ()=>{
    return length;
  };

  //because we're using a proprietary Node
  //class for each data element, we need to overwrite
  //the default toString function to output only the
  //element value and not the positional data
  this.toString= ()=>{

    //current is a reference for the first element
    //string is the output variable
    var current = head,
    string='';

    //iterate through each element, using current
    //will stop when current is null
    while(current){
      //concatenate each element to the string
      //as we go through
      string += (current.element + ' ');
      //iterate to the next element
      current = current.next;
    }

    //return the string with the list's contents
    return string;

  };

  //print the goddamn thang
  this.print= ()=>{
    console.log(this.toString());
  };
}

var list = new LinkedList();
list.append(13);
list.append(15);
list.append(13);
list.insert(1,13);

list.print();

//DOUBLY LINKED LIST
//In a nutshell: Just like a linked list, except instead
//of just a pointer to the next element, there are pointers
//to both the element after and before any given element.
//Allows us to iterate both forward and backwards through
//a set of data and change directions of iteration at any
//given point, both of which are not possible with a singly
//linked list.

function DoubleLinkedList(){

  //declare new node variable
  //with a pointer to both the next
  //and previous element, both initially
  //set to null
  var Node = function(element){
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  //length again holds the length of the list
  var length = 0;
  //head keeps reference of the first element in the list
  var head = null;
  //tail keeps reference of the last element in the list
  var tail = null;

  //insert a new element at any given position

  this.insert = (position, element)=>{

    //check for out-of-bounds values. return
    //false if input not valid (see below)
    if(position >= 0 && position <= length){

      var node = new Node(element),
          current = head,
          previous,
          index=0;

      //first check for adding to the first position
      if(position === 0){
        //if the list is empty, then just point the null
        //head and tail to the new element
        if(!head){
          head = node;
          tail = node;
        }
        //if it's not empty, point the new
        //elemnt's next value to the current
        //first node, point the current first's
        //prev value to the new node, and set
        //the new node as the head of the list
         else{
          node.next = current;
          current.prev = node;
          head = node;
        }
      }
      //the last element is also a special case
      //because we are controlling the pointer to
      //the last element (tail).
      else if (position === length){
        //assign the iterator (current)
        //to be the tail, and point it's
        //next pointer to the new node.
        //then point the new node's prev
        //pointer to the old last node.
        //and finaly assign the new node
        //to be the tail
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      }
      //and if we're inserting an element
      //in the middle of the list...
      else{
        //iterate through the list until
        //we reach the desired position
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        //point the new node's next
        //value to the value at the
        //current position
        //set the next value of the
        //previous position to the new node
        node.next = current;
        previous.next = node;

        //set the prev value of the
        //current node to the new node
        //and the new node's prev value
        //to the previous node
        current.prev = node;
        node.prev = previous;
      }
      //don't forget to iterate the length!
      length++;

    } else{
      //return false if the initial input
      //was an out-of-bounds value/invalid
      return false;
    }
  };

  //Remove an element from the list at a given position
  this.remove = (position)=>{

    //check for out-of-bounds/invalid inputs
    //and return false if we get any of them
    if(position >= -1 && position<length){

      //current is a reference to the first
      //element, previous to the element before
      //current, and index used as the iterator
      var current = head,
          previous,
          index = 0;

      //first check for the case of removal
      //of the first position in the list...
      if(position === 0){
        //simply change the position of the
        //new head to the element after the
        //one we want to delete
        head = current.next;

        //if the list only has one element in it
        //update the tail to null as well
        if(length === 1){
          tail = null;
        }
          //if not, set the prev value of the new head
          //to null
          else{
            head.prev = null;
          }
      }
      //then check if we are removing from the last position...
      else if(position === length-1) {
        //in which case we would set current
        //to the tail, then set the new tail
        //to be the formerly second-to-last
        //value, and the next value of the
        //new last element to null
        current = tail;
        tail = current.prev;
        tail.next = null;
      }
      //and finally in the last case, we would iterate
      //through the list till we got to the desired position
      else{
        while(index++ < position){
          previous = current;
          current = previous.next;
        }

        //set the next value of the element
        //before the one we are deleting to the
        //one after it, essentially skipping past
        //the deleted element.
        //then go to the prev value of the element
        //after the one we're deleting, and set it
        //to the element before, essentially skipping
        //past it backwards as well
        previous.next = current.next;
        current.next.prev = previous;
      }
      //don't forget to decrement the length!!
      length--;

      return current.element;

    } else{
      //return null if we recieved an
      //out-of-bounds/invalid input
      return null;
    }
  };




};


var double = new DoubleLinkedList();

double.insert(0,13);
double.remove(0);


//AN ASIDE ON CIRCULAR LINKED LISTS

  //A circular singly linked list has a tail.next value pointing to the
  //head instead of null

  //A circular doubly linked list has a tail.next value pointing to the
  //head instead of null, and a head.prev pointing to the tail
