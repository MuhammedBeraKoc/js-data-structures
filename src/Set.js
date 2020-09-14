export default class Set<T> {
    collection: T[]

    constructor(collection:T[]=[]) {
        this.collection = collection
    }

    has(item: T): boolean {
        return ~this.collection.indexOf(item)
    }

    values(): T[] {
        return this.collection
    }

    add(item: T) {
        const enhancedItem: T[] = Array.isArray(item) ? item : [item]
        for (let i = 0; i < enhancedItem.length; ++i) {
            if (!this.has(enhancedItem[i])) {
                this.collection.push(enhancedItem[i])
            }
        }
    }

    remove(item: T): boolean {
        if (this.has(item)) {
            const itemIndex = this.collection.indexOf(item)
            this.collection = this.collection.slice(0, itemIndex).concat(this.collection.slice(itemIndex + 1))
            return true
        }
        return false
    }

    union(anotherSet: Set): Set {
        const unionSet = new Set()
        const unionArray = this.collection.concat(anotherSet.values())
        for (let i = 0; i < unionArray.length; ++i) {
            unionSet.add(unionArray[i])
        }
        return unionSet
    }

    intersection(anotherSet: Set): Set {
        const intersectionSet = new Set()
        const [targetSet, otherSet] = anotherSet.size > this.size ? [this, anotherSet] : [anotherSet, this]
        for (let i = 0; i < targetSet.size; ++i) {
            if (otherSet.has(targetSet.values()[i])) {
                intersectionSet.add(targetSet.values()[i])
            }
        }
        return intersectionSet
    }

    get size(): number {
        return this.collection.length
    }
}
