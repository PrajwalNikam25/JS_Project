let URL = "https://cat-fact.herokuapp.com/facts"
let para = document.querySelector("#Para")
let but = document.querySelector("#bt")
but.innerText = "Button"


let data = async()=>{

    let fun = await fetch(URL)
    let res = await fun.json()
    para.innerText = res[1].text
    
}
but.addEventListener("click",data)
