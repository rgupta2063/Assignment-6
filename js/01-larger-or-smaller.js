var x = window.prompt("Enter First Number " );
var y = window.prompt("Enter Second Number" );
if (x > y) {
    document.write( x + " is larger than " + y );
} else if (y > x) {
    document.write( y + " is larger than " + x );
} else {
    document.write( "Both numbers are equal");
}
