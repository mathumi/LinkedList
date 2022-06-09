const Node = require("./Node.js");

class LinkedList {
  head;
  length = 0;
  constructor(element) {
    this.head = null;
    element && this.push(element);
  }

  push(element) {
    if (element === undefined || element === null) {
      return this;
    }
    if (this.head === null) {
      this.head = new Node(element, null);
    } else {
      const tail = new Node(element);
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = tail;
    }
    this.length = this.length + 1;
    return this;
  }

  insertAt(element, index) {
    if (element === undefined || element === null) {
      return this;
    }

    if(this.head===null){
      return this.push(element)
    }

    if(index === 0) {
      return this.unShift(element);
    }
    let counter = 0;
    let current = this.head;
    while(current.next!=null) {
      ++counter;
      if(counter==index) {
        break;
      }
      current = current.next;
    }
    if(counter < index) {
      return this.push(element);
    }
    else if(counter === index) {
     const newNode = new Node(element, current.next);
     current.next = newNode; 
     this.length = this.length + 1;
    }
     return this;

  }

  pop() {
    if (this.head === null) {
      return this;
    }
    let current = this.head;
    let prev = null;
    while (current.next != null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.length = this.length - 1;
    return this;
  }

  shift() {
    if (this.head === null) {
      return this;
    }
    this.head = this.head.next;
    this.length = this.length - 1;
    return this;
  }

  unShift(element) {
    if (element === undefined || element === null) {
      return this;
    }
    this.head = new Node(element, this.head);
    this.length = this.length + 1;
    return this;
  }
  join(separator) {
    if (this.head === null) {
      return "";
    }
    let current = this.head;
    let stringOutput = "";
    while (current != null) {
      stringOutput+= current.data;
      if(current.next!=null) {
        stringOutput += separator;
      }
      current = current.next;
    }
    return stringOutput;
  }
}

module.exports = LinkedList;
