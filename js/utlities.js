// blog button
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'blog.html';
}
)
//triangle and rectangle  calculation
function getInputbyId1(inputFieldId1) {
    const inputField1 = document.getElementById(inputFieldId1);
    const inputvalueAmount1 = inputField1.value;

    if (inputvalueAmount1 != '' && inputvalueAmount1 >= 0) {
        const inputvalueFloatAmount1 = parseFloat(inputvalueAmount1);
        inputField1.value = '';
        return inputvalueFloatAmount1;
    }
    else {
        alert("Wrong Credential");
        
    }
}

function getInputbyId2(inputFieldId2) {
    const inputField2 = document.getElementById(inputFieldId2);
    const inputvalueAmount2 = inputField2.value;

    if (inputvalueAmount2 != '' && inputvalueAmount2 >= 0) {
        const inputvalueFloatAmount2 = parseFloat(inputvalueAmount2);
        inputField2.value = '';
        return inputvalueFloatAmount2;
    }
    else {
        alert("Wrong Credential");
        
    }
    
}
//other geometry calculation

function getBothInput(input1, input2, btnId) {
    if (btnId == 'parallelogram-btn') {
        const paraArea = input1 * input2;
        return paraArea;
    }
    else if (btnId == 'rhombus-btn') {
        const rhomArea = 0.5 * input1 * input2;
        return rhomArea;
    }
    else if (btnId == 'pentagon-btn') {
        const pentaArea = 0.5 * input1 * input2;
        return pentaArea;
    }
    else {
        const elArea = 3.14 * input1 * input2;
        return elArea;
    }
}
let count = 1;
function result(shape, area) {
    const output = document.getElementById('area-box');

    output.innerText += count + "." + " " + shape + "  " + area + "cm²\n\n";
    count++;

}

