// counter.js
let counter = document.querySelector('.counter');
let setnumber = Number(counter.dataset.setnumber);
let speed = Number(counter.dataset.speed);
let initialNumber = 0;
const btn = document.querySelector('.btn');


function counterJs(){
    counter.innerHTML = initialNumber;
    if(initialNumber === setnumber){
        clearInterval(timer)
        btn.style.display = 'block'
        btn.innerHTML = 'Restart'
    }
}

let timer = setInterval(()=>{
    counterJs()
    initialNumber++
},speed)

btn.addEventListener('click',()=>{
    btn.style.display = 'none'
    initialNumber = 0
    counterJs()
    timer = setInterval(()=>{
        counterJs()
        initialNumber++
    },speed)
})