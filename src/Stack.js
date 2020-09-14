// @flow

type ErrorFunction = () => empty

type StackListenerObject<T> = {
    itemsInternal: T,
    itemsListener: Function,
    set items(value: T): void,
    get items(): T,
    registerListener?: Function
}

export default class Stack<T> {
    static EmptyStackCannotBePoppedError: Class<Error> = class extends Error {
        constructor(message='The current stack is empty. Hence cannot be popped.') {
            super(message)
            this.name = Stack.EmptyStackCannotBePoppedError.name
        }
    }

    stack: StackListenerObject<T[]>
    length: number

    constructor(items:T[]=[]) {
        const self = this
        this.stack = {
            itemsInternal: items,
            itemsListener: function () {
                self.length = this.itemsInternal.length
            },
            set items(items: T[]) {
                this.itemsInternal = items
                this.itemsListener()
            },
            get items(): T[] {
                return this.itemsInternal
            }
        }
        this.length = items.length
    }

    push(item: T | T[]): void {
        this.stack.items = this.stack.items.concat(item)
    }

    pop(): T | ErrorFunction {
        if (this.isEmpty()) return () => {
            throw new Stack.EmptyStackCannotBePoppedError()
        }
        const poppedItem = this.stack.items[this.length - 1]
        this.stack.items = this.stack.items.slice(0, -1)
        return poppedItem
    }

    peek(): T {
        return this.stack.items[this.length - 1]
    }

    isEmpty(): boolean {
        return this.length === 0
    }

    empty(): void {
        this.stack.items = []
    }
}
