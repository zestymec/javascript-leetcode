var createCounter = function(init) {
    let currentVal = init; // Shuru wali value ko aik variable mein save kar liya
    
    return {
        increment: function() {
            currentVal += 1; // Value mein 1 jama kar ke wahi save kar do
            return currentVal;
        },
        decrement: function() {
            currentVal -= 1; // Value mein se 1 minus kar do
            return currentVal;
        },
        reset: function() {
            currentVal = init; // Value ko wapas original 'init' par set kar do
            return currentVal;
        }
    };
};