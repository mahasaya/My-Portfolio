const Text = document.querySelector(".Text");
const Email = document.querySelector(".Email");
const Subject= document.querySelector(".subject");
const Msg = document.querySelector(".Message");
const elementfirst =  document.querySelector(".first");
const elementsecond =  document.querySelector(".second");
const elementthird =  document.querySelector(".third");
const elementfourth =  document.querySelector(".fourth");
const btn = document.querySelector(".btn-project");

function clearError() {
    errors = document.getElementsByClassName("hello");

   for (let item of errors){
    item.innerHTML = " ";
   }
}

function setError(element){

    element.innerHTML =  "<b><p>*Error</p></b>";

}

function validateForm() {
    console.log("chlra h kya ?")

    clearError();

    if(Text.value.length < 5){
        setError(elementfirst);
        return false ;
    }

    if (Email.value.lenght>30){
        setError(elementsecond);
        return false;
    }

    if(Subject.value.length > 100){
        setError(elementthird);
        return false;
    }

    if (Msg.value.length > 500){
        setError(elementfourth);
        return false;
    }
    return true ;
}

btn.addEventListener('click', ()=>{
    alert("Coming soon! In the meantime, check out my website through the link provided right next to this post. Stay tuned for exciting updates!");
})
