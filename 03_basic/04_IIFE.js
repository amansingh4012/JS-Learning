// Immediately Invoked function Expressions (IIFE)

(function chai(){                      // named iife
    username ="Aman"
    console.log(username)
})();

((name) => {                               // unamed iife
    console.log(`db Connected ${name}`)
})("Anuj");