import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [Text, setText] = useState("")

  const handleOnchange = (event) => {
    setText(event.target.value);
  }

  const handleUpClick = (event) => {
let newtext= Text.toUpperCase();
setText(newtext)
  }

  return (
    <>
      <div className="">
        <Navbar title="TestUtils" />
      </div>
      <div className=" flex  flex-col items-center  h-[100vh] ">

        <div className=" mt-[10vh] ">
          <div className=" text-3xl font-semibold m-3">
            <h1>Enter The TEXT to analyze below</h1>
          </div>

          <div className=" ">
            <textarea className='w-[70vw] border-4 border-blue-300 rounded-lg text-xl ' onChange={handleOnchange} name="" id="" value={Text} rows={8}></textarea>
          </div>

          <div className="">
            <button className='bg-blue-500 p-3 text-xl font-semibold rounded-md text-white ' onClick={handleUpClick}>Upper Case</button>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
