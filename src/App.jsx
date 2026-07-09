import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add5, decrement, increment } from './features/counterSlice'


const App = () => {
  const count=useSelector((item)=>item.counter.value)
  const [num, setNum] = useState(0)
  const dispatch=useDispatch()
  return (
    <div className='container'>
      <h1>{count}</h1>
      <button className='one' onClick={()=>dispatch(   
        increment()   
      )}>increment</button>
      <input type="number" value={num} onChange={(e)=>{
setNum(Number(e.target.value))
console.log(e.target.value)
      }}/>
        <button className='two' onClick={()=>dispatch(add5(num))}>Increase by input</button>
      <button className='three' onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default App