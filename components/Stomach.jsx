import {useContext} from 'react';
import {hen} from '../src/Subha.jsx';

const Stomach=()=>{
    const {water, click}=useContext(hen);
    const style1={
        backgroundColor:"red",
        color:"white",
        textAlign: "center",
    };
    const style2={
        backgroundColor:"black",
        color:"red",
        textAlign: "center",
    };
    let a= 4>3 ? 6>8 ? 10: 3>8 ? 4>1 ? 20:30 :4>7? 40:50: 6>8 ?60:70;
    return(
       
        
        <div style={click?style1:style2}>
            <h1>Stomach:  {water}</h1>
             console.log(a);
        </div>
    )
}
export default Stomach;