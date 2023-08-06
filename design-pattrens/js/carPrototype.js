function Car(wheels, engines){
    this.wheels = wheels;
    this.engines = engines;
    this.start = ()=>{
        console.log('Car started');
    };
    this.break = ()=>{
        console.log('Car stoped');
    }
}

function CarPrototype(proto){
    this.proto = proto;
    this.clone = ()=>{
        const car = new Car(proto.wheels,proto.engines);
        return car;
    }
}

function run(){
    const proto = new Car(4,2);
    const prototype = new CarPrototype(proto);
    const car1 = prototype.clone();
    car1.start();
    const car2 = prototype.clone();
    car2.break();
}

run();