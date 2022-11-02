const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        if (this.length > 0) {
            newNode.next = this.tail;            
            this.tail.next = newNode;            
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;


        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
          // Remove node at head
          if (!this.head) return null;
          let removedVal = this.head.val;
          if (this.head === this.tail) {
              this.head = null;
              this.tail = null
          } else {
              this.head = this.head.next
              this.head.prev = null
          }
          this.length--;
          return removedVal;
          // Write your hypothesis on the time complexity of this method here

    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
