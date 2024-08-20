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
            refund_create_date: new Date().getDate()
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
            }).replace("R$","").replace(".",","))

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
        
            div4.append(p1, small1)
        
            div5.appendChild(copyImg)
            

            div6.appendChild(p2)
        
            div1.append(div3, div4)
        
            div2.append(div6, div5)
            div2.classList.add("values")

            li.append(div1, div2)
            ul.appendChild(li)

           title.value = ""
           value.value = ""
            
           title.focus()
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

         dissapear.remove()

         const p =  dissapear.querySelector("div.values p").textContent.replace("R$","").replace(",",".")
         const subtract = parseFloat(p)

         total -= subtract

         total.toFixed(2)
         valueTotal.textContent = `${total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
         }).replace("R$", "").replace(".",",")}`

         despesas -=1
         costs.textContent = `${despesas} ${ despesas > 1 ? "despesas" : "despesa"}`
    }
})

//Fim


