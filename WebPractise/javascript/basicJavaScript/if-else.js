const A=[1,2,3,4,5,6,7,8,9,10]
for(let i of A){
    if(i%2==0){
        console.log(i, "is even");
    }else if(i%2==1){
          console.log(i, "is odd");
    }else{
          break;
    }
}

