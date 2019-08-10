interface IOp {
    doWork():void;
}
// Biz. Operation 1
class Operation1 implements IOp {
    doWork():void {
        console.log('Operation1');
    }
}
// Biz. Operation 2
class Operation2 implements IOp {
    doWork():void {
        console.log('Operation2');
    }
}

class AbstractionLayer{
    private op:IOp = null;

    getObject(choice:string): IOp{
        if(choice == "o1"){
            this.op = new Operation1();
        }
        if(choice == "o2"){
            this.op = new Operation2();
        }
        return this.op;
    }
}


// client class
class Client {
    // private o1:Operation1;
    // private o2:Operation2;
    private op:IOp = null;
    private abstrat:AbstractionLayer;
    constructor(choice:string){
        this.abstrat = new AbstractionLayer();
        this.op = this.abstrat.getObject(choice);
        // this.o1 = new Operation1();
        // this.o2 = new Operation2();
    }

    print():void {
        // this.o1.doWork();
        // this.o2.doWork();
        this.op.doWork();
    }
}

let c =new Client("o1");
c.print();
c = new Client("o2");
c.print();









