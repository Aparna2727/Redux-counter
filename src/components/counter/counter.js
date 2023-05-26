import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import decrement  from './counterSlice';


export function Counter(){
   
    const counts = useSelector((store) => store.Counter.count);
    // console.log(counts)
    // const {counter,counter1} = counts
    // const {count} = counter
    // const {count1} = counter1
    // console.log(count,count1)
    const dispatch = useDispatch();

    

    return(
        <div>


            houhsaiuyiudyuqefhub
            {/* <button onClick={()=> dispatch(increment())}>Increment</button> */}
            <h2>{counts}</h2>
            <button onClick={()=> dispatch(decrement())}>Dicrement</button>

            {/* <button>click</button> */}
      </div>
    )
}