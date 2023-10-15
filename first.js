//input
let currentvalue = "";
let display = document.getElementById("display");
display.value = currentvalue;

//one


let one = document.getElementById("one");

one.addEventListener('click', ()=>{
    // let currentvalue = "1";
    // let display = document.getElementById("display");
    // display.value = currentvalue;

    currentvalue = currentvalue + "1";
    document.getElementById("display");
    display.value = currentvalue;



})

//two

let two = document.getElementById("two");

two.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "2";
    document.getElementById("display");
    display.value = currentvalue;

})

//C
let c = document.getElementById("c");

c.addEventListener('click', ()=>{
  
    currentvalue = "";
    document.getElementById("display");
    display.value = currentvalue;

})



//three

let three = document.getElementById("three");

three.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "3";
    document.getElementById("display");
    display.value = currentvalue;

})

//four


let four = document.getElementById("four");

four.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "4";
    document.getElementById("display");
    display.value = currentvalue;

})


//plus



let plus = document.getElementById("plus");

plus.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "+";
    document.getElementById("display");
    display.value = currentvalue;

})


//five


let five = document.getElementById("five");

five.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "5";
    document.getElementById("display");
    display.value = currentvalue;

})

//six


let six = document.getElementById("six");

six.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "6";
    document.getElementById("display");
    display.value = currentvalue;

})

//sub


let sub = document.getElementById("sub");

sub.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "-";
    document.getElementById("display");
    display.value = currentvalue;

})

//seven 


let seven = document.getElementById("seven");

seven.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "7";
    document.getElementById("display");
    display.value = currentvalue;

})

//eight


let eight = document.getElementById("eight");

eight.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "8";
    document.getElementById("display");
    display.value = currentvalue;

})

//mul


let mul = document.getElementById("mul");

mul.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "*";
    document.getElementById("display");
    display.value = currentvalue;

})

//nine


let nine = document.getElementById("nine");

nine.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "9";
    document.getElementById("display");
    display.value = currentvalue;

})


//zero


let zero = document.getElementById("zero");

zero.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "0";
    document.getElementById("display");
    display.value = currentvalue;

})


//divide


let divide = document.getElementById("divide");

divide.addEventListener('click', ()=>{
  
    currentvalue = currentvalue + "/";
    document.getElementById("display");
    display.value = currentvalue;

})


//equal


let equal = document.getElementById("equal");

equal.addEventListener('click', ()=>{
  
    currentvalue = eval(currentvalue);
    document.getElementById("display");
    display.value = currentvalue;

})