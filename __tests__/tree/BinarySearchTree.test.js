import BinarySearchTree from '../../src/data-structure/tree/BinarySearchTree'

describe('BinarySearchTree', () => {
  test('Create BinarySearchTree', () => {
    const bst = new BinarySearchTree()

    expect(bst).toBeDefined()
    expect(bst.root).toBeNull()
  })

  test('BinarySearchTree insert new value', () => {
    const bst = new BinarySearchTree()

    bst.insert(7)
    bst.insert(8)
    bst.insert(6)

    expect(bst.toString()).toEqual('6,7,8')
    expect(bst.toArray()).toEqual([6, 7, 8])
  })

  test('BinarySearchTree contains the value', () => {
    const bst = new BinarySearchTree()

    bst.insert(7)
    bst.insert(8)
    bst.insert(6)

    expect(bst.contains(5)).toBe(false)
    expect(bst.contains(8)).toBe(true)
  })

  test('BinarySearchTree remove the node with the value', () => {
    const bst = new BinarySearchTree()

    bst.insert(7)
    bst.insert(8)
    bst.insert(6)
    bst.insert(10)
    bst.insert(12)

    bst.remove(5)
    expect(bst.toString()).toBe('6,7,8,10,12')

    bst.remove(8)
    expect(bst.toString()).toBe('6,7,10,12')
  })

  test('BinarySearchTree in-order-traverse', () => {
    const bst = new BinarySearchTree()

    bst.insert(7)
    bst.insert(8)
    bst.insert(6)
    bst.insert(10)
    bst.insert(12)

    const result = []

    bst.inOrderTraverse(value => {
      result.push(value)
    })

    expect(result).toEqual([6, 7, 8, 10, 12])
  })

  test('BinarySearchTree pre-order-traverse', () => {
    const bst = new BinarySearchTree()

    bst.insert(7)
    bst.insert(8)
    bst.insert(6)
    bst.insert(10)
    bst.insert(12)

    const result = []

    bst.preOrderTraverse(value => {
      result.push(value)
    })

    expect(result).toEqual([7, 6, 8, 10, 12])
  })

  test('BinarySearchTree post-order-traverse', () => {
    const bst = new BinarySearchTree()

    bst.insert(7)
    bst.insert(8)
    bst.insert(6)
    bst.insert(10)
    bst.insert(12)

    const result = []

    bst.postOrderTraverse(value => {
      result.push(value)
    })

    expect(result).toEqual([6, 12, 10, 8, 7])
  })
})
