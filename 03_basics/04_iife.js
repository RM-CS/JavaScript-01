// Immediately Invoked Function Expressions (IIFE)

(function uber(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('RM-CS')