function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";

}
function clearAll() {
    // clear the display completely
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        const expression= document.getElementById("display").value = eval(document.getElementById("display").value);
        // Use Function constructor instead  of eval for safer evaluation
        const result = new Function(`return ${expression}`)();
        document.getElementById("display"). value = result;
    } catch (error) {
    alert("invalid Expression");
    clearDisplay();
    }
}