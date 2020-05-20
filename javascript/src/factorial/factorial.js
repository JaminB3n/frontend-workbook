/*
 * Create the function factorial here
 *  example: 4!  = 4 * 3 * 2 * 1
 */

function factorial(){
    let res = 1;
    let fac = 5;

    for(i = 0; i < fac; i++){
        res = res * (fac - i);
        console.log(res);
    }
    
}
factorial();




// Wanna try to get user input readline/prompt to calc factorial

