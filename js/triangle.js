//triangle calculate button
document.getElementById('triangle-btn').addEventListener('click', function () {
    const triangleInputFieldAmount1 = getInputbyId1('triangle-base');
    const triangleInputFieldAmount2 = getInputbyId2('triangle-height');

    const triangleArea = 0.5 * triangleInputFieldAmount1 * triangleInputFieldAmount2;

    result("Triangle",triangleArea.toFixed(2));
    


})


