const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.rootNode;
    // remove line with error and write your code here
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    const node = new Node(data);
    if (!this.rootNode) {
      this.rootNode = node;
      return;
    }
    let curNode = this.rootNode;
    while (curNode) {
      if (node.data < curNode.data) {
        if (!curNode.left) {
          curNode.left = node;
          return;
        }
        curNode = curNode.left;
      } else {
        if (!curNode.right) {
          curNode.right = node;
          return;
        }
        curNode = curNode.right;
      }
    }
    // remove line with error and write your code here
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    let curNode = this.rootNode;
    while (curNode) {
      if (data === curNode.data) {
        return true;
      } else if (data < curNode.data) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }
    return false;
    // remove line with error and write your code here
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    let curNode = this.rootNode;
    while (curNode) {
      if (data === curNode.data) {
        return curNode;
      } else if (data < curNode.data) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }
    return null;
    // remove line with error and write your code here
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    let curNode = this.rootNode;
    while (curNode && curNode.left) {
      curNode = curNode.left;
    }
    return curNode ? curNode.data : null;
    // remove line with error and write your code here
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    let curNode = this.rootNode;
    while (curNode && curNode.right) {
      curNode = curNode.right;
    }
    return curNode ? curNode.data : null;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};