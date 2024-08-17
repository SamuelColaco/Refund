//Inicio

//Inicializando as variaveis globais

const title = document.querySelector("#despesa")
const option = document.querySelector("#select")
const value = document.querySelector("#value")
const button = document.querySelector("#button")
const costs = document.querySelector("#costs")
const valueTotal = document.querySelector("#value-total")
const ul = document.querySelector("ul")
let despesas = 0
let total = 0


// Criando de adicionar a despesa
button.addEventListener("click", () => {



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
    const imgs = document.createElement("img")

    
    
    const cancel = document.querySelector(".cancel")
    const copyImg = cancel.cloneNode(true)


    if(title.value !== "" && value.value >= 1){

        p1.textContent = title.value
        small1.textContent = option.value
        p2.textContent = value.value
        small2.textContent = "R$"
        
    
        total+= Number(value.value)
        total.toFixed(2)
        despesas+=1
        costs.textContent = `${despesas} despesas`
        valueTotal.textContent = String(total)

        switch (option.value){
            case "hospedagem":
                imgs.src = "imgs/assets/host.svg"
                break
            case "outros":
                imgs.src = "imgs/assets/others.svg"
                break
            case "servicos":
                imgs.src = "imgs/assets/engine.svg"
                break
            default:
                imgs.src = "imgs/assets/food.svg"
        }

        span1.appendChild(imgs)
    
    
        div3.appendChild(span1)
    
        div4.appendChild(p1)
        div4.appendChild(small1)
    
        div5.appendChild(copyImg)
        
        p2.appendChild(small2)

        div6.appendChild(p2)
    
        div1.appendChild(div3)
        div1.appendChild(div4)
    
        div2.appendChild(div6)
        div2.appendChild(div5)
        div2.classList.add("values")

        li.appendChild(div1)
        li.appendChild(div2)
        ul.appendChild(li)

        title.value = ""
        value.value = ""
    }
    else{
        alert("Preencha os dados")
    }

})

//Delegando o evento de apagar para a ul

ul.addEventListener("click", (event) => {
    if(event.target.classList.contains("cancel")){
         const dissapear = event.target.parentNode.parentNode.parentNode

         dissapear.style.display = "none"

         const p =  dissapear.querySelector("div.values p").textContent.replace("R$","").trim()
         const subtract = parseFloat(p)

         total -= subtract
         total.toFixed(2)
         valueTotal.textContent = `${total}`

         despesas -= 1
         costs.textContent = `${despesas} despesas`
    }
})

//Fim