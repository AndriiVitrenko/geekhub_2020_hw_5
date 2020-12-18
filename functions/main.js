//---------1. isPrime function-------

function isPrime(number) {
    if( number <= 1 )
    return false;

    for (let i = 2; i * i <= number; i++) { 
        if( number % i == 0 ) {
            return false; 
        }
    }

    return true
}

//------2. factorial function------

function factorial(number) {
    return (number) ? number *= factorial(number - 1) : 1
}

//-------3. Fibonacci numbers----------------

function fib(index) {
    let fibNumbers = [0, 1];

    for (let i = 2; i <= index; i++) {
        fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2])
    }

    return fibNumbers[index]
}

//------4. isSorted function-----------

function isSorted(array) {
    let result = true;

    let newArray = Array.from(array).sort(function(next, prev) {
        if (+prev > +next) {
            return -1
        }
        else if (+prev < +next) {
            return 1
        }
        return 0
    })

    for (let i = 0; i < array.length; i++) {
        if (array[i] === newArray[i]) {
            result = true
        }
        else {
            result = false
            break
        }
    }

    return result
}

//------5. reverse function--------------

function reverse(str) {
    let stringArray = str.split('')
    let result = []

    for (let i = stringArray.length - 1; i >= 0; i--) {
        result.push(stringArray[i])
    }

    result = result.join('')

    return result
}

//-------6. indexOf function-------------

function indexOf(array, number) {
    let result = -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            result = i
            break
        }
    }

    return result
}

//-------7. isPalindrome function-------------

function isPalindrome(string) {
    string = string.replace(/\s/g, '')
    let original = string.toLowerCase().split('');
    let reversed = Array.from(original).reverse();
    let result

    for (let i = 0; i < original.length; i++) {
        if (original[i] === reversed[i]) {
            result = true
        }
        else {
            result = false
            break
        }
    }

    return result
}

//------8. missing function----------

function missing(array) {
    let maximum = Math.max(...array);
    let result;

    for (let i = 1; i <= maximum; i++) {
        if (!array.includes(i)) {
            result = i
            break
        }
    }

    return result
}

//---------9. isBalanced function------------

function isBalanced(string) {
    let filterRule = /[\{\}]/g;
    let matchString = string.match(filterRule).join('');
    let rule1 = /^\{*$/;
    let rule2 = /^\}*$/; 
    let result;

    if (rule1.test(matchString.slice(0, matchString.length / 2 - 1)) && rule2.test(matchString.slice(matchString.length / 2))) {
        result = true
    }
    else {
        result = false
    }

    return result
}