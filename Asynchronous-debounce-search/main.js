document.querySelector('#input').addEventListener('keyup', function() {
    if (window.timeout) {
        window.clearTimeout(timeout)
    }

    let input = document.querySelector('#input');
    let output = document.querySelector('#output');
    let text = input.value;

    window.timeout = setTimeout(() => {output.innerHTML = text}, 300)
})

class Result {
    constructor(value) {
        this.value = value
    }

    then() {
         let [item, func] = arguments;

        let result = func(this.value)
        return new Result(result)
    }
}

function perform() {
    let [item, func] = arguments;

    let result = func(item)
    return new Result(result)
}

perform(20, function(value) {
    console.log(value)
}).then(20, function(result) {
    result *= 2
    console.log(result)
}).then(20, function(value) {
    value *= 2
    console.log(value)
})