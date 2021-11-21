let border_box=document.querySelector(".border-box");
let buttons=document.querySelectorAll(".font-style-info button");
let info_header=document.querySelector(".border-box .info-style");
buttons.forEach(el =>{
    
    el.addEventListener("click",function(event){
        buttons.forEach(e =>{
            e.style.removeProperty("border-style");
            e.style.removeProperty("color");
        })
        let hadi=event.currentTarget.dataset.style;
        console.log(info_header);
        info_header.textContent=`${hadi}`;
        event.target.style.setProperty("color","#000");
        event.target.style.setProperty("border-style",`${hadi}`);
        border_box.style.setProperty("border-style",`${hadi}`);
    })
})
