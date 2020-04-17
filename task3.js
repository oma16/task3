var x = 2;
var y = 3;
var z = 5;


function parameter (i) {
    for(i = 1; i <= 100; i++){
      
if(i % x === 0 && i % y === 0 && i % z === 0){
        document.write("yu-gi-oh <br>");
 }else if(i % x === 0 && i % y === 0){
    document.write("yu-gi <br>");

}else if(i % x === 0 && i % z === 0){
    document.write("yu-oh <br>");
    
} else if(i % y === 0 && i % z === 0){
    document.write("gi-oh <br>");
} else if(i % x === 0){
    document.write("yu <br>");
}else if(i % y === 0){
    document.write("gi <br>");
}else if(i % z === 0){
    document.write("oh <br>");
}else{
    document.write(i + ' <br>');
}

    }
}

parameter(100);
