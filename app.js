
const click1=document.getElementById("click1");

click1.addEventListener("click", ()=>{
    
    //cambia el color de la caja y del texto
    click1.style.background="black";
    click1.style.color="white";
})

const click2=document.getElementById("click2");
click2.addEventListener('click', ()=>{
    click2.style.color="#f96d00";
    alert('Haz hecho click!!')
})


const click3=document.getElementById("click3");
click3.addEventListener("click", ()=>{
    click3.style.width="320px";
    click3.style.height="220px";
    click3.style.fontSize="30px";
    click3.style.background="#9fd3c7";
})


//eventos focus

const focus1=document.getElementById("selectFocus");

focus1.addEventListener("focus", ()=>{
    const focus1=document.getElementById("focus1");

    focus1.style.background="#5585b5";
    focus1.style.border="1px solid white";
})


const focus2=document.getElementById("inputFocus");

focus2.addEventListener("focus", ()=>{
    focus2.style.background="black";
})


const txtFocus=document.getElementById("txtFocus");

txtFocus.addEventListener("focus", ()=>{
    txtFocus.style.background="#00bbf0";
})
//eventos mouseover

const mouse1=document.getElementById("mouse1");

mouse1.addEventListener("mouseover", ()=>{
    mouse1.style.background="#c4c1e0";
})


const mouse2=document.getElementById("mouse2");

mouse2.addEventListener("mouseover", ()=>{
    mouse2.style.width="340px";
    mouse2.style.width="340px";
})



const mouse3=document.getElementById("mouse3");

mouse3.addEventListener("mouseover", ()=>{
    mouse3.style.fontSize="30px";
    mouse3.style.background="#596e79";
    mouse3.style.color="white";
})



