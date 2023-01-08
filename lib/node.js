/**
 * Node in a singly linked list.
 * @private
 */
class Node {
  /**
   * Creates a new node.
   * @param {any} data - The data to store in the node.
   * @param {Node} next - The next node in the list.
   * @constructor
   */
  constructor(data, next = null) {
    /**
     * The data stored in the node.
     * @type {any}
     */
    this.data = data;

    /**
     * The next node in the list.
     * @type {Node}
     */
    this.next = next;
  }
}

module.exports = Node;
