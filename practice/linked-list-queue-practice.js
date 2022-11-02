// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToHead = (val) => { 
        // Add node of val to head of linked list
      let newNode = new SinglyLinkedNode(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list

        let length = 0;
		if (!this.head) return length;

		let curr = this.head;
		length++;
		while (curr.next) {
			length++;
			curr = curr.next;
		}
		return length;


        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        let sum = 0;
        if (!this.head) return sum;

        let curr = this.head;
        sum += curr.value;

        while(curr.next) {
            curr = curr.next;
            sum += curr.value;

        }
        return sum;


        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        if (!this.head) return 0;

        return this.sumOfNodes() / this.listLength()
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        let curr = this.head;

        while (n) {
            if (n < 0) return null;
            curr = curr.next;
            n--;
        }

        if (n === 0) return curr;
        return null;

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
		// Returns the middle node
		let curr = this.head;
		// To get Index, we -1 from length, then halve, then remove extra decimals
		const midIndex = Math.floor((this.listLength() - 1) / 2);
		let index = 0;
		while (index < midIndex && curr) {
			if (index < 0) return null;
			curr = curr.next;
			index++;
		}
		if (index === midIndex && curr) return curr;
		return null;

		// Write your hypothesis on the time complexity of this method here
	}

    reverse() {
        // Returns a new reversed version of the linked list
        let revList = new SinglyLinkedList();

        //if (!this.head) return revList;        

        let curr = this.head;       

        while (curr) {                        
            revList.addToHead(curr.value);
            curr = curr.next; 
        }
        return revList;
        // Write your hypothesis on the time complexity of this method here
           //  O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let revList = this.reverse();

        this.head = null;
        this.length = 0;

        let currRev = revList.head;
        let curr = this.addToTail(currRev.value);

        while(currRev.next) {
            currRev = currRev.next;
            curr = this.addToTail(currRev.value)
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addToHead(val) {
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            newNode.next = this.head;
            //newNode.prev = null;
            this.head.prev = newNode;            
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }
    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }
    findNthNode(n) {
        // Returns the node at the nth index from the head
        if (!this.head) return null;        
        let curr = this.head;
        
        for (let i = 0; i < n; i++) {
            curr = curr.next;
        }
        return curr;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findMid() {
        // Returns the middle node
        let middle = this.length % 2 === 0 ? this.length / 2 - 1 : Math.floor(this.length / 2);
        return this.findNthNode(middle);
    }

    reverse() {
     // Returns a new reversed version of the linked list
     let revList = new SinglyLinkedList();

     let curr = this.head;
     
     while (curr) {            
        revList.addToHead(curr.value);
        curr = curr.next; 
     }
     return revList;
     // Write your hypothesis on the time complexity of this method here
        //  O(n)  
    }

    reverseInPlace() {
        // Reverses the linked list in-place
      let head = this.head;
      let tail = this.tail;
      while (head !== tail && head.next != tail) { 
        [head.value, tail.value] = [tail.value, head.value];
        head = head.next
        tail = tail.prev     
      }  
      [head.value, tail.value] = [tail.value, head.value];

        // Write your hypothesis on the time complexity of this method here
           // O(n)
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
