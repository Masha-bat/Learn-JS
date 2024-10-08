// Сумма с помощью замыканий ========================
function sum(a) {
    return function(b) {
        return a + b;
    }
}

// Фильтрация с помощью функции =====================
function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    }
}

function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    }
}

// Сортировать по полю
function byField(fieldName) {
    return ((a, b) => a[fieldName] > b[fieldName] ? 1 : -1);
}

// Армия функций
function makeArmy() {
    let shooters = [];
    let i = 0;

    function makeArmy() {
        let shooters = [];
    
        for (let i = 0; i <= 10; i++) {
            let shooter = function() { // функция shooter
                alert( i ); // должна выводить порядковый номер
            };
            shooters.push(shooter);
        }
      
        // ...а в конце вернуть массив из всех стрелков
        return shooters;
    }
  
    // ...а в конце вернуть массив из всех стрелков
    return shooters;
}
  
let army = makeArmy();