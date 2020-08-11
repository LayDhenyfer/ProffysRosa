// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao 
function cloneField() {
   // Duplicar os campos. Que campo?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false
 
  // Pegar os campos. Que campos?
  const fields = newFieldContainer.querySelectorAll('input')

  //fields[0].value = ""
  //fields[1].value = ""

  // Para cada campo, limpar 
  fields.forEach(function(field) {
    // Pega o field do momento e limpa ele
    field.value = ""
  });


  // Colocar na pagina: onde??
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    