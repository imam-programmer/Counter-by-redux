import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add5, decrement, increment } from './features/counterSlice'


const App = () => {
  const count=useSelector((item)=>item.counter.value)
  const [num, setNum] = useState(null)
  const dispatch=useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <input type="number" onChange={(e)=>{
setNum(Number(e.target.value))
console.log(e.target.value)
      }}/>
      <button onClick={()=>dispatch(   
          increment()   
        )}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(add5(num))}>Increase by 5</button>
    </div>
  )
}

export default App