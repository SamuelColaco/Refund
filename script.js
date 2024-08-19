//Inicio

//Inicializando as variaveis globais

const title = document.querySelector("#despesa")
const option = document.querySelector("#select")
const value = document.querySelector("#value")
const button = document.querySelector("#button")
const costs = document.querySelector("#costs")
const valueTotal = document.querySelector("#value-total")
const ul = document.querySelector("ul")
const form = document.querySelector("form")
let despesas = 0
let total = 0

//validando o input value
    value.oninput = () => {
        let valueInput = value.value.replace(/\D/g, "")

        valueInput = Number(valueInput) / 100

        value.value = formatToCurrentMoney(valueInput)
    }

    function formatToCurrentMoney(money){
        money = money.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        }) 

        return money
    }


    form.onsubmit = (event) => {
        event.preventDefault()

        const refund = {
            id: new Date().getTime(),
            refund: title.value,
            refund_id: option.value,
            refund_name: option.options[option.selectedIndex].text,
            refund_amount: value.value,
            refund_create_date: new Date().getDay()
        }

        createRefund(refund)

    }
// Criando  adicionar a  despesa
  function createRefund(refund){

    try {
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
        const imgs = document.createElement("img")

        
        
        const cancel = document.querySelector(".cancel")
        const copyImg = cancel.cloneNode(true)


        if(refund.refund !== ""  && refund.refund_amount !== 0){

            p1.textContent = refund.refund
            p2.textContent = refund.refund_amount
            
        
            total =  Number(total) + Number(refund.refund_amount.replace("R$", "").replace(",","."))
            total.toFixed(2)
            despesas +=1
            costs.textContent = `${despesas} ${ despesas > 1 ? "despesas" : "despesa" }`
            valueTotal.textContent = String(total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).replace("R$",""))

            switch (refund.refund_id){
                case "host":
                    imgs.src = `imgs/assets/${refund.refund_id}.svg`
                    small1.textContent = `${refund.refund_name}`
                    break
                case "others":
                    imgs.src =`imgs/assets/${refund.refund_id}.svg`
                    small1.textContent = `${refund.refund_name}`
                    break
                case "services":
                    imgs.src = `imgs/assets/${refund.refund_id}.svg`
                    small1.textContent = `${refund.refund_name}`
                    break
                case "transport":
                    imgs.src = `imgs/assets/${refund.refund_id}.svg`
                    small1.textContent = `${refund.refund_name}`
                    break
                default:
                imgs.src = "imgs/assets/food.svg"
                small1.textContent = "alimentação"
            }

            span1.appendChild(imgs)
        
        
            div3.appendChild(span1)
        
            div4.appendChild(p1)
            div4.appendChild(small1)
        
            div5.appendChild(copyImg)
            

            div6.appendChild(p2)
        
            div1.appendChild(div3)
            div1.appendChild(div4)
        
            div2.appendChild(div6)
            div2.appendChild(div5)
            div2.classList.add("values")

            li.appendChild(div1)
            li.appendChild(div2)
            ul.appendChild(li)

        }
        else{
            alert("Preencha os dados")
        }
    
    } 

    catch (error) {
    console.log(error)
    alert("Erro aconteceu")
    }
    
    

  }
//Delegando o evento de apagar para a ul

ul.addEventListener("click", (event) => {
    if(event.target.classList.contains("cancel")){
         const dissapear = event.target.parentNode.parentNode.parentNode

         dissapear.style.display = "none"

         const p =  dissapear.querySelector("div.values p").textContent.replace("R$","")
         const subtract = parseFloat(p)

         total -= subtract

         total.toFixed(2)
         valueTotal.textContent = `${total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
         }).replace("R$", "")}`

         despesas -=1
         costs.textContent = `${despesas} ${ despesas > 1 ? "despesas" : "despesa"}`
    }
})

//Fim


