var imagensDado = ["img/dado-face1.png","img/dado-face2.png","img/dado-face3.png","img/dado-face4.png","img/dado-face5.png","img/dado-face6.png"]

// function dadosAleatorios(num) {

//     try {
//         while (document.querySelector("img") != null) {
//             document.querySelector("img").remove()
//         }
//     } catch (error) {
//         console.error("just verifying")
//     }
//     for(let i = 0; i< num; i++){
//         var index = Math.floor(Math.random()*6)
        
//         const img = document.createElement("img")
//         img.style.width = "200px"
//         img.src = imagensDado[index]
    
//         document.body.appendChild(img)
//     }
// }
const randomNums = [];

function beginGame(num){
    while (document.querySelector("img") != null) {
        document.querySelector("img").remove()
    }
    if(document.getElementById('input') != null){
        document.getElementById('input').remove()
        document.getElementById('button').remove()
    }

    document.getElementById("modosDeCombinar").innerHTML = 6**num + " maneiras"

    for (let index = 0; index < num; index++) {
        var e = Math.ceil(Math.random()*6)
        randomNums[index] = e

        const img = document.createElement("img")
        img.style.width = "200px"
        img.src = "img/cartaInterrogacao.png"
        img.classList.add(`escolha`)
        img.setAttribute(`id`, `escolha${index+1}`)
        img.setAttribute("onclick", `addFocus(${index+1})`)
        document.body.appendChild(img)
    }

    var input = document.createElement("input")
    input.placeholder = 'Digite seu palpite'
    input.setAttribute('id', 'input')
    var button = document.createElement("button")
    button.innerHTML = "Enviar"
    button.setAttribute("id", "button")
    button.setAttribute("onclick", "sendGuess(itemEmFoco)")

    document.getElementById("area").appendChild(input)
    document.getElementById("area").appendChild(button)

    addFocus(1)
    console.log(randomNums)

}

var itemEmFoco = 1;

function addFocus(id){
    let img = document.getElementsByClassName('escolha')
    for(let i = 1; i<= img.length; i++){
        img[i-1].classList.remove('foco')
        if(id == i){
            img[i-1].classList.add("foco")
            itemEmFoco = id
            console.log(itemEmFoco)
        }
    }

}

function sendGuess(nthElement){
    let input = document.getElementById('input')
    if(parseInt(input.value) < 1 || parseInt(input.value) > 6){
        alert("Somente números de 1 a 6")
        return
    }

    let img = document.getElementById(`escolha${nthElement}`)
    if(input.value == randomNums[nthElement-1]){
        alert("YEEEEEEEEY")
        img.src = `img/dado-face${input.value}.png`
        img.setAttribute("onclick", ``)
        img.classList.remove("foco")
    } else{
        if(randomNums[nthElement-1] > input.value){
            alert("tente um número maior")
        }else{
            alert("tente um número menor")
        }
    }

    input.value = ""
}