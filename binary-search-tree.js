class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    // traverse BST

    if(this.root === null){
      this.root = new Node(val);
      return this;
    } 

    let queue = [this.root];

    while(queue.length !== 0){
      // if greater than
      let currentNode = queue.shift();
      if(val > currentNode.val){
        if(currentNode.right === null){
          currentNode.right = new Node(val);
          return this;
        }

        queue.push(currentNode.right);

      } else {
          if(currentNode.left === null){
            currentNode.left = new Node(val);
            return this;
          }
          
          queue.push(currentNode.left);

        }
      }
  }


  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if(this.root === null){
      this.root = new Node(val);
      return this;
    } 

    // let currentNode = this;

    const findInsertionPoint = (node) =>{

      // let currentNode = node;

      if(val > node.val){
        if(node.right === null){
          node.right = new Node(val);
          // return this;
        } else {
          return findInsertionPoint(node.right);
        }
      }else {
        if(node.left===null){
          node.left = new Node(val);
          // return this;
        }else{
          return findInsertionPoint(node.left);
        }
      }
    }

    findInsertionPoint(this.root);

    return this;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
