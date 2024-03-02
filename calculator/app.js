let string="";
let input=document.querySelector("input");
let buttons=document.querySelectorAll(".button");

for(button of buttons){
    button.addEventListener("click",function(e){
        if(this.innerHTML=="="){
            string=eval(string);
            input.value=string;
        }
        else if(this.innerHTML=="C"){
            string="";
            input.value=string;
        }
        else{
            string=string+this.innerHTML;
            input.value=string;
        }
    })
}


