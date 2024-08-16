const colorbox1 = document.getElementById("box1")
const colorbox2 = document.getElementById("box2")
const inputhex = document.querySelector(".input-text")
const submitBtn = document.querySelector(".button")
const Result = document.querySelector(".result")



function RandomHex(){
   
   const tohex = ((number)=>{
    return number.toString(16).padStart(2, '0')
   }) 


    // a x r(b-a)
    const r =  Math.floor(0 + Math.random()* 255)
    const g =  Math.floor(0 + Math.random()* 255)
    const b =  Math.floor(0 + Math.random()* 255)

    let hex = `#${tohex(r)}${tohex(g)}${tohex(b)}`
    return hex;
}

function updateColor(){
    generatedhex = RandomHex();
    colorbox1.style.backgroundColor = generatedhex;
    console.log(generatedhex);
}

let generatedhex = RandomHex()
colorbox1.style.backgroundColor = generatedhex
console.log(generatedhex)

submitBtn.addEventListener("click", ()=>{
    const inputvalue = inputhex.value;
    if(`#${inputvalue}` === generatedhex){
        colorbox2.style.backgroundColor = generatedhex;
        Result.innerHTML = "Correct Answer!!!";

    } else{
        Result.innerHTML = "Wrong, Try Again!";
        
    }
})


const Next = document.querySelector(".next")
Next.addEventListener("click", ()=>{
    // location.reload();
    updateColor();
    Result.innerHTML = "";
    inputhex.value= "";
})