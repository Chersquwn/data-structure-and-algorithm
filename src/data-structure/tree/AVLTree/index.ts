import BinarySearchTree from '../BinarySearchTree'
import BinaryTreeNode from '../BinaryTreeNode'

export default class AVLTree<T> extends BinarySearchTree<T> {
  /**
   * 插入新节点
   *
   * @author Chersquwn
   * @param {T} value
   * @returns {BinarySearchTree<T>}
   * @memberof BinarySearchTree
   */
  public insert(value: T): BinarySearchTree<T> {
    if (!this.root) {
      this.root = new BinaryTreeNode(value)
    } else {
      this.root = this.insertNode(this.root, new BinaryTreeNode(value))
    }

    return this
  }

  protected insertNode(
    node: BinaryTreeNode<T>,
    newNode: BinaryTreeNode<T>
  ): BinaryTreeNode<T> {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode
      } else {
        node.left = this.insertNode(node.left, newNode)

        node = this.rebalance(node, newNode)
      }
    } else {
      if (!node.right) {
        node.right = newNode
      } else {
        node.right = this.insertNode(node.right, newNode)

        node = this.rebalance(node, newNode)
      }
    }

    return node
  }

  private getHeight(node: BinaryTreeNode<T>): number {
    if (!node) return -1

    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
  }

  /**
   * 根据平衡因子判断是否需要进行平衡
   *
   * @author Chersquwn
   * @private
   * @param {BinaryTreeNode<T>} node
   * @param {BinaryTreeNode<T>} newNode
   * @memberof AVLTree
   */
  private rebalance(
    node: BinaryTreeNode<T>,
    newNode: BinaryTreeNode<T>
  ): BinaryTreeNode<T> {
    if (this.getHeight(node.left) - this.getHeight(node.right) > 1) {
      if (newNode.value < node.left.value) {
        return this.rightRotate(node)
      }
      return this.leftRightRotate(node)
    } else if (this.getHeight(node.left) - this.getHeight(node.right) < -1) {
      if (newNode.value > node.right.value) {
        return this.leftRotate(node)
      }
      return this.rightLeftRotate(node)
    }

    return node
  }

  /**
   * 左旋：
   * 1、旋转轴为当前节点 node 的右节点
   * 2、当前节点 node 的右节点 tempNode 向左单旋
   * 3、因 tempNode 左旋后，当前节点 node 将为其左节点，当前节点 node 失去右节点，所以需将 tempNode 的左节点 tempNode.left 移动到当前节点 node 的右节点 node.right  上
   * 4、将当前节点 node 移到 tempNode 的左节点 tempNode.left上
   *
   * @author Chersquwn
   * @private
   * @param {BinaryTreeNode<T>} node
   * @returns {BinaryTreeNode<T>}
   * @memberof AVLTree
   */
  private leftRotate(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    let tempNode = node.right

    node.right = tempNode.left
    tempNode.left = node

    return tempNode
  }

  /**
   * 右旋：
   * 1、旋转轴为当前节点 node 的左节点
   * 2、当前节点 node 的左节点 tempNode 向右单旋
   * 3、因 tempNode 右旋后，当前节点 node 将为其右节点，当前节点 node 失去左节点，所以需将 tempNode 的右节点 tempNode.right 移动到当前节点 node 的左节点 node.left  上
   * 4、将当前节点 node 移到 tempNode 的右节点 tempNode.right上
   *
   * @author Chersquwn
   * @private
   * @param {BinaryTreeNode<T>} node
   * @returns {BinaryTreeNode<T>}
   * @memberof AVLTree
   */
  private rightRotate(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    let tempNode = node.left

    node.left = tempNode.right
    tempNode.right = node

    return tempNode
  }

  /**
   * 左右双旋：
   * 1、旋转轴为当前节点 node 的左节点的右节点
   * 2、对当前节点 node 的左子树进行左旋操作，重新得到当前节点左子树的根节点 node.left
   * 3、对当前节点 node 进行右旋
   *
   * @author Chersquwn
   * @private
   * @param {BinaryTreeNode<T>} node
   * @returns {BinaryTreeNode<T>}
   * @memberof AVLTree
   */
  private leftRightRotate(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    node.left = this.leftRotate(node.left)
    return this.rightRotate(node)
  }

  /**
   * 左右双旋：
   * 1、旋转轴为当前节点 node 的右节点的左节点
   * 2、对当前节点 node 的右子树进行右旋操作，重新得到当前节点右子树的根节点 node.right
   * 3、对当前节点 node 进行左旋
   *
   * @author Chersquwn
   * @private
   * @param {BinaryTreeNode<T>} node
   * @returns {BinaryTreeNode<T>}
   * @memberof AVLTree
   */
  private rightLeftRotate(node: BinaryTreeNode<T>): BinaryTreeNode<T> {
    node.right = this.rightRotate(node.right)
    return this.leftRotate(node)
  }
}
