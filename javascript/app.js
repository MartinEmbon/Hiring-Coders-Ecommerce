const inputEmail = document.getElementById("inputEmail")
const btn = document.getElementById("btn")


btn.addEventListener("click",()=>{    
    const key="email"
    const value=inputEmail.value;

    if(key && value){        
        localStorage.setItem(key,value)            
        inputEmail.value=" "
        console.log(value)
        
        alert(`Proceso de localStorage com chave ${key}:${value} feito com sucesso!`)    
        } else{
            alert("Campo email obrigatório")
    }
    location.reload()
})
