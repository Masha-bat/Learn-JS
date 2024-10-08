function sum(a) {
    let sum = a;
    function f(b) {
        sum += b;
        return f;
    }

    
}