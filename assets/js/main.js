
const box = document.querySelector('.bulbbox');
const offBulb = document.querySelector('.bulb .offbulb');
const onBulb = document.querySelector('.bulb .onbulb');
const button = document.querySelector(" button");

onBulb.classList.add("dnone");

button.addEventListener('click', () => {
    onBulb.classList.toggle("dnone");
   
    offBulb.classList.toggle("dnone"); 


    if (button.innerHTML === "ON") {
        button.innerHTML = "OFF";
        box.style.height = ("524px")
        button.style. borderBottom= ("2px solid #979797");
        button.style. borderRight= ("2px solid #979797");
        button.style. borderLeft= ("None");
        button.style. borderTop= ("None");
       
    } else {
        button.innerHTML = "ON";
        button.style. borderTop= ("2px solid #979797");
        button.style. borderLeft= ("2px solid #979797");
        button.style. borderRight= ("None");
        button.style. borderBottom= ("None");
        

        
    }

})



  