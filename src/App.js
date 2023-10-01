import { useState } from "react";


function App() {
  const [color, setColor] = useState()
  return (
    <>
    <div className="wv-100 vh-100" style={{backgroundColor: color}}> 
    <div className="d-flex fixed justify-content-center align-items-center p-5">
      <div className="d-flex justify-content-center align-items-center bg-dark rounded p-2 ">
        <button onClick={()=>setColor("red")} type="button" className="btn btn-danger rounded mx-4">Red</button>
        <button onClick={()=>setColor("yellow")} type="button" className="btn btn-warning  rounded mx-4">Yellow</button>
        <button onClick={()=>setColor("blue")} type="button" className="btn btn-primary rounded mx-4">Blue</button>
        <button onClick={()=>setColor("skyBlue")} type="button" className="btn btn-info rounded mx-4">Sky Blue</button>
        <button onClick={()=>setColor("green")} type="button" className="btn btn-success rounded mx-4">Green</button>
        <button onClick={()=>setColor("black")} type="button" className="btn btn-dark bg-white text-dark rounded mx-4">Black</button>
        <button onClick={()=>setColor("gray")} type="button" className="btn btn-secondary rounded mx-4">Gray</button>
        <button onClick={()=>setColor("white")} type="button" className="btn btn-light border rounded mx-4">White</button>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
