// Rectangle calculate button
document.getElementById('rectangle-btn').addEventListener('click',function()
{
    const rectangleInputFieldAmount1= getInputbyId1('rectangle-width');
    const rectangleInputFieldAmount2= getInputbyId2('rectangle-length');

    const rectangleArea= rectangleInputFieldAmount1*rectangleInputFieldAmount2;
    result("Rectangle",rectangleArea.toFixed(2));

})