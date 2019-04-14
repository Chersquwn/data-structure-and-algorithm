import LinkedListNode from './LinkedListNode'

/**
 * 链表
 *
 * @author Chersquwn
 * @export
 * @class LinkedList
 * @template T
 */
export default class LinkedList<T> {
  private head: LinkedListNode<T>
  private tail: LinkedListNode<T>
  private len: number = 0

  constructor() {
    this.head = null
    this.tail = null
  }

  private isOutOfBounds(index) {
    return index < 0 || index > this.len
  }

  /**
   * 获取链表长度
   *
   * @readonly
   * @type {number}
   * @memberof LinkedList
   */
  get length() {
    return this.len
  }

  /**
   * 获取链表第 index 个节点
   *
   * @author Chersquwn
   * @param {number} index
   * @returns
   * @memberof LinkedList
   */
  get(index: number) {
    if (this.isOutOfBounds(index)) return null

    let i = 0
    let current = this.head

    while (i++ < index) {
      current = current.next
    }

    return current
  }

  /**
   * 查找对应值在链表中的位置
   *
   * @author Chersquwn
   * @param {T} value
   * @returns
   * @memberof LinkedList
   */
  find(value: T) {
    let i = 0
    let current = this.head

    while (i++ < this.len) {
      if (current.value === value) break

      current = current.next
    }

    return i >= this.len ? -1 : i
  }

  /**
   * 链表添加新尾节点
   *
   * @author Chersquwn
   * @param {T} value
   * @returns
   * @memberof LinkedList
   */
  append(value: T) {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      this.tail = this.head = newNode
    } else {
      this.tail.next = newNode
      this.tail = this.tail.next
    }

    this.len++

    return this
  }

  /**
   * 链表添加新头结点
   *
   * @author Chersquwn
   * @param {T} value
   * @returns
   * @memberof LinkedList
   */
  prepend(value: T) {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      this.tail = this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.len++

    return this
  }

  /**
   * 在链表第 index 位置插入新节点
   *
   * @author Chersquwn
   * @param {number} index
   * @param {T} value
   * @returns
   * @memberof LinkedList
   */
  insert(index: number, value: T) {
    if (this.isOutOfBounds(index)) return null

    if (index === 0) {
      this.prepend(value)
    } else if (index === this.len) {
      this.append(value)
    } else {
      const newNode = new LinkedListNode(value)
      const previous = this.get(index - 1)

      newNode.next = previous.next
      previous.next = newNode
    }

    this.len++

    return this
  }

  /**
   * 移除链表第 index 个节点
   *
   * @author Chersquwn
   * @param {number} index
   * @returns
   * @memberof LinkedList
   */
  removeAt(index: number) {
    if (this.isOutOfBounds(index)) return null

    if (index === 0) {
      const current = this.head
      this.head = this.head.next

      if (!this.head.next) {
        this.tail = this.head
      }

      return current
    }

    const previous = this.get(index - 1)
    const current = previous.next

    previous.next = current.next

    this.len--

    return current
  }
}
