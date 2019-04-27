import AVLTree from '../../src/data-structure/tree/AVLTree'

describe('AVLTree', () => {
  test('Create AVLTree', () => {
    const avlt = new AVLTree()

    expect(avlt).toBeDefined()
    expect(avlt.root).toBeNull()
  })

  describe('AVLTree insert new value', () => {
    test('LL', () => {
      const avlt = new AVLTree()

      avlt.insert(40)
      avlt.insert(50)
      avlt.insert(20)
      avlt.insert(10)
      avlt.insert(30)

      expect(avlt.toString()).toEqual('10,20,30,40,50')
      expect(avlt.toArray()).toEqual([10, 20, 30, 40, 50])
      expect(avlt.root.value).toEqual(40)

      avlt.insert(5)

      expect(avlt.toString()).toEqual('5,10,20,30,40,50')
      expect(avlt.toArray()).toEqual([5, 10, 20, 30, 40, 50])
      expect(avlt.root.value).toEqual(20)
    })

    test('RR', () => {
      const avlt = new AVLTree()

      avlt.insert(40)
      avlt.insert(60)
      avlt.insert(30)
      avlt.insert(50)
      avlt.insert(70)

      expect(avlt.toString()).toEqual('30,40,50,60,70')
      expect(avlt.toArray()).toEqual([30, 40, 50, 60, 70])
      expect(avlt.root.value).toEqual(40)

      avlt.insert(75)

      expect(avlt.toString()).toEqual('30,40,50,60,70,75')
      expect(avlt.toArray()).toEqual([30, 40, 50, 60, 70, 75])
      expect(avlt.root.value).toEqual(60)
    })

    test('LR', () => {
      const avlt = new AVLTree()

      avlt.insert(40)
      avlt.insert(50)
      avlt.insert(20)
      avlt.insert(10)
      avlt.insert(30)

      expect(avlt.toString()).toEqual('10,20,30,40,50')
      expect(avlt.toArray()).toEqual([10, 20, 30, 40, 50])
      expect(avlt.root.value).toEqual(40)

      avlt.insert(25)

      expect(avlt.toString()).toEqual('10,20,25,30,40,50')
      expect(avlt.toArray()).toEqual([10, 20, 25, 30, 40, 50])
      expect(avlt.root.value).toEqual(30)
    })

    test('RL', () => {
      const avlt = new AVLTree()

      avlt.insert(40)
      avlt.insert(60)
      avlt.insert(30)
      avlt.insert(50)
      avlt.insert(70)

      expect(avlt.toString()).toEqual('30,40,50,60,70')
      expect(avlt.toArray()).toEqual([30, 40, 50, 60, 70])
      expect(avlt.root.value).toEqual(40)

      avlt.insert(45)

      expect(avlt.toString()).toEqual('30,40,45,50,60,70')
      expect(avlt.toArray()).toEqual([30, 40, 45, 50, 60, 70])
      expect(avlt.root.value).toEqual(50)
    })
  })

  test('AVLTree contains the value', () => {
    const avlt = new AVLTree()

    avlt.insert(7)
    avlt.insert(8)
    avlt.insert(6)

    expect(avlt.contains(5)).toBe(false)
    expect(avlt.contains(8)).toBe(true)
  })

  test('AVLTree remove the node with the value', () => {
    const avlt = new AVLTree()

    avlt.insert(7)
    avlt.insert(8)
    avlt.insert(6)
    avlt.insert(10)
    avlt.insert(12)

    avlt.remove(5)
    expect(avlt.toString()).toBe('6,7,8,10,12')

    avlt.remove(8)
    expect(avlt.toString()).toBe('6,7,10,12')
  })

  test('AVLTree in-order-traverse', () => {
    const avlt = new AVLTree()

    avlt.insert(7)
    avlt.insert(8)
    avlt.insert(6)
    avlt.insert(10)
    avlt.insert(12)

    const result = []

    avlt.inOrderTraverse(value => {
      result.push(value)
    })

    expect(result).toEqual([6, 7, 8, 10, 12])
  })

  test('AVLTree pre-order-traverse', () => {
    const avlt = new AVLTree()

    avlt.insert(7)
    avlt.insert(8)
    avlt.insert(6)
    avlt.insert(10)
    avlt.insert(12)

    const result = []

    avlt.preOrderTraverse(value => {
      result.push(value)
    })

    expect(result).toEqual([7, 6, 10, 8, 12])
  })

  test('AVLTree post-order-traverse', () => {
    const avlt = new AVLTree()

    avlt.insert(7)
    avlt.insert(8)
    avlt.insert(6)
    avlt.insert(10)
    avlt.insert(12)

    const result = []

    avlt.postOrderTraverse(value => {
      result.push(value)
    })

    expect(result).toEqual([6, 8, 12, 10, 7])
  })
})
