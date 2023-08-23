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
    // this.proto = proto;
    this.clone = ()=>{
        const car = new Car(proto.wheels,proto.engines);
        return car;
    }
}

function run(){
    const proto = new Car(4,2);
    const proto2 = JSON.parse(JSON.stringify(proto));  // Bad Practice to clone object
    console.log('proto:::',proto);
    proto2.engines=10;
    console.log('proto2:::',proto2);
    // proto2.start();
    const prototype = new CarPrototype(proto);
    const car1 = prototype.clone();
    car1.start();

    const car2 = prototype.clone();
    car2.break();

    const car3 = prototype.clone();
    car3.break();

    car3.steering_wheel = 1;

    console.log('proto::::',proto);
    // console.log('car1::::',car1);
    // console.log('car2::::',car2);
    // console.log('car3:::',car3);
}

run();