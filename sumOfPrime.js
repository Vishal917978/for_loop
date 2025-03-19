let sum=0;
let count=0;
for(let i=2;i<=100;i++){
    for(let j=2;j<i;i++){
        if(i%j==0){
            count++;
        }
    }
    if(count==0){
        sum=sum+i;
     }
  
}
console.log(sum)