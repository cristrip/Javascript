function sum(a, b) {
   
    return (2*(a+b));
    }
    sum(3,4)

// <---------------------------------------->
// <==========================================>

function sum1(x,...y){
    console.log(x);
    console.log(y);

}
sum1(1,2,3,4,5,6,7,8,9)


// <===============================================>
    // ARROW FUNCTION

    const add=(x,y) => {
        return x+y;
    }
    add(2,3)
    
// <====================================================>
//    nested functions

    function outer(){
        console.log('outer');
        function inner(){
            console.log('inner');
        }
        inner()
    }
    outer()

// <=======================================================>
    // cant have access outside of a function,only inside from a function to outside
var x=30;
let y=20;
const z=10; 

function doSome(){
    console.log(x,y,z)
}
doSome()

// <=======================================================>
    function outer(x){
      function inner(y){
       return x +y;
       }
       return inner;
    }
    const outerReturn=outer(10);
    outerReturn(2)

// <===========================================================>

    > function outer(x){
        ...       function inner(y){
        ...        return x +y;
        ...        }
        ...        return inner;
        ...     }
        undefined
        >     const outerReturn=outer(10);
        undefined
        >     outerReturn
        // <result>
        [Function: inner]    

//  <=========================================================>
    // function without a name
    (function (){
        console.log('Hi');

    })()

    // <===============================>

       function findWater(count){
        // the best condition
        // execute the function 5 times
        if (count===0){
            console.log('no more water');
            return;
        }
        console.log('Find the water');
        findWater(count -1);
       }
       findWater(5);