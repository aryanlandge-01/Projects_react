import { useCallback, useEffect, useState,useRef } from "react"


function App() {
  
  const [length ,SetLength] = useState();
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,SetPassword] = useState("");

  //ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*()-_+=[]{}|;:',.<>/?"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    SetPassword(pass)

    
  },[length,numberAllowed,charAllowed,SetPassword])

  const CopyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,40)
    window.navigator.clipboard.writeText(password)
  },[password])
   
  useEffect(() => { 
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  
  
  return (
    <div className="w-full text-center max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-10 text-orange-500 bg-gray-700">
        <h3 className="my-2 font-semibold ">Password Generator</h3>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4 bg-white">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
           />
         <button 
            onClick={CopyPasswordtoClipboard}
            className=" bg-blue-500 p-2 font-semibold text-black">copy</button>
         </div>
         <div className="flex text-sm gap-x-2">
             <div className="flex items-center gap-x-1">
                   <input 
                     type="range" 
                     min={6}
                     max={50}
                     value={length}
                     className="cursor-pointer"
                     onChange={(e) => {SetLength(e.target.value)}}
                    />
                    <label>Length : {length}</label>
             </div>
             <div className="flex items-center gap-x-2">
              <input 
                 type="checkbox" 
                 id="numberInput"
                 defaultChecked={numberAllowed}
                 onChange={() => {
                  setNumberAllowed((prev) => !prev)
                 }}         
                 />
                 <label>Number</label>

                 <input 
                 type="checkbox" 
                 id="charInput"
                 defaultChecked={charAllowed}
                 onChange={() => {
                  setCharAllowed((prev) => !prev)
                 }}         
                 />
                 <label>Characters</label>  
             </div>

         </div>
    </div>
  )
}

export default App
