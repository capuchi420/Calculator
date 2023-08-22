var result = undefined;
var pastOption = '';

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
                pastOption = '/';
                break;
            case 'x':
                result = (result === undefined ? +input.value : result * (+input.value));
                input.value = "";
                pastOption = 'x';
                break;
            case '-':
                result = (result === undefined ? +input.value : result - (+input.value));
                input.value = "";
                pastOption = '-';
                break;
            case '+':
                result = (result === undefined ? +input.value : result + (+input.value));
                input.value = "";
                pastOption = '+';
                break;
            case '=':
                switch(pastOption){
                    case '/':
                        result /= +input.value;
                        break;
                    case 'x':
                        result *= +input.value;
                        break;
                    case '-':
                        result -= +input.value;
                        break;
                    case '+':
                        result += +input.value;
                        break;
                }
                input.value = result;
                pastOption = '';
                result = undefined;
                break;
            case 'C':
                input.value = "";
                break;
            case 'AC':
                result = undefined;
                input.value = "";
                pastOption = '';
                break;
            default:
                input.value += e.target.innerText;
        }
    })
})