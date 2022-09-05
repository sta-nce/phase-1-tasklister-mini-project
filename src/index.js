document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submitForm = document.querySelector('form')
  submitForm.addEventListener ('submit',(e)=>{
    e.preventDefault()
    handleToDo(e.target.new-task-description.value)

  }) 
});
 function handleToDo(todo){
   let p = document.createElement('p') 
   let btn = document.createElement('button')
   btn.textContent ='x'
   p.textContent = todo
   p.appendChild(btn)
   document.querySelector('list').appendChild(p)
}