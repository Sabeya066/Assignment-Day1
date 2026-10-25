const browserVersion="chrome"

function getBrowserName(){

    if(browserVersion=="chrome"){

        //var browserVersion
        //Output: Inside the function but outside the block undefined //Its hoisted to the top of function and undefined
//var browserVersion="Firefox"
//Output: Inside the function but outside the block undefined
let browserVersion ="Firefox"
//Output: Inside the function but outside the block chrome // let variable get destroyed inside the block
}
console.log("Inside the function but outside the block",browserVersion)

}
getBrowserName()