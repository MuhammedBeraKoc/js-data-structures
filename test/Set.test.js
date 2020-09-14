//@flow
import Set from '../src/Set'

describe('Test Suite for Set', () => {
    let set

    beforeEach(() => {
        set = new Set<number>()
    })

    it('should add an item and return true since set has the element', () => {
        set.add(1)
        expect(set.has(1)).toBeTruthy()
    })

    it('should return the collection', () => {
        expect(set.values()).toStrictEqual([])
    })

    it('should remove an item', () => {
        set.add([1, 2, 3])
        expect(set.remove(3)).toBe(true)
    })

    it('should return union of two sets', () => {
        const set2 = new Set([5, 2, -1])
        set.add([1, 2, 3])
        expect(set.union(set2).values()).toStrictEqual([1, 2, 3, 5, -1])
    })

    it('should return intersection of two sets', () => {
        const set2 = new Set([5, 2, -1])
        set.add([1, 2, 3])
        expect(set.intersection(set2).values()).toStrictEqual([2])
    })

    it('should return the size of the set', () => {
        set.add([1, 2, 7, -1])
        expect(set.size).toBe(4)
    })
})
