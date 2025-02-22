import { useState } from 'react'
import Navbar from './components/Navbar'
import { useContext } from 'react'


function App() {
  const [Text, setText] = useState("")

  const handleOnchange = (event) => {
    setText(event.target.value);
  }

  const handleUpClick = (event) => {
    let newtext = Text.toUpperCase();
    setText(newtext)
  }
  const handlelowClick = (event) => {
    
    let newtext = Text.toLowerCase();
    setText(newtext)
  }
  const handeClear = () => {
    setText("")
  }

  return (
    <>

      <div className="">
        <Navbar title="TestUtils" />
      </div>

      <div className=" container flex  flex-col items-center  ">

        <div className=" mt-[8vh] ">
          <div className=" text-3xl font-semibold m-3">
            <h1>Enter The TEXT to analyze below</h1>
          </div>

          <div className=" ">
            <textarea className={` text-black w-[70vw] border-4 border-blue-300 rounded-lg text-xl`} onChange={handleOnchange} name="" id="" value={Text} rows={7}></textarea>
          </div>

          <div className="">
            <button className='bg-blue-500 mx-2 p-3 text-xl font-semibold rounded-md text-white ' onClick={handleUpClick}>Upper Case</button>
            <button className='bg-blue-500 mx-2 p-3 text-xl font-semibold rounded-md text-white ' onClick={handlelowClick}>Lower Case</button>
            <button className='bg-blue-500 mx-2 p-3 text-xl font-semibold rounded-md text-white ' onClick={handeClear}>CLEAR</button>
          </div>
            
        <div className="  w-full m-5  ">
        
            <h1 className='text-4xl my-3  font-semibold'>Your Text Summery </h1>

            <p className='text-xl my-2'>{Text.split(" ").length} Words and {Text.length} Characters</p>

            <p className='text-xl'>Its going to take {0.008 * Text.split(" ").length} Minutes To read</p>

            <h2 className='text-3xl my-2'>Preview</h2>

            <p className='text-xl my-2'> {Text}</p>
          
        </div>


        </div>
      </div>

    </>
  )
}

export default App
