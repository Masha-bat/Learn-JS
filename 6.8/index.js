function printNumber1(from, to) {
    let current = from;
    let timerId = setInterval(function() {
        alert(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000)
}

function printNumbers2(from, to) {
    let current = from;
    let timerId = setTimeout(function f() {
        alert(current);
        if (current < to) {
            timerId = setTimeout(f, 1000);
        }
        current++;
    }, 1000);
}

printNumbers2(5, 10);