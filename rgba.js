const rgbaNumber = 256

// 255,128,255
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click", function(){
    rgb=[];
    rgbaTag1='rgba(';
    rgbaTag2=')'
    
    for(let i=0; i <3; i++){
      rgb[i] =getRandomRgba(); 

    }
    color.textContent='rgba('+rgb+')';
    document.body.style.backgroundColor=rgbaTag1+rgb+rgbaTag2;
});


function getRandomRgba(){
    return Math.floor(Math.random() * rgbaNumber);
}
