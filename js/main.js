const boxContainer = document.getElementById('box-container')

for (let i = 1; i <= 100; i++) {

    let result = i

    if (i % 15 == 0) {
        result = ('FizzBuzz');

    } else if (i % 3 == 0) {
        result = ('Fizz');

    } else if (i % 5 == 0) {
        result = ('Buzz');

    }

    console.log(result);

    // visualizzo a schermo gli elementi
    const boxElement = `<div class="box">${result}</div>`
    boxContainer.innerHTML += boxElement

}