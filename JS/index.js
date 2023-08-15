// step 1
document.getElementById ('upButton').addEventListener ('click',function () {
    const newCountElement = document.getElementById ('CountNumber');
    const newCountElementString = newCountElement.innerText;
    const countNumber = parseFloat (newCountElementString);
    const newCountNumber = countNumber + 1;

    newCountElement.innerText = newCountNumber;
})
document.getElementById ('upButton2').addEventListener ('click',function () {
    const newCountElement = document.getElementById ('CountNumber2');
    const newCountElementString = newCountElement.innerText;
    const countNumber = parseFloat (newCountElementString);
    const newCountNumber = countNumber + 1;

    newCountElement.innerText = newCountNumber;
})