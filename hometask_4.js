//TASK 1
function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, --n);
    }
};
var num, degree;
do {
    num = +prompt('Insert number:');
    if (num == null || num === '' || isNaN(num)) {
        alert('Incorrect numbe has been inserted');
    }
} while (num == null || num === '' || isNaN(num))

do {
    degree = +prompt('Insert correct degree:');
    if ((degree < 1) || (degree % 1 !== 0)) {
        alert('Incorrect degree has been inserted  - should be integer, >1')
    }
} while ((degree < 1) || (degree % 1 !== 0))

console.log(pow(num, degree));

//TASK 2
var num = +prompt('Insert number');

function loopSumTo(n) {
    var result = 0;
    for (var i = n; i >= 1; i--) {
        result += i;
    }
    return result;
}

console.log("Sum in Loop is : " + loopSumTo(num));


function recursiveSumTo(n) {
    if (n === 1) {
        return n;
    } else {
        return n + recursiveSumTo(--n);
    }
}

console.log("Sum in Recursion is : " + recursiveSumTo(num));

function mathSumTo(n) {
    return n * (n + 1) / 2;
}

console.log("Sum in math formula is : " + mathSumTo(num));

/*
1. самый быстрый способ - 3й, с использованием математической формулы -
самое маленькое количество операций - 3 действия.
на втором месте цикл, самый медленный - рекурсия.
Количество  мат.операций как и у цикла, но необходимо еще время
на организацию вложенных вызовов.

2. Существует ограничение глубины вложенных вызовов,
будет ошибка: максимальный размер стека превышен
 */

//TASK 3
var testArray = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
];

function treeSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof (array[i]) == 'string'||!array[i]) {
            continue;
        } else if (array[i].length === undefined) {
            sum += array[i];
        } else {
            sum += treeSum(array[i]);
        }
    }
    return sum;
}

console.log(treeSum(testArray));