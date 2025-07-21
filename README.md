 🔹 type="submit"
Used in: <button> or <input> elements

Purpose: Turns a button into a form submit button

What it does: When clicked, it submits the form it belongs to.
 
 
 
onsubmit
Used in: <form> element

Purpose: Specifies JavaScript code to run when the form is submitted

What it does: Lets you intercept or validate the form submission.



 
 value={city}
onChange={handlechange}

you must use both value and onchange for working control input 

when user type the handlechange update the city state and value={city} show update value of input


e.preventDefault--->> to stop propagation and achieve target elelenet 
console.log(city);--->> it print state variable after submit 
setCity(")===>> i used beacuse after from submit not remove from text field that why i have used 