const inputEmail = document.getElementById("inputEmail")
const btn = document.getElementById("btn")


btn.addEventListener("click",()=>{    
    const key="email"
    const value=inputEmail.value;

    if(key && value){        
        localStorage.setItem(key,value)            
        inputEmail.value=" "
        alert(`Proceso de localStorage com chave ${key}:${value} feito com sucesso!`)    
        
        for (let i=0;i <localStorage.length; i++){
            const key=localStorage.key(i);
            const value=localStorage.getItem(key)
            console.log(value)
            location.reload()
        }

    }
})
