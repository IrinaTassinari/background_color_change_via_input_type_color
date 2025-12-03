
import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form.jsx';

//переписала код чтобы запомнить
// function App() {
//   const [color,setColor] = useState('red')
//   const updateColor = (newColor) => {
//     setColor(newColor);
//   };
  
//   return(
//     <div className='content' style={{backgroundColor:color}}>
//       <Form colorFunction={updateColor}/>
//     </div>
//   )
// }

// export default App

function App(){
  const [color,setColor] = useState('red')
  const updateColor = (newColor) => {
    setColor(newColor)
  }
  return(
    <div className='content' style={{backgroundColor:color}}>
      <Form updateColor = {updateColor}/>
    </div>
  )
}
export default App;


