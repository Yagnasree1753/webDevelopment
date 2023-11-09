class Order{
    constructor(OrderID){
        this.OrderID = OrderID;
    }
    printOrderId(){
        console.log(this.OrderID);
    }
}

class product extends Order{
    constructor(OrderId){
        super(OrderId);
    }
    printProductName(){
        console.log("Mobile Phone")
    }
}

var p = new product("Mobile");
p.printOrderId();
p.printProductName();
