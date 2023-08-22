var result = undefined;

var input = document.querySelector('input');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
});

var btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case '/':
                result = (result === undefined ? +input.value : result / (+input.value));
                input.value = "";
                break;
            case 'x':
                result = (result === undefined ? +input.value : result * (+input.value));
                input.value = "";
                break;
            case '-':
                result = (result === undefined ? +input.value : result - (+input.value));
                input.value = "";
                break;
            case '+':
                result = (result === undefined ? +input.value : result + (+input.value));
                input.value = "";
                break;
            case 'C':
                input.value = "";
                break;
            case 'AC':
                result = undefined;
                input.value = "";
                break;
        }
        console.log(e.target.innerText)
    })
})