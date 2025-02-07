let CheckBoxList=document.querySelectorAll(".customCheckbox");
let InputList=document.querySelectorAll(".goal_input");
let red=document.querySelector('.rectangle6');
let progress=document.querySelector(".rectangle5");
let progress2=document.querySelector(".hero");
var x=0;
function UpdateProgress(child){
    current_width=parseFloat(progress.style.width) || 0;
    if(child.classList.contains("hide")){
        x--;
        progress.style.width=(current_width-33.33)+"%";
        progress2.innerHTML = `${x}/3 Completed`; 


    }else{
        x++
        progress.style.width=(current_width+33.33)+"%";
        progress2.innerHTML = `${x}/3 Completed`; 
        

    }
    if(x==0){
        progress2.classList.add("hero");
        progress.classList.add("hero");

    }else if(x>0){
        progress2.classList.remove("hero");
        progress.classList.remove("hero");
    }
}
CheckBoxList.forEach((CheckBox)=>{
    CheckBox.addEventListener("click",()=>{
        let child=CheckBox.children;
        if(InputList[0].value.trim()=="" || InputList[1].value.trim()=="" || InputList[2].value.trim()==""){
            red.classList.remove("hide");
        }else{
            red.classList.add("hide");
            child[0].classList.toggle("hide");
            UpdateProgress(child[0]);
        }
    })
})
InputList.forEach((inputs)=>{
    inputs.addEventListener("focus",()=>{
        red.classList.add("hide");
    })
})
