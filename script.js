const buttons = document.querySelectorAll('.tab-button');
const panel = document.querySelectorAll('.tab-panel');
buttons.forEach((btn,clickedindex)=>{
    btn.addEventListener('click',()=>{
        buttons.forEach((button,index)=>{
            button.classList.toggle('is-active',index===clickedindex);
        })
        panel.forEach((panel, index) => {
            panel.classList.toggle('is-visible', index === clickedindex);
            panel.hidden = index !== clickedindex;
        });
    });

});
