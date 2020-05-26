/*
 * Create the function factorial here
 *  example: 4!  = 4 * 3 * 2 * 1
 */



/*
function factorial(n){
    return (n != 1) ? n * factorial(n-1) : 1;
}
*/

function factorial(n) 
{ 

  if (n === 0)
 {
    return 1;
 }
  return n * factorial(n-1);
         
}

export{factorial};