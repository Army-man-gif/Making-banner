const box = document.getElementsByClassName("box")
function changeColor() {
    const cut = document.createElement("div")
    cut.style.position = "absolute";
    cut.style.width="50%";
    cut.style.height="100%";
    cut.style.backgroundColor = "rgba(230, 212, 223, 0.3)";
    cut.style.zIndex = "0";
    box[0].appendChild(cut);

    const cut2 = document.createElement("div")
    cut2.style.position = "absolute";
    cut2.style.width = "0";
    cut2.style.height = "0";

    const computedStyles = window.getComputedStyle(box[0]);
    const width = computedStyles.width;
    const height = computedStyles.height;
    cut2.style.borderTop = parseFloat(height)+"px solid transparent";
    //cut2.style.borderBottom = parseFloat(height)+"px solid rgba(100, 150, 200, 0.5)";
    //cut2.style.borderLeft = "230px solid rgba(100, 150, 200, 0.5)";
    cut2.style.borderRight = "230px solid rgba(100, 150, 200, 0.5)";
    cut2.style.zIndex = "0";
    box[0].appendChild(cut2);

    /*
    const cut3 = document.createElement("div")
    cut3.style.position = "absolute";
    cut3.style.width = "0";
    cut3.style.height = "0";
    cut3.style.borderTop = parseFloat(height)+"px solid transparent";
    //cut2.style.borderBottom = parseFloat(height)+"px solid rgba(27, 117, 208, 0.5)";
    //cut2.style.borderLeft = "230px solid rgba(21, 194, 76, 0.5)";
    cut3.style.borderRight = "30px solid rgba(228, 23, 43, 0.5)";
    cut3.style.zIndex = "0";
    box[0].appendChild(cut3);
    */
}
function DynamicPopulating(amount,content,clear){

    if(clear){
        box[0].innerHTML = "";
    }
    changeColor();
    let AngleToRotateBy = Math.floor((Math.random()*360)+1)
    for (let i = 0; i < amount; i++) {
        AngleToRotateBy = Math.floor((Math.random()*360)+1)
        number = document.createElement("span")
        number.textContent = content
        number.style.fontSize = "20px";
        number.style.color = "black"
        const computedStyles = window.getComputedStyle(box[0]);
        maxDisplacementHorizontal = parseFloat(computedStyles.width)-60
        randomisedplacement = Math.floor((Math.random()*maxDisplacementHorizontal)+1)
        makeIntoString = randomisedplacement+"px"

        maxDisplacementVertical = parseFloat(computedStyles.height) - 60
        randomisedplacement2 = Math.floor((Math.random()*maxDisplacementVertical)+1)
        makeIntoString2 = randomisedplacement2+"px"


        number.style.position = "absolute"
        number.style.top = makeIntoString2
        number.style.left = makeIntoString
        ConvertAngleToRotateToString = AngleToRotateBy+"deg"
        number.style.rotate = ConvertAngleToRotateToString
        number.style.zIndex = "5";
        box[0].appendChild(number)

    }
}


function runCommand(){
    TwosCount.textContent = "Number of 2s: "+slider1.value
    DotsCount.textContent = "Number of dots: "+slider2.value
    RootCount.textContent = "Number of square roots: "+slider3.value
    DynamicPopulating(slider1.value,"2",true)
    DynamicPopulating(slider2.value,".",false)
    DynamicPopulating(slider3.value,"√",false)
}gp

const slider1 = document.getElementById("slider1")
const TwosCount = document.getElementById("TwosCount")
const slider2 = document.getElementById("slider2")
const DotsCount = document.getElementById("DotsCount")
const slider3 = document.getElementById("slider3")
const RootCount = document.getElementById("RootCount")

runCommand()

slider1.addEventListener("input",runCommand)
slider2.addEventListener("input",runCommand)
slider3.addEventListener("input",runCommand)

const button = document.getElementById("refresh")
button.style.position="absolute"
button.style.left="800px"
button.style.top="100px"
button.addEventListener("click", () => {
    runCommand()
})

picker = document.getElementById("colourPicker")
picker.addEventListener("input", () => {
    box[0].style.backgroundColor = picker.value
    box[0].style.borderColor = picker.value
})

Resetbackground = document.getElementById("reset")
Resetbackground.addEventListener("click", () => {
    box[0].style.backgroundColor = "#bed4df"
    box[0].style.borderColor = "#bed4df"
})