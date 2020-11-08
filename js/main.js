const counter = document.querySelectorAll('.counter');
counterArr = Array.from(counter);
let counterStart = 0;

counterArr.map((item)=>{
    console.log(item.dataset.setnumber)
    let counterStart = 0;
    function counterjs(){
        item.innerHTML = counterStart
        if(item.innerHTML == item.dataset.setnumber){
            clearInterval(stop)
        }
        console.log(item.innerHTML)
    }
    let stop = setInterval(()=>{
        counterjs()
        counterStart++
    },60)

    
})




// type.js
const typo = document.querySelector('.typo');
const typotext = typo.innerHTML
const typoLength = typotext.length
let typeStart = -1;
typo.innerHTML = typotext.charAt(typeStart)


function typeJs(){
    typo.innerHTML += typotext.charAt(typeStart)
    if(typeStart == typoLength){
        typeStart = -1
        typo.innerHTML = ''
    }
}

let stop = setInterval(()=>{
    typeJs()
    typeStart++
    
},100)

console.log(typoLength)






















