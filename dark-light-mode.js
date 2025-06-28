let light=true;
let toggle=document.querySelector(".toggle");
let ball=document.querySelector(".ball");
let span =document.querySelector("span");
let container=document.querySelector(".container");
let btn=document.querySelector('#btn');
let input_from=document.querySelector('#input-from');
let input_to=document.querySelector('#input-to');
let page = document.querySelector('#page')

toggle.addEventListener("click",()=>{
    if(light){
        page.classList.remove('light');
        page.classList.add('dark');
        // span.style.color="white";
        // span.innerText="Dark Mode";
        // container.classList.remove('light-container');
        // container.classList.add('dark-container')
        // btn.classList.remove('light-btn');
        // btn.classList.add('dark-btn');
        // input_from.classList.remove('light-input');
        // input_from.classList.add('dark-input');
        // input_to.classList.remove('light-input');
        // input_to.classList.add('dark-input');
        // document.querySelector("#rate").style.color="white";
        //  document.body.style.backgroundColor="black";
        // toggle.classList.remove("light-toggle");
        // toggle.classList.add("dark-toggle");
        // ball.classList.remove("light-ball");
        // ball.classList.add("dark-ball");
        // //toggle.style.border="2px solid white";
        // ball.style.backgroundColor="white";
        light=false;
    }
    else{
        page.classList.remove('dark');
        page.classList.add('light')
        // span.style.color="black";
        // span.innerText="Light Mode";
        // container.classList.remove('dark-container');
        // container.classList.add('light-container');
        // btn.classList.remove('dark-btn');
        // btn.classList.add('light-btn');
        // input_from.classList.remove('dark-input');
        // input_from.classList.add('light-input');
        // input_to.classList.remove('dark-input');
        // input_to.classList.add('light-input');
        //  document.body.style.backgroundColor="rgb(226, 226, 226)";
        // toggle.classList.remove("dark-toggle");
        // document.querySelector("#rate").style.color="black";

        // toggle.classList.add("light-toggle");
        // ball.classList.remove("dark-ball");
        // ball.classList.add("light-ball");
        // //toggle.style.border="2px solid black";
        // ball.style.backgroundColor="black";
        light=true
    }
});