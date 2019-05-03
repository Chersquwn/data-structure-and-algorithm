import BinaryTreeNode from '../BinaryTreeNode'

export default class BinarySearchTree<T> {
  public root: BinaryTreeNode<T>

  public constructor() {
    this.root = null
  }

  /**
   * 插入新节点
   *
   * @author Chersquwn
   * @param {T} value
   * @returns {BinarySearchTree<T>}
   * @memberof BinarySearchTree
   */
  public insert(value: T): BinarySearchTree<T> {
    this.root = this.insertNode(this.root, new BinaryTreeNode(value))

    return this
  }

  /**
   * 判断树中是否有 value 值
   *
   * @author Chersquwn
   * @param {T} value
   * @returns {boolean}
   * @memberof BinarySearchTree
   */
  public contains(value: T): boolean {
    return !!this.search(this.root, value)
  }

  /**
   * 移除节点
   *
   * @author Chersquwn
   * @param {T} value
   * @returns {BinarySearchTree<T>}
   * @memberof BinarySearchTree
   */
  public remove(value: T): BinarySearchTree<T> {
    this.removeNode(this.root, value)

    return this
  }

  /**
   * 中序遍历
   *
   * @author Chersquwn
   * @param {(value: T) => void} callback
   * @memberof BinarySearchTree
   */
  public inOrderTraverse(callback: (value: T) => void): void {
    this.inOrderTraverseNode(this.root, callback)
  }

  /**
   * 先序遍历
   *
   * @author Chersquwn
   * @param {(value: T) => void} callback
   * @memberof BinarySearchTree
   */
  public preOrderTraverse(callback: (value: T) => void): void {
    this.preOrderTraverseNode(this.root, callback)
  }

  /**
   * 后序遍历
   *
   * @author Chersquwn
   * @param {(value: T) => void} callback
   * @memberof BinarySearchTree
   */
  public postOrderTraverse(callback: (value: T) => void): void {
    this.postOrderTraverseNode(this.root, callback)
  }

  public toArray(): T[] {
    const result: T[] = []
    const callback = function(value: T): void {
      result.push(value)
    }

    this.inOrderTraverse(callback)

    return result
  }

  public toString(): string {
    return this.toArray().join(',')
  }

  protected insertNode(
    node: BinaryTreeNode<T>,
    newNode: BinaryTreeNode<T>
  ): BinaryTreeNode<T> {
    if (!node) return newNode

    if (newNode.value < node.value) {
      node.left = this.insertNode(node.left, newNode)
    } else {
      node.right = this.insertNode(node.right, newNode)
    }

    return node
  }

  private search(node: BinaryTreeNode<T>, value: T): BinaryTreeNode<T> {
    if (!node) return null

    if (value < node.value) {
      return this.search(node.left, value)
    } else if (value > node.value) {
      return this.search(node.right, value)
    }
    return node
  }

  private removeNode(node: BinaryTreeNode<T>, value: T): BinaryTreeNode<T> {
    if (!node) return null

    if (value < node.value) {
      node.left = this.removeNode(node.left, value)

      return node
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value)

      return node
    }

    if (!node.left && !node.right) return null

    if (!node.left) return node.right

    if (!node.right) return node.left

    let tempNode = this.findMinNode(node.right)
    node.value = tempNode.value
    node.right = this.removeNode(node.right, tempNode.value)

    return node
  }

  private findMinNode(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    let current = node

    while (current && current.left) {
      current = current.left
    }

    return node
  }

  private inOrderTraverseNode(
    node: BinaryTreeNode<T>,
    callback: (value: T) => void
  ): void {
    if (!node) return

    this.inOrderTraverseNode(node.left, callback)
    callback(node.value)
    this.inOrderTraverseNode(node.right, callback)
  }

  private preOrderTraverseNode(
    node: BinaryTreeNode<T>,
    callback: (value: T) => void
  ): void {
    if (!node) return

    callback(node.value)
    this.preOrderTraverseNode(node.left, callback)
    this.preOrderTraverseNode(node.right, callback)
  }

  private postOrderTraverseNode(
    node: BinaryTreeNode<T>,
    callback: (value: T) => void
  ): void {
    if (!node) return

    this.postOrderTraverseNode(node.left, callback)
    this.postOrderTraverseNode(node.right, callback)
    callback(node.value)
  }
}
