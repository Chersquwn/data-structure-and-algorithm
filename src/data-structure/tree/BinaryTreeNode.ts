export default class BinaryTreeNode<T> {
  public value: T
  public left: BinaryTreeNode<T>
  public right: BinaryTreeNode<T>

  public constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }
}
