import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/Cake'



const HooksCakeConainer = () => {

 const numOfCakes =  useSelector(state => state.numOfCakes)

 const dispach = useDispatch()
  return (
    <div>
      <h2>No of Cake-{numOfCakes}</h2>
      <button  onClick={()=>dispach(buyCake)}>Buy cake</button>
    </div>
  )
}

export default HooksCakeConainer
