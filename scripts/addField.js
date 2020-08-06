/* 
    - search button "Novo horário" (id="#add-time")
    - when click, execute action
    - duplicate fields ".schedule-item"
    - clean completed fields
    - show fields on the page
*/

// get the button 
document.querySelector('#add-time')
// click event + runs the function cloneField
.addEventListener('click', cloneField)

// creating the function
function cloneField(){

    // get the field
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // get the inputs
    const fields = newFieldContainer.querySelectorAll('input')

    // run through each field and set content to " "
    fields.forEach(function(field){
        field.value = ""
    }) 

    // show on the page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}