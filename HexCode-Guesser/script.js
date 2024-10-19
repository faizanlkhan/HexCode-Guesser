const colorbox1 = document.getElementById("box1")
const colorbox2 = document.getElementById("box2")
const inputhex = document.querySelector(".input-text")
const submitBtn = document.querySelector(".button")
const Result = document.querySelector(".result")
const input_s1 = document.querySelector(".s1")
const input_s2 = document.querySelector(".s2")
const input_s3 = document.querySelector(".s3")
const input_s4 = document.querySelector(".s4")
const input_s5 = document.querySelector(".s5")
const input_s6 = document.querySelector(".s6")



function RandomHex() {

    const tohex = ((number) => {
        return number.toString(16).padStart(2, '0')
    })


    // a x r(b-a)
    const r = Math.floor(0 + Math.random() * 255)
    const g = Math.floor(0 + Math.random() * 255)
    const b = Math.floor(0 + Math.random() * 255)

    let hex = `#${tohex(r)}${tohex(g)}${tohex(b)}`
    return hex;
}

function updateColor() {
    generatedhex = RandomHex();
    colorbox1.style.backgroundColor = generatedhex;
    console.log(generatedhex);
}

function isValidHex(hex){
    return /^#[0-9a-fA-F]{6}$/.test(hex);
}

let generatedhex = RandomHex()
colorbox1.style.backgroundColor = generatedhex
console.log(generatedhex)

function MatchAnswer(){
    const inputvalue = inputhex.value;
    input_split = inputvalue.split("");
        answer = generatedhex.slice(1, 7)
        answer_split = answer.split("");
        console.log(input_split);
        console.log(answer_split);
    if (`#${inputvalue}` === generatedhex) {
        colorbox2.style.backgroundColor = generatedhex;
        input_s1.innerHTML = input_split[0];
        input_s2.innerHTML = input_split[1];
        input_s3.innerHTML = input_split[2];
        input_s4.innerHTML = input_split[3];
        input_s5.innerHTML = input_split[4];
        input_s6.innerHTML = input_split[5];
        Result.innerHTML = "Correct Answer!!!";
        const inputSections = [input_s1, input_s2, input_s3, input_s4, input_s5, input_s6];
        for (let i = 0; i < 6; i++) {
            inputSections[i].innerHTML = input_split[i] + "✅";
        }
    } else {
        colorbox2.style.backgroundColor = `#${inputvalue}`;
        Result.innerHTML = "Wrong, Try Again!";
        input_s1.innerHTML = input_split[0];
        input_s2.innerHTML = input_split[1];
        input_s3.innerHTML = input_split[2];
        input_s4.innerHTML = input_split[3];
        input_s5.innerHTML = input_split[4];
        input_s6.innerHTML = input_split[5];

        const inputSections = [input_s1, input_s2, input_s3, input_s4, input_s5, input_s6];

        for (let i = 0; i < 6; i++) {
            if (input_split[i] == answer_split[i]) {
                inputSections[i].innerHTML += " ✅";
            } else if (input_split[i].charCodeAt(0) > answer_split[i].charCodeAt(0)) {
                inputSections[i].innerHTML += " ⬇️";
            } else {
                inputSections[i].innerHTML += " ⬆️";
            }
        }
        document.querySelector(".suggestion").style.display = "block";
    }
}

function submit() {

    const inputvalue = inputhex.value;


    if(!isValidHex(`#${inputvalue}`)){
        Result.textContent = "Invalid Hex Code, Hex Code ranges from 0-9 & a-f";
    } else {
        MatchAnswer();
    }

}

submitBtn.addEventListener("click", submit);
inputhex.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        submit();
        document.getElementById('hintContainer').style.display = 'block';
    }
})

const Next = document.querySelector(".next")
Next.addEventListener("click", () => {
    // location.reload();
    updateColor();
    Result.innerHTML = "";
    inputhex.value = "";
    input_s1.innerHTML = " ";
    input_s2.innerHTML = " ";
    input_s3.innerHTML = " ";
    input_s4.innerHTML = " ";
    input_s5.innerHTML = " ";
    input_s6.innerHTML = " ";
    colorbox2.style.backgroundColor="#9c35f6";
    document.getElementById('hintContainer').style.display = 'none';
    
})
