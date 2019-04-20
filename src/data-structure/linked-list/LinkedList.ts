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
  public head: LinkedListNode<T>
  public tail: LinkedListNode<T>
  public len: number = 0

  public constructor() {
    this.head = null
    this.tail = null
  }

  /**
   * 获取链表长度
   *
   * @readonly
   * @type {number}
   * @memberof LinkedList
   */
  public get length(): number {
    return this.len
  }

  /**
   * 获取链表第 index 个节点
   *
   * @author Chersquwn
   * @param {number} index
   * @returns {LinkedListNode<T>}
   * @memberof LinkedList
   */
  public get(index: number): LinkedListNode<T> {
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
   * @returns {number}
   * @memberof LinkedList
   */
  public find(value: T): number {
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
   * @returns {LinkedList<T>}
   * @memberof LinkedList
   */
  public append(value: T): LinkedList<T> {
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
   * @returns {LinkedList<T>}
   * @memberof LinkedList
   */
  public prepend(value: T): LinkedList<T> {
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
   * @returns {LinkedList<T>}
   * @memberof LinkedList
   */
  public insert(index: number, value: T): LinkedList<T> {
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
   * @returns {LinkedListNode<T>}
   * @memberof LinkedList
   */
  public removeAt(index: number): LinkedListNode<T> {
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

  /**
   * 根据值移除链表节点
   *
   * @author Chersquwn
   * @param {T} value
   * @returns {LinkedListNode<T>}
   * @memberof LinkedList
   */
  public remove(value: T): LinkedListNode<T> {
    let i = 0
    let current = this.head
    let previous = null

    while (i++ < this.len) {
      if (current.value === value) {
        if (!previous) {
          this.tail = this.head = null
        } else {
          previous.next = current.next
        }

        this.len--

        return current
      }

      previous = current
      current = current.next
    }

    if (!previous) return null

    previous.next = current.next

    this.len--

    return current
  }

  private isOutOfBounds(index: number): boolean {
    return index < 0 || index > this.len
  }
}
