for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=j;
      
    }
    console.log(row);
}
console.log("=============")
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=5-i+1;j++){
        row+=j;
      
    }
    console.log(row);
}

console.log("=============")
for(let i=1;i<=5;i++){
    let row="";
    for(let j=i;j<=i;j++){
        row+=j;
      
    }
    console.log(row);
}
element="vishal"
setInterval(function () {element.innerHTML += "Hello"}, 1000);