{/*import React, {Component} from "react";

class Forms extends React.Component
{
    render()
    {
        return(
            <h1>
                My first react project.
            </h1>
        )
    }
}export default Forms;*/}

function Forms(props) {
    let d = 0;
    d = props.system + 20;


    return (

        <h1> My system is  {d} </h1>
    )

}
export default Forms;