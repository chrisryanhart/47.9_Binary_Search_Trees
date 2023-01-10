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

    let currentNode = this.root;

    while(true){

      if(val > currentNode.val){
        if(currentNode.right === null){
          currentNode.right = new Node(val);
          return this;
        }
        currentNode = currentNode.right;

      } else {
          if(currentNode.left === null){
            currentNode.left = new Node(val);
            return this;
          }
          
          currentNode = currentNode.left;
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

    const findInsertionPoint = (node) =>{


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
    if(this.root === null){
      this.root = new Node(val);
      return this;
    } 

    let currentNode = this.root;

    while(currentNode){

      if(currentNode.val === val) return currentNode;

      if(val > currentNode.val){
        if(currentNode.right === null) return;
        if(currentNode.right.val === val){
          return currentNode.right;
        }
        currentNode = currentNode.right;

      } else {
          if(currentNode.left === null) return;
          if(currentNode.left.val === val){
            return currentNode.left;
          }

          currentNode = currentNode.left;
        }
      }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(this.root === null){
      return;
    } 

    // let currentNode = this;

    const locateNode = (node) =>{

      if(node.val === val) return node;
      // let currentNode = node;

      if(val > node.val){
        if(node.right === null) return;

        if(node.right.val === val){
         return node.right;
        } else {
          return locateNode(node.right);
        }
      }else {
        if(node.left===null) return;
        if(node.left.val === val){
          return node.left;
        } else{
          return locateNode(node.left);
        }
      }
    }

    return locateNode(this.root);


  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

    let currentNode = this.root;

    let nodeArr = [];

    const traversePreOrder = (currentNode) => {
      nodeArr.push(currentNode.val);
      if(currentNode.left) traversePreOrder(currentNode.left);
      if(currentNode.right) traversePreOrder(currentNode.right);
    }

    traversePreOrder(currentNode);

    return nodeArr;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let currentNode = this.root;

    let nodeArr = [];

    const traversePreOrder = (currentNode) => {
      if(currentNode.left) traversePreOrder(currentNode.left);
      nodeArr.push(currentNode.val);
      if(currentNode.right) traversePreOrder(currentNode.right);
    }

    traversePreOrder(currentNode);

    return nodeArr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let currentNode = this.root;

    let nodeArr = [];

    const traversePreOrder = (currentNode) => {
      if(currentNode.left) traversePreOrder(currentNode.left);
      if(currentNode.right) traversePreOrder(currentNode.right);
      nodeArr.push(currentNode.val);

    }

    traversePreOrder(currentNode);

    return nodeArr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

    let resultArr = [];
    let queue = [this.root];

    while(queue.length !== 0){
      // if greater than
      let currentNode = queue.shift();

      resultArr.push(currentNode.val);

      if(currentNode.left) queue.push(currentNode.left);

      if(currentNode.right) queue.push(currentNode.right);

        }
        return resultArr;
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
