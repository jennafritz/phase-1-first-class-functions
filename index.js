function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function namedFunction() {
        console.log("name");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymous");
    }
}