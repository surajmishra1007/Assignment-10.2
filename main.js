class Airplane{
    constructor(name, occupancy, speed){
        if(name == undefined || name == ''){
            throw new Error("Name cannot be empty or undefined");
        }
        this.name = name;

        if(occupancy == undefined || occupancy == '' || occupancy < 0 || occupancy > 180){
            throw new Error("occupancy cannot be empty or negative or more than 180");
        }
        this.occupancy = occupancy;

        if(speed == undefined || speed == ''  || speed < 0 || speed > 900){
            throw new Error("Speed cannot be empty or negative or more than 900");
        }
        this.speed = speed;
    }

    get Name(){
        return this.name;
    }

    set Name(name){
        if(name == undefined || name == ''){
            throw new Error("Name cannot be empty or undefined");
        }
        this.name = name;
    }

    get Occupancy(){
        return this.Occupancy;
    }

    set Occupancy(occupancy){
        if(occupancy == undefined || occupancy == '' || occupancy < 0 || occupancy > 180){
            throw new Error("occupancy cannot be empty or negative or more than 180");
        }
        this.occupancy = occupancy;
    }

    get Speed(){
        return this.speed;
    }

    set Speed(speed){
        if(speed == undefined || speed == ''  || speed < 0 || speed > 900){
            throw new Error("Speed cannot be empty or negative or more than 900");
        }
        this.name = name;
    }

    status(){
        console.log("Airplane : ", this.name, "with", this.occupancy, "occupacy, is moving at", this.speed, "Km/hr");
    }

    increaseSpeed(inc){
        this.speed += inc;
    }

    decreaseSpeed(dcr){
        this.speed -= dcr;
    }

}

let plane = new Airplane('Boing 777', 120, 500);
let plane2 = new Airplane('Boing 666', 140, 550);
let plane3 = new Airplane('Boing 555', 160, 600);

plane.status();
plane2.status();
plane3.status();

plane.increaseSpeed(200);
plane2.increaseSpeed(200);
plane3.increaseSpeed(200);

plane2.status();