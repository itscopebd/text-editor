
let content= document.getElementById("text__content");
let click=0;
function bold(){
    click +=1;
    if(click==1 || click%2==1){
        content.style.fontWeight="bold";
    }else{
        content.style. fontWeight="normal";   
    }
   
   console.log(click)
}
function italicText(){
    click +=1;
    if(click==1 || click%2==1){
        content.style.fontStyle="italic";
    }else{
        content.style.fontStyle="normal";
       
    }
}
function underLine(){
    click +=1;
    if(click==1 || click%2==1){
        content.style.textDecoration="underline";
    }else{
        content.style.textDecoration="normal";
       
    }
}