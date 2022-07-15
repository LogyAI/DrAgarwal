// document.body.innerHTML+=`<a href="https://logy.ai/" target='_blank'>
// <div 
// style="
// position: fixed;
// top: 73vh;
// left: 4px;
// height: 100px;
// width: 100px;
// z-index: 100;
// ">
// <div id="scan"></div>
// <img style="position: absolute;left:11px;top: 36px;width: 75.41px" src="https://github.com/Debaprasad-dez/logyFloater/blob/main/eye.png?raw=true" alt="">
// <img src="https://raw.githubusercontent.com/Debaprasad-dez/logyFloater/013405fbb4c7fb09bdeebc1968615480f8d02c36/floater3.svg" alt="">
// <style>
// #scan{
//     position: absolute;
//     background: linear-gradient(180deg, rgba(0,255,235,0) 0%, rgba(0,224,255,0.4822303921568627) 100%);
//     height: 40px;
//     width: 96px;
//     top: 22px;
//     left: 1px;
//     z-index: 100;
//     border-bottom: solid 2px #1B8796;
//     animation: animate 4s infinite;
// }
// @keyframes animate {
//     0%{
//         height: 1px;
//     }
//     50%{
//         height: 78px;
//     }
//     100%{
//         height: 0;
//     }
// }
// @media screen and (max-width: 600px) {
// #floaterInstructions{
//     display: none;
// }
// }
// </style>
// </div>
// </a>
// <div id="floaterInstructions" style="position:absolute;height:100px;width:250px;top:60vh;left: 108px;">
// <img src="https://raw.githubusercontent.com/Debaprasad-dez/logyFloater/c15c1666a5a4532a346f22b9b704bc6f50035796/instructions.svg" alt="">
// <button id="btnCross" style="position: absolute;background: none;border: none;cursor: pointer;">
//     <img  src="https://raw.githubusercontent.com/Debaprasad-dez/logyFloater/c15c1666a5a4532a346f22b9b704bc6f50035796/cross.svg" alt="">
// </button>
// </div>
// `

// const btnCross=document.getElementById('btnCross');
// const floaterInstructions=document.getElementById('floaterInstructions');
// btnCross.addEventListener('click',function () {
//     floaterInstructions.style.display='none'
// })



document.body.innerHTML+=`<a href="https://logy.ai/" target='_blank'>
<div 
style="
position: fixed;
top: 60vh;
left: 10px;
height: 100px;
width: 100px;
z-index: 100;
">
<div id="blurBg"></div>
<div id="whiteBg"></div>
<div id="scan"></div>
<img style="position: absolute;left:39px;top: 44px;width: 20px;z-index:1" src="drAEye.png" alt="">
<img id='touch' style="position: absolute;left:30px;top: 72px;width: 44px" src="touch.svg" alt="">
<img id="text" src="drA.svg" alt="">
<style>
#text{
    position: absolute;
    width: 56px;
    left: 20.5px;
    top: 19px;
    background: #ffffff;
    border-radius: 8px;
}
#whiteBg{
    position: absolute;
    width: 73px;
    height: 74px;
    left: 12px;
    top: 11px;
    background: #ffffff;
    border-radius: 8px;
    z-index: -10;
}
#blurBg{
    position: fixed;
    width: 97px;
    height: 96px;
    background: rgba(222, 222, 222, 0.3);
    backdrop-filter: blur(6px);
    border-radius: 16px;
    z-index: -10;
}
#scan{
    position: absolute;
    background: linear-gradient(180deg, rgba(103, 210, 223, 0.25) 0%, rgba(103, 210, 223, 0.125) 85.42%, rgba(103, 210, 223, 0.25) 100%);
    height: 40px;
    width: 73px;
    top: 11px;
    left: 12px;
    z-index: 100;
    border-radius: 8px 8px 0 0;
    border-bottom: solid 1px #0C50A3;
    animation: animate 4s infinite;
}
#touch{
    position: absolute;
    transform: translatey(0);
    animation: expand 2s infinite;
}
@keyframes animate {
    0%{
        height: 10px;
    }
    50%{
        height: 74px;
    }
    100%{
        height: 10px;
    }
}
@keyframes expand {
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.5);
    }
    100%{
        transform: scale(1);
    }
}
@media screen and (max-width: 600px) {
#floaterInstructions{
    display: none;
}
}
</style>
</div>
</a>

`


