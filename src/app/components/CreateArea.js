'use client'
import { useState } from "react";



const CreateArea = () => {
    const [input , setInput] = useState("")
    const [item, setItem] = useState([])

    const handleInput =  (e) =>{
        const InputValue = e.target.value
        setInput(InputValue)
        console.log(InputValue);
        
       
    }
    
    const handleAdd = (event) =>{
        event.preventDefault()
        setItem(prev =>{
           return [...prev, input]
        })
       
        
    }
    return (
        <div>
         <div className="relative w-full max-w-lg m-10 ">
      {/* Container Card */}
      <div className="card bg-base-100 shadow-md border border-gray-200 p-4 rounded-lg mb-7 ">
      
        {/* Note Body */}
        <input
        onChange={handleInput}
        value={input}
          placeholder="Take a note..." 
          className="w-full text-md focus:outline-none bg-transparent placeholder-gray-400 resize-none"
          rows="3"
        ></input>
      </div>

      {/* Floating Add Button */}
      <button onClick={handleAdd} className=" btn btn-circle btn-warning absolute -bottom-5 right-4 shadow-lg border-none text-white normal-case">
        Add
      </button>
   
    </div>
<div className="mt-20 container mx-auto">
    
       {
            item.map((i,index) =>
            <li key={index}>{i}</li>)

      }
</div>
</div>
    );
};

export default CreateArea;