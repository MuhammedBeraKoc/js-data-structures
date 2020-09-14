// @flow
import Stack from '../src/Stack'

describe('Test Suite For Stack', () => {
    let stackObject: Stack<number>

    beforeEach(() => {
        stackObject = new Stack<number>()
    })

    it('should return true since stack is empty', () => {
        expect(stackObject.isEmpty()).toBe(true)
    })

    it('should pop an element and return it', () => {
        stackObject.push([1, 2, 3])
        expect(stackObject.pop()).toBe(3)
    })

    it('should throw a special error for popping an empty stack', () => {
        expect(stackObject.pop()).toThrow(Stack.EmptyStackCannotBePoppedError)
    })

    it('should return 4 as the peek of the stack', () => {
        stackObject.push([1,2,3,4])
        expect(stackObject.peek()).toBe(4)
    })

    it('should empty the current stack', () => {
        stackObject.push([1, 2])
        stackObject.empty()
        expect(stackObject.isEmpty()).toBe(true)
    })

})
