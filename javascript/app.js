const inputEmail = document.getElementById("inputEmail")
const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    const key="email"
    const value=inputEmail.value;

    if(value){
        localStorage.setItem(key,value)
        console.log(key)
        console.log(value)
        inputEmail.value=" "
        location.reload()
        
    }
    

})