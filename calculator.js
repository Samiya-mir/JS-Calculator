
var operators = document.querySelectorAll('.operators ');
var numbers = document.querySelectorAll('.numbers ');

let string = "";
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click' , (item)=>{
        if(item.target.innerHTML=="="){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(item.target.innerHTML=="C") {
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            string = string + item.target.innerHTML;
            document.querySelector('input').value = string;
            console.log(string);
        }
    })
}
