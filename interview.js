'use strict'

class DoublyLinkedNode {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addNode(value) {
    let newNode = new DoublyLinkedNode(value)

    if(this.tail === null) { this.tail = newNode; this.head = newNode }
    else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  /*
    2

    prev curr next
    head           tail
    1    2    3 -> 4 -> null
      ------>
null       <-   <-   <-
  */

  deleteFirst(value) {
    if(value === null || this.head === null) return;
    if(this.head.value === value) {
      if(this.tail === this.head) {
        this.head = null
        this.tail = null
        return;
      }
      let curr = this.head
      this.head = this.head.next
      this.head.prev = null
      curr.next = null
      return;
    }
    if(this.head.next === null) return;
    this.deleteFirstHelper(this.head.next, value)
  }
  deleteFirstHelper(curr, value) {
    if(curr.value === value) {
      if(curr === this.tail) {
        this.tail = this.tail.prev
        this.tail.next = null
        curr.prev = null
        return;
      }
      let prev = curr.prev
      let next = curr.next
      curr.prev = null
      curr.next = null
      prev.next = next
      next.prev = prev
      return;
    }
    if(curr.next !== null) this.deleteFirstHelper(curr.next)
  }

  //print head, tail, list of all elements
  display() {
    console.log('head:', this.head)
    console.log('[ ')
    this.displayHelper(this.head)
    console.log(' ]')
    console.log('tail:', this.tail)
  }

  displayHelper(curr) {
    if(curr === null) return;

    console.log(curr.value)
    if(curr !== this.tail) console.log(', ' )

    this.displayHelper(curr.next)
  }

}

var list0 = new DoublyLinkedList()
list0.display()

list0.addNode(1)
list0.addNode(3)
list0.addNode(2)
list0.addNode(3)

list0.display()

list0.deleteFirst(3)

list0.display()

list0.deleteFirst(1)
list0.deleteFirst(3)
list0.deleteFirst(2)

list0.display()
