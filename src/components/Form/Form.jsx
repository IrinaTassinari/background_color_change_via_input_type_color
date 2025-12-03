import { useState } from "react";
import './Form.css'

//переписала код чтобы запомнить
// function Form({colorFunction}){
//     const [newColor,setNewColor] = useState ('');
//     const handleChange=(event)=> {
//         setNewColor(event.target.value)
//     }
//     const handleSubmit =(event) => {
//         event.preventDefault()
//         colorFunction(newColor)
//     }
//     return(
//         <form className="form-content" onSubmit={handleSubmit}>
//             <input type="color" value = {newColor} onChange={handleChange} />
//             <button type="submit">submit</button>
//         </form>
//     )
// }
// export default Form;

function Form({updateColor}){
//В компонент Form передаётся проп:то есть Form сможет вызвать эту функцию, чтобы менять цвет в App.
    const[newColor, setNewColor] = useState('')
    //newColor — это локальное состояние для выбранного цвета.
    const handleChange =(event) => {
        setNewColor(event.target.value)
    }
    const handleSubmit=(event) =>{
        event.preventDefault()
        updateColor(newColor)
    }
    return(  
            <form className="form-content" onSubmit={handleSubmit} >
                <input type="color" value={newColor} onChange={handleChange}/> 
                {/*  handleChange обновляет newColor */}
                <button type="submit">+</button>
            </form>
       
    )
}
export default Form;