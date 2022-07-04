const input = document.getElementById('input')
const addButton = document.getElementById('add')
const error = document.getElementById('error')
const list = document.querySelector('ul')
let todos = [];
const data = {
    id:'',
    text:''
}

//generating id
// method1/
const generateId = ()=>{
    if(todos.length===0){
        return 1
    }else{
        return todos[todos.length-1].id + 1;
    }
}
// methodII
const generateId2= ()=>new Date().getTime()

function generateTodo(todo) {
    return ` <li><span>${todo.text}</span><button class="close" data-id ="${todo.id}"  class="delete">x</button></li>`
}
const updateUI=()=>{
    list.textContent='';
    todos.forEach(todo=>{
     list.innerHTML += generateTodo(todo)
    })
}

const addtoDoFuntion=e=>{
        e.preventDefault();
       if(input.value!==''){
           const datum = {
               id :generateId(),
               text:input.value,
           } 
           todos.unshift(datum);
           input.value='';
           input.focus(); 
           updateUI()
           
           input.value='';  
       }else{
           error.textContent = 'Please enter a a todo'
           setTimeout(() => {
               error.textContent='';
           }, 2500);
       }
       }
//delete a todo
const deletTodo = (id)=>{
todos = todos.filter(data => data.id !==id)
updateUI();
}
//event listeners
//add todo events
addButton.addEventListener('click', addtoDoFuntion)
//event delegation
list.addEventListener('click',e=>{
    e.preventDefault();
    window.event = e;
    if(e.target.getAttribute('data-id') && e.target.classList.contains('close')){
     var id = Number(e.target.getAttribute('data-id'))
     deletTodo(id); 
 }
})

