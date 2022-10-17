let number_container=document.querySelector('.rating-state__number-container')
let rateNumber=document.querySelector('.thank-state__selected-newnumber')
let submitBtn=document.querySelector('.rating-state__butoon-submit')
let ratingstate=document.querySelector('.rating-state')
let thankstate=document.querySelector('.thank-state')
/**escucha los elemnetos dentro del div de lso numeros "Clic" */
number_container.addEventListener('click',event=>{
    let numberselect=event.target.innerText;
    rateNumber.innerText=numberselect;
    if (numberselect>0 || numberselect<=5){
        submitBtn.addEventListener('click',()=>{
            ratingstate.style.display='none';
            thankstate.style.display='flex';
        });
    }
});