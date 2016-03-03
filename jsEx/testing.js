// Playing ground
/*var foo2 = [0,1];

/*for (i=0; i< 10; i++){
  foo.push(Math.floor(Math.random() * 10) + 1);
}

function Fack(num){
  if (num == 1){
    return num;
  }else{
    return num * Fack(num-1);
  }
}
console.log(foo2);
function Fibo(num){
  for(i=2; i<num; i++){
    foo2.push(foo2[foo2.length-1] + foo2[foo2.length-2]);
  }
  return foo2;
}

console.log(Fibo(10));
console.log(foo2);
for (bar in foo2){
  console.log(foo2[bar]);
}
*/
var prompt = require('prompt');
var numAdd = require('./ex.js').addNum;



console.log(numAdd.add(1,2));

/*prompt.start();

var bro = prompt.get(['bro1'], function(err,result){
  console.log(result.bro1);
});
console.log(bro);*/
