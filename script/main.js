class Traveler {
    name;
    food = 1;
    isHealthy = true;

    constructor(name){
        this.name = name;
    }

    hunt() {
        this.food += 2;
    }
    eat() {
        if(this.food < 1) {
            this.isHealthy = false;
        } else {
            this.food -= 1;
        }
    }
}
class Doctor extends Traveler {
    constructor(name){
        super(name);
    }

    heal(traveler) {
        traveler.isHealthy = true;
    }
}

class Hunter extends Traveler {
    constructor(name) {
        super(name);
        this.food = 2;
    }

    hunt() {
        this.food += 5;
    }

    eat() {
        if(this.food >= 2) {
            this.food -= 2;
        } else if(this.food < 2 && this.food > 0) {
            this.food -= 1;
            this.isHealthy = false;
        } else {
            this.isHealthy = false;
        }
    }

    giveFood(traveler, numOfFoodUnits) {
        if(this.food >= numOfFoodUnits) {
            traveler.food += numOfFoodUnits;
            this.food -= numOfFoodUnits;
        }
    }
}

class Wagon {
    capacity = 0;
    passengers;

    constructor(capacity) {
        this.capcity = capacity;
        this.passengers = [];
    }

    getAvailableSeatCount() {
        return this.capcity - this.passengers.length;
    }
    join(traveler){
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler);
        }
    }
    shouldQuarantine() {
        return this.passengers.some(x => !x.isHealthy);
    }
    totalFood() {
        return this.passengers.reduce((total, value) => {
            return total + value.food
        }, 0);
    }
}