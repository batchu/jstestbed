 function sayHello(name){
    document.getElementById('greet').innerHTML=`<p>Hello ${name}</p>`
}

var form = document.getElementById("form")
form.onsubmit = handleSubmit.bind(form)

function handleSubmit(event){
    event.preventDefault()
    const name = event.target.elements.name.value
    sayHello(name)
}