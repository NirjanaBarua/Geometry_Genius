// parallelogram
document.getElementById('parallelogram-btn').addEventListener('click',function()
{
    const b=10;
    const h=12;

    const parallelogramArea= getBothInput(b,h,'parallelogram-btn');
    result("Parallelogram",parallelogramArea.toFixed(2));
    
})

document.getElementById('rhombus-btn').addEventListener('click',function()
{
    const d1=16;
    const d2=8;

    const rhombusArea= getBothInput(d1,d2,'rhombus-btn');
    result("Rhombus",rhombusArea.toFixed(2));
    
})

document.getElementById('pentagon-btn').addEventListener('click',function()
{
    const p=6;
    const b=10;

    const pentagonArea= getBothInput(p,b,'pentagon-btn');
    result("Pentagon",pentagonArea.toFixed(2));
    
})

document.getElementById('ellipse-btn').addEventListener('click',function()
{
    const a=10;
    const b=4;

    const ellipseArea= getBothInput(a,b,'ellipse-btn');
    result("Ellipse",ellipseArea.toFixed(2));
    
})