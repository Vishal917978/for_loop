let row=5;
let col=5;
for(let i=0;i<row;i++){
    let pattern="";
    for(let j=0;j<col;j++){
        if (i === 0 || i === row - 1 || j === 0 || j === row - 1) {
            pattern += "* ";
        } else {
            pattern += "  "; 
        }
    }
    console.log(pattern);
}