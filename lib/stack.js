const Node = require('./node');

/**
 * Stack data structure implemented using a singly linked list.
 * @class
 */
class Stack {
  /**
   * Creates an empty stack.
   * @constructor
   */
  constructor() {
    this.top = null;
  }

  /**
   * Adds an item to the top of the stack.
   * @param {any} item - The item to add.
   * @returns {void}
   */
  push(item) {
    const node = new Node(item);
    node.next = this.top;
    this.top = node;
  }

  /**
   * Removes and returns the item at the top of the stack.
   * @returns {any} The removed item.
   */
  pop() {
    if (!this.top) {
      return null;
    }

    const item = this.top.data;
    this.top = this.top.next;
    return item;
  }

  /**
   * Returns the item at the top of the stack.
   * @returns {any} The item at the top of the stack.
   */
  peek() {
    return this.top ? this.top.data : null;
  }

  /**
   * Returns a boolean indicating whether the stack is empty.
   * @returns {boolean} A boolean indicating whether the stack is empty.
   */
  isEmpty() {
    return !this.top;
  }

  /**
   * Returns the number of items in the stack.
   * @returns {number} The number of items in the stack.
   */
  size() {
    let size = 0;
    let current = this.top;
    while (current) {
      size += 1;
      current = current.next;
    }
    return size;
  }
}

module.exports = Stack;
