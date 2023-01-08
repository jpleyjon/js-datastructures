const assert = require('assert');
const Queue = require('../lib/queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should enqueue items', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    assert.deepEqual(queue.size(), 2);
    assert.deepEqual(queue.peek(), 1);
  });

  it('should dequeue items', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    assert.equal(queue.dequeue(), 1);
    assert.equal(queue.dequeue(), 2);
  });

  it('should peek at the front item', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    assert.equal(queue.peek(), 1);
    assert.equal(queue.peek(), 1);
  });

  it('should report its size', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    assert.equal(queue.size(), 2);
  });

  it('should report if it is empty', () => {
    assert(queue.isEmpty());
    queue.enqueue(1);
    assert(!queue.isEmpty());
  });
});
