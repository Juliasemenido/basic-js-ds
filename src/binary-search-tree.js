const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.treeRoot = null
  }
  
  root() {
    return this.treeRoot;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.treeRoot == null) {
      this.treeRoot = newNode;
    } else {
      this.addNode(this.treeRoot, newNode);
    }
  }
  addNode(node, newNode) {
    if(newNode.data < node.data) {
      if(!node.left) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else if (newNode.data > node.data) {
      if(!node.right) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    if(data == null) {
      return false;
    } else {
      return this.hasNode(this.treeRoot, data);
    }
  }

  hasNode(node, data) {
    if (!node) {
      return false;
    }
    if(data == node.data) {
      return true;
    } else if(data > node.data) {
      return this.hasNode(node.right, data);
    } else {
      return this.hasNode(node.left, data);
    }
  } 
  

  find(data) {
    if(!data) {
        return null;
    }
    else {
      return this.findNode(this.treeRoot, data);
    }
  }
  findNode(node, data) {
    if (!node) {
      return null;
    }
    
    if(data < node.data) {
      return this.findNode(node.left, data);
    } else if(data > node.data){
      return this.findNode(node.right, data);
    } else if (data == node.data) {
      return node;
    } else {
      return null;
    }
  }

  remove(data) {
    this.removeNode(this.treeRoot, data);
  }
  removeNode(node, key) {
    if(node === null){
        return null;
    } else if(key < node.data) {
        node.left = this.removeNode(node.left, key);
        return node;
    } else if(key > node.data) {
        node.right = this.removeNode(node.right, key);
        return node;
    } else {
        if(node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if(node.left === null) {
            node = node.right;
            return node;
        }
        else if(node.right === null) {
            node = node.left;
            return node;
        }
        let aux = this.minNode(node.right).data;
        node.data = aux;
 
        node.right = this.removeNode(node.right, aux);
        return node;
    }
  }
  
  minNode(node) {
    let currentNode = node;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  min() {
    if (!this.treeRoot) {
      return null;
    }

    return this.minNode(this.treeRoot).data;
  }

  max() {
    if (!this.treeRoot) {
      return null;
    }

    let currentNode = this.treeRoot;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};