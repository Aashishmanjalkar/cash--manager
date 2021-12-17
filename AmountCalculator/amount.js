const amountReceived = document.getElementById('number');
const billAmount = document.getElementById('number2');
const msg = document.getElementById('amount');
const noOfNotes = document.querySelectorAll('.no-of-notes');
const box = document.querySelector('.box2');
const notes = [2000,500,100,50,20,10,5,2,1];

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener("click",()=>{
    navbarLinks.classList.toggle('active')
});

let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{

    const remainder = amountReceived.value - billAmount.value;
    console.log(`this is a first remainder ${remainder}`)
    Change(remainder);
    box.style.display = "block";
    if(remainder<0){
        msg.innerText =`Invalid Amount`;
    }else{
        msg.innerText =`The Remaining Amount is ${remainder}.`;
    }
   amountReceived.value = "";
   billAmount.value = ""
});
box.style.display = "none";


function Change(remainder){
    for(i=0;i<notes.length;i++){
        const numberOfNotes = Math.floor(remainder/notes[i]);
        remainder = remainder%notes[i]
        noOfNotes[i].innerText = numberOfNotes;  

    }
}

