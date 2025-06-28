let light=true;
let toggle=document.querySelector(".toggle");
let span =document.querySelector("span");
let page = document.querySelector('#page')

toggle.addEventListener("click",()=>{
    if(light){
        page.classList.remove('light');
        page.classList.add('dark');
        span.innerText = "Dark Mode";
        light=false;
    }
    else{
        page.classList.remove('dark');
        page.classList.add('light')
        span.innerText = "Light Mode";
        light=true
    }
});