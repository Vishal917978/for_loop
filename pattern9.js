let row=5;
let col=5;
for(let i=0;i<row;i++){
    let pattern="";
    for(let j=0;j<col;j++){
        if ((i === 1 && j === 2) ||( i === 2 && j === 1 )||(i===2 && j===3)||(i===3 && j===2)) {
            pattern += " ";
        } else {
            pattern += "* "; 
        }
    }
    console.log(pattern);
}