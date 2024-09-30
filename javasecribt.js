document.getElementById("btn1").onclick = function() {
    const titles = document.getElementById("bould");
    
    titles.style.fontWeight = "bold";    
}; 


document.getElementById("btn2").onclick = function() {
    const titles = document.getElementById("bould");
    
    titles.style.fontStyle = "italic";    
}; 


document.getElementById("btn3").onclick = function() {
    const titles = document.getElementById("bould");
    
    titles.style.textAlign = "left";    
}; 
document.getElementById("btn4").onclick = function() {
    const titles = document.getElementById("bould");
    
    titles.style.textAlign = "center";    
}; 
document.getElementById("btn5").onclick = function() {
    const titles = document.getElementById("bould");
    
    titles.style.textAlign = "right";    
}; 

document.getElementById("btn6").addEventListener("click", function() {
    const titles = document.getElementById("bould");
    titles.value = titles.value.toUpperCase(); // تحويل النص إلى أحرف كبيرة عند النقر على الزر
});


document.getElementById("btn7").addEventListener("click", function() {
    const titles = document.getElementById("bould");
    titles.value = titles.value.toLowerCase(); // تحويل النص إلى أحرف كبيرة عند النقر على الزر
});


document.getElementById("btn8").onclick = function() {
    const titles = document.getElementById("bould");
    
    titles.style.textTransform = "uppercase";    
};

document.getElementById("btn9").onclick = function() {
    const titles = document.getElementById("bould");
    titles.value = ''; 
};


const btn10 = document.getElementById('btn10');
const colortext = document.getElementById('colortext');
const bould = document.getElementById('bould');

btn10.addEventListener('click', () => {
    colortext.click(); 
});

// تغيير لون النص عند اختيار لون جديد
colortext.addEventListener('input', () => {
    bould.style.color = colortext.value; 
});

//////////////////////////


const btn11 = document.getElementById('btn11');
const colorground = document.getElementById('colorground');
const bould1 = document.getElementById('bould');

btn11.addEventListener('click', () => {
    colorground.click();  
});

colorground.addEventListener('input', () => {
    bould1.style.backgroundColor = colorground.value; 
});


//////////////////////////////




const btn12 = document.getElementById('btn12');
const size = document.getElementById('size');
const bould2 = document.getElementById('bould');

// عند النقر على الزر، يتم تفعيل color picker لاختيار لون الخلفية
btn12.addEventListener('click', () => {
    size.click();  
});

// عند تغيير اللون في color picker، يتم تغيير خلفية textarea
size.addEventListener('input', () => {
    bould2.style.fontSize = size.value + 'px';});

    //////////////////////////////////////////
const btn13 = document.getElementById('btn13');
const family = document.getElementById('family');
const bould3 = document.getElementById('bould');

// عند النقر على الزر، يتم تفعيل color picker لاختيار لون الخلفية
btn12.addEventListener('click', () => {
    size.click();  
});

// عند تغيير اللون في color picker، يتم تغيير خلفية textarea
size.addEventListener('input', () => {
    bould2.style.fontFamily = family.value + 'Courier New';});




