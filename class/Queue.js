class Queue {
    // Array is used to implement a Queue
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return false;
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length == 0;
    }

    search(value) {
        for (let index = 0; index < this.items.length; index++) {
            if (value === this.items[index]) {
                return index;
            }
        }
        return -1;
    }

    removeByPosition(index) {
        if (this.isEmpty()) return false;
        return this.items.splice(index, 1);
    }

    move(fromPosition, toPosition) {
        this.items.splice(toPosition, 0, this.removeByPosition(fromPosition));
    }

    swap(positionA, positionB) {
        let temp = this.items[positionA];
        this.items[positionA] = this.items[positionB];
        this.items[positionB] = temp;
        return true;
    }
}

module.exports = {
    Queue,
};
