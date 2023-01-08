const Node = require('./node');

/**
 * Queue data structure implemented using a singly linked list.
 * @class
 */
class Queue {
  /**
   * Creates an empty queue.
   * @constructor
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Adds an item to the end of the queue.
   * @param {any} item - The item to add.
   * @returns {void}
   */
  enqueue(item) {
    const node = new Node(item);
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    if (!this.head) {
      this.head = node;
    }
  }

  /**
   * Removes and returns the item at the front of the queue.
   * @returns {any} The removed item.
   */
  dequeue() {
    if (!this.head) {
      return null;
    }

    const item = this.head.data;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return item;
  }

  /**
   * Returns the item at the front of the queue.
   * @returns {any} The item at the front of the queue.
   */
  peek() {
    return this.head ? this.head.data : null;
  }

  /**
   * Returns a boolean indicating whether the queue is empty.
   * @returns {boolean} A boolean indicating whether the queue is empty.
   */
  isEmpty() {
    return !this.head;
  }

  /**
   * Returns the number of items in the queue.
   * @returns {number} The number of items in the queue.
   */
  size() {
    let size = 0;
    let current = this.head;
    while (current) {
      size += 1;
      current = current.next;
    }
    return size;
  }
}

module.exports = Queue;
