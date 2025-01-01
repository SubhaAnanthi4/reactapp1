// same as useState
import { useState, useRef } from "react";
function Useref() {
    // let [count, setCount] = useState(0);
    // let countRef = useRef(0);
    // let incre = () => {
    //     setCount(count + 1);
    //     countRef.current ++;
    //     console.log("State:", count);

    // console.log("Ref:", countRef);
    // }
    // let decre = () => {
    //     setCount(count - 1);
    //     countRef.current --;
    //     console.log("State:", count);

    // console.log("Ref:", countRef);
    // }
    
    // let name=useRef("");
    // let disp=(e)=>{
    //     name.current=e.target.value;
    //     console.log(name.current)
    // }
    


    // return (



    //     <div>
    //         {/* <button onClick={incre}> ++</button>
    //         <h1> count:{count}</h1>
    //         <button onClick={decre}> --</button> */}
    //         <input type="text" onChange={disp} />
    //     </div>
    // )
    let imgref=useRef();
    let handleimg=()=>{
        imgref.current.src="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt4a4af7e6facea579/6668df6ceca9a600983250ac/beautiful-flowers-hero.jpg";
    }
    return(
        <div>
            <button onClick={handleimg} >Image</button>
            <img ref={imgref}></img>

        </div>
    )

}


export default Useref;