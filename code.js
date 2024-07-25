for(var i=0;i<5;i++){
    (function(j=i){
        setTimeout(function(){
            console.log(new Date,j);
        },1000)
    })()
}
console.log(new Date, i,1);

console.log('******');
for(var i=0;i<5;i++){
    (function(){
        setTimeout(function(){
            console.log(new Date,i);
        },1000)
    })()
}
console.log(new Date, i,2);

