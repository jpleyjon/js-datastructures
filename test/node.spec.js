const { expect } = require('chai');

const Node = require('../lib/node');

describe('Node', () => {
  it('should have a data property', () => {
    const node = new Node('test');
    expect(node).to.have.property('data');
  });

  it('should have a next property', () => {
    const node = new Node('test');
    expect(node).to.have.property('next');
  });

  it('should initialize data and next properties to the provided values', () => {
    const node = new Node('test', 'next');
    expect(node.data).to.equal('test');
    expect(node.next).to.equal('next');
  });
});
