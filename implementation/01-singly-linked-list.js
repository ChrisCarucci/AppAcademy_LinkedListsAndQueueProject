// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        let newNode = new SinglyLinkedNode(val)
;       newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++;

        return this;
    }

    removeFromHead() {
        // Remove node at head

        if (!this.head) return;

        let delHead = this.head;
        this.head = this.head.next;
        this.length--;
        return delHead;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        if (!this.head) return;

        this.length--;


        let curr = this.head;

        if (!this.head.next){
            this.head = null;
            return curr;
        }

        while (curr.next.next) {
            curr = curr.next;
        }

        let deleted = curr.next;
        curr.next = null;
        return deleted;




        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if (!this.head) return;

        let curr = this.head;

        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }


        
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
