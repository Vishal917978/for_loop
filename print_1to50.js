for(let i=1;i<=50;i++){
    if(i%3==0 && i%5!=0){
        console.log("Fizz by 3",i)
    }
    else if(i%5==0 && i%3!=0){
        console.log("vizz by 5",i);
    }
    else if(i%3==0 && i%5==0){
        console.log("both",i);
    }
}