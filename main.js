const input = document.querySelector(".display")

function add(item){
    input.value += item 
}

function calcul(){
    try{
        input.value = eval(input.value)
    }catch(error){
        input.value = "Error"
    }
}

function clearInput(){
    input.value = ""
}