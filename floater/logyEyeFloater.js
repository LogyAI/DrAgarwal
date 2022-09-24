document.body.innerHTML+=`<a href="https://logy.ai/DrAgarwal" target='_blank'>
<div 
id="floaterMain"
>
<div id="blurBg"></div>
<div id="whiteBg"></div>
<div id="scan"></div>
<img style="position: absolute;left:39px;top: 44px;width: 20px;z-index:1" src="https://logy.ai/DrAgarwal/floater/drAEye.png" alt="">
<img id='touch' style="position: absolute;left:30px;top: 72px;width: 44px" src="https://logy.ai/DrAgarwal/floater/touch.svg" alt="">
<img id="text" src="https://logy.ai/DrAgarwal/floater/drA.svg" alt="">
<style>


    #floaterMain{
        position: fixed;
        top: 50vh;
        left: 10px;
        height: 100px;
        width: 100px;
        z-index: 1000;
    }
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
#floaterMain{
    position: fixed;
    top: 50vh;
    right: 10px;
    height: 100px;
    width: 100px;
    z-index: 1000;
}
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
}
</style>
</div>
</a>

`