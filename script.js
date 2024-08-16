//Inicio

//Inicializando as variaveis globais

const title = document.querySelector("#despesa")
const option = document.querySelector("#select")
const value = document.querySelector("#value")
const button = document.querySelector("#button")
const costs = document.querySelector("#costs")
const valueTotal = document.querySelector("#value-total")
const ul = document.querySelector("ul")


// Criando de adicionar a despesa
button.addEventListener("click", () => {


    let despesas = 0
    let total = 0

    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const div4 = document.createElement("div")
    const div5 = document.createElement("div")
    const div6 = document.createElement("div")
    const li = document.createElement("li")
    const span1 = document.createElement("span")
    const span2 = document.createElement("span2")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const small1 = document.createElement("small")
    const small2 = document.createElement("small")

    
    
    const cancel = document.querySelector(".cancel")
    const copyImg = cancel.cloneNode(true)


    if(title.value !== "" && value.value >= 1){

        p1.textContent = title.value
        small1.textContent = option.value
        p2.textContent = value.value
        small2.textContent = "R$"
        
    
        total+= value.value
        despesas+=1
        costs.textContent = String(despesas)
        valueTotal.textContent = String(total)
    
    
        div3.appendChild(span1)
    
        div4.appendChild(p1)
        div4.appendChild(small1)
    
        div5.appendChild(copyImg)
    
        div6.appendChild(small2)
        div6.appendChild(p2)
    
        div1.appendChild(div3)
        div1.appendChild(div4)
    
        div2.appendChild(div6)
        div2.appendChild(div5)

        li.appendChild(div1)
        li.appendChild(div2)

        ul.appendChild(li)
    }
    else{
        alert("Preencha os dados")
    }



})

//Fim