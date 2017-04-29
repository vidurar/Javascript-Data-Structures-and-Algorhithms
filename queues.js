//QUEUES
function Queue(){

  //array to act as a data structure representing
  //the queue
  var items = [];

  //add new item at the back of the queue
  this.enqueue = element => items.push(element);


  //remove the first item from the queue
  this.dequeue= ()=>items.shift();


  //returns the first element in the queue,
  //the first one added, and the first one
  //that will be removed
  this.front = ()=> items[0];


  //returns true if there's nothing in the
  //queue and false if its not
  this.isEmpty = () => items.length==0;

  //returns how many elements the queue has
  this.size = () => items.length;


  //print the contents of the queue
  this.print = () => console.log(items.toString());


};


var queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Carmello');

queue.print();
queue.size();
queue.dequeue();
queue.dequeue();
queue.print();

//PRIORITY QUEUE

function PriorityQueue(){

  var items = [];

  //creation of a special element containing
  //the element to be added and its priority
  function QueueElement(element, priority){
    this.element = element;
    this.priority = priority;
  };

  this.enqueue = (element,priority)=>{
    var queueElement = new QueueElement(element,priority);

    //if the queue is empty, just add the element
    if(this.isEmpty()){
      items.push(queueElement);
    }
    //if it's not empty, compare the element to
    //the rest of the element. after finding the
    //first element with a higher priority number than
    // the one to be inserted, we insert the new
    //one right before it (higher number is lower priority).
    //this also respects element of the same priority which
    //were added earlier
    else{
      var added = false;
      for (var i=0;i<items.length;i++){
        if(queueElement.priority < items[i].priority){
          items.splice(i,0,queueElement);
          added=true;
          break;
        }
      }
      //if the priority number of the element is greater than
      //anything already in the queue, then we just stick it
      //at the end
      if(!added){
        items.push(queueElement);
      }
    }
  };

  this.dequeue= ()=>items.shift();


  //returns the first element in the queue,
  //the first one added, and the first one
  //that will be removed
  this.front = ()=> items[0];


  //returns true if there's nothing in the
  //queue and false if its not
  this.isEmpty = () => items.length==0;

  //returns how many elements the queue has
  this.size = () => items.length;


  //print the contents of the queue
  this.print = () => console.log(items);
};




var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('John',2);
priorityQueue.enqueue('Jack',1);
priorityQueue.enqueue('Carmello',1);
priorityQueue.print();

//CIRCULAR QUEUE - HOT POTATO

function hotPotato(nameList,num){
  //Implement a new Queue at the beginning of the game
  var queue = new Queue();

  //take the list of names and enqueue all of
  //them in order
  for(var i=0;i<nameList.length;i++){
    queue.enqueue(nameList[i]);
  }

  //initialize storage space for the losers
  var eliminated='';

  //given the input num, iterate through the queue
  //Stops when there is only one person(the winner)
  //left
  while(queue.size()>1){
    for(var i=0;i<num;i++){
      //remove an item from the front of the queue
      //and add it to the end to simulate hot potato
      queue.enqueue(queue.dequeue());
    }
    //once the input num is reached, the person
    //in that position is removed and put in the
    //elimated string
    eliminated = queue.dequeue();
    console.log(eliminated + ' was eliminated from the Hot Potato Game');
  }

  //above loop ejects when only the winner is left,
  //and winner is returned
  return queue.dequeue();

};

var names = ['John','Jack','Carmello','Ingrid','Carl'];
var winner = hotPotato(names,7);
console.log('the winner is: '+winner);
