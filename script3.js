console.clear();

let inputs = document.querySelectorAll("input")
let answers = document.querySelectorAll(".answer")

function task1(){
    let number = inputs[0].value;
    answers[0].textContent = number
}


let email = "yevgenia20032007@gmail.com"

function task2(){
    let number = inputs[1].value;
    let email = str.length(email)
    answers[1].textContent = number
}



let fullName = "Євгенія"
function task3(){
    let fullName = inputs[2].value;
    answers[2].textContent = "My name is " + fullName
}



let userName = name
let  payment = number

function task4(){
    let userName = inputs[3].value;
    let  payment = inputs[4].value;
    answers[3].textContent = "Дякуємо," + userName + "! До сплати " + payment + " гривень"
}
