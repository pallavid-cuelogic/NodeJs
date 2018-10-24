console.log( __filename );

console.log( __dirname );

function printHello() {
    console.log( "Wait 2 sec...");
}
 
// Now call above function after 2 seconds
//var t = setTimeout(printHello, 2000);

// Now clear the timer
//clearTimeout(t);

// Now Function get called every after 2 secss
setInterval(printHello, 2000);

