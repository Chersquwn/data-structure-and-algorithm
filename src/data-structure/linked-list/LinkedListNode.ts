export default class LinkedListNode<T> {
  public value: T
  public next: LinkedListNode<T>

  constructor(value: T, next: LinkedListNode<T> = null) {
    this.value = value
    this.next = next
  }
}
