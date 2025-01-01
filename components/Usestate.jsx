import { useState } from "react";
function Usestate(){
    // let [count, setCount]=useState(0);
    // return(
    //         <div>
    //             <button onClick={()=>setCount(count+1)}> ++</button>
    //             <h1> count:{count}</h1>
    //             <button onClick={()=>setCount(count-1)}> --</button>

    //         </div>
    // )
    // let [name,setname]=usestate("subha");
    // return(
    //     <div>
    //         <button onChange={()=>setname("Shruthi")}>Shruthi</button>
    //         <h1>{name}</h1>
    //         <button onChange={()=>setname("Subha")}>Subha</button>
    //     </div>
    // )
    let [name, setName] = useState("Subha");

  

  return (
    <div>
      <input type="text" onChange={e=>setName(e.target.value)} value={name} />
      <h1>Your name is: {name}</h1>
    </div>
  );
}
export default Usestate;