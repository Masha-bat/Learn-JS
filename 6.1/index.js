// Вычислить сумму чисел до данного =================

// 1    
function sumTo1(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//2
function sumTo2(n) {
    if (n == 1) {
        return n;
    }
    else {
        return n + sumTo2(n-1);
    }
}

//3
function sumTo3(n) {
    return n * (n + 1) / 2;
}

alert( sumTo3(100) );

//Вычислить факториал ===============================

function factorial(n) {
    if (n == 1) {
        return n;
    }
    else {
        return n * factorial(n - 1);
    }
}

alert( factorial(5) );

// Числа Фибоначчи ==================================

// рекурсия (очень долго для 77)
function fib1(n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}

// динамическое программирование снизу вверх
function fib2(n) {
    a = 1;
    b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fib2(77));

// Вывод односвязного списка ========================

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

// 1
function printList1(list) {
    alert(list.value);
    if (list.next) {
        printList1(list.next);
    }
}

// 2
function printList2(list) {
    let current = list;
    while (current) {
        alert(current.value);
        current = current.next
    }
}

// Вывод односвязного списка в обратном порядке =====

function printList1(list) {
    if (list.next) {
        printList1(list.next);
    }
    alert(list.value);
}

function printList2(list) {
    let arr = [];
    let current = list;
    while (current) {
        arr.push(current.value);
        current = current.next
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}