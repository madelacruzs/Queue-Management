let { Queue } = require("../class/Queue");

// Queue class
class QueueManagement {
    constructor() {
        this.Queue = new Queue();
    }

    add(userId) {
        //If user exists, return false;
        let index = this.Queue.search(userId);
        if (index > -1) return false;

        return this.Queue.enqueue(userId);
    }

    removeByUser(userId) {
        //find index by userId
        let index = this.Queue.search(userId);
        if (index > -1) {
            return this.removeByPosition(index);
        }
        return false;
    }

    removeByPosition(index) {
        //starting from 1
        if (index === 0) return false;

        //remove by index
        this.Queue.removeByPosition(index - 1);
        return true;
    }

    move(fromPosition, toPosition) {
        //position starting from 1
        if (fromPosition === 0) return false;
        //out of bound
        if (fromPosition > this.Queue.items.length || toPosition > this.Queue.items.length) return false;

        return this.Queue.move(fromPosition - 1, toPosition - 1);
    }

    swap(positionA, positionB) {
        //position starting from 1
        if (positionA === 0) return false;
        //out of bound
        if (positionA > this.Queue.items.length || positionB > this.Queue.items.length) return false;

        return this.Queue.swap(positionA - 1, positionB - 1);
    }

    print() {
        var str = "";
        for (var i = 0; i < this.Queue.items.length; i++) {
            str += `{${i + 1}}:{${this.Queue.items[i]}} \n`;
        }
        return str;
    }

    reverse() {
        this.Queue.items.reverse();
    }
}

module.exports = {
    QueueManagement,
};
