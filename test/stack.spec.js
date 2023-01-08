const assert = require('assert');
const Stack = require('../lib/stack');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should push items', () => {
    stack.push(1);
    stack.push(2);
    assert.deepEqual(stack.size(), 2);
    assert.deepEqual(stack.peek(), 2);
  });

  it('should pop items', () => {
    stack.push(1);
    stack.push(2);
    assert.deepEqual(stack.pop(), 2);
    assert.deepEqual(stack.pop(), 1);
    assert.deepEqual(stack.pop(), null);
  });

  it('should peek at the top item', () => {
    stack.push(1);
    stack.push(2);
    assert.deepEqual(stack.peek(), 2);
    assert.deepEqual(stack.peek(), 2);
  });

  it('should check if the stack is empty', () => {
    assert.deepEqual(stack.isEmpty(), true);
    stack.push(1);
    assert.deepEqual(stack.isEmpty(), false);
  });
});
