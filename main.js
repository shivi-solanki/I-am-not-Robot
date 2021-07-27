const checkbox = document.getElementById('checkbox')
const submitBtn = document.querySelector("button[type=submit]")
checkbox.disabled = true;
submitBtn.disabled = true;
// console.log(submitBtn)

const elements = document.querySelectorAll(".element")
const selectColor = document.getElementById("selectColor")

 elements.forEach(function(element){
         const color = getRandomColor();
         element.style.backgroundColor = color;
         element.innerHTML = color
         selectColor.innerHTML = color

        })


 function getRandomColor() {
        let letter = "0123456789ABCDEF";
        let colorcode = "#";
        for(let i=0; i<6; i++){
        colorcode += letter[Math.floor(Math.random() * 16)]
        }
        return colorcode;
 }

elements.forEach(function(element){
           element.addEventListener("click",function(){
               if(element.innerHTML == selectColor.innerHTML){
                     checkbox.checked = true
                     alert("You are Human!")
                     submitBtn.disabled = false
                     submitBtn.style.backgroundColor = "rgb(0, 167, 75)"
               }
               else{
                        alert("Please varify that you are human!")
                        location.reload()
               }
           })
})


  