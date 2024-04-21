abstract class House {
    door: boolean; // true - відкрита, false - закрита
    key: Key;
    tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
        this.door = false; // Початково двері закриті
    }

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
            console.log(`${person.name} заходить у будинок.`);
        } else {
            console.log("Двері закриті. Потрібно відкрити їх ключем.");
        }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key) {
        if (this.key.signature === key.signature) {
            this.door = true;
            console.log("Двері відкриті.");
        } else {
            console.log("Ключ не підходить.");
        }
    }
}

class Key {
    signature: number;

    constructor() {
        this.signature = Math.floor(Math.random() * 1000);
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    name: string;
    key: Key;

    constructor(name: string, key: Key) {
        this.name = name;
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

const key = new Key();

const myHouse = new MyHouse(key);

const person = new Person("John", key);

myHouse.openDoor(person.getKey());

myHouse.comeIn(person);