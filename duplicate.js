let original=[1,2,3,1,5,3,1];
let dup=[];
for(let i=0;i<original.length;i++){
    let isDuplicate=false;
    for(let j=0;j<dup.length;j++){
        if(original[i]===dup[j]){
            isDuplicate=true;
            break;
        }
    }
    if(!isDuplicate){
        dup.push(original[i]);
    }
}
console.log(dup)