// "use strict";

var question = prompt("How are you?");


// console.log(question);


if(question === null) {
    alert('Permission denied');
} else if(question === 'admin'){
    var requestLogin = prompt('Login: ');
    if(requestLogin === '123'){
        alert('Login success');
    } else if (requestLogin === null){
        alert('Log Out');
    } else {
        alert('Permission denied');
    }
} else {
    alert("I don't know you");
}