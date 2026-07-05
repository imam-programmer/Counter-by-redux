import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add5, decrement, increment } from './features/counterSlice'


const App = () => {
  const count=useSelector((item)=>item.counter.value)
  const dispatch=useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(add5())}>Increase by 5</button>
    </div>
  )
}

export default App