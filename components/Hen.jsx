import Egg from './Egg.jsx';
const Hen=()=>{
    return(
        <div>
            <h1>Hen </h1>
            <Egg />
        </div>
    )
}
export default Hen;
//props drill is a process of passing props from parent to child then to grandchild and so on.
//In the above example, Hen is the parent component, Egg is the child component and Stomach is the grandchild component.
//useContect is a hook that allows you to pass data through the component tree without having to pass props down manually at every level.
//useContext can only be used with fuctioanl component and can only be accessed in its child componenets.
// export let variable name=createContext();
//instead of div tag in return in parent we can use <variablename.Provider value={value}> </variablename.provider>
//in child we can import the variablename from parent
// import {variablename} from './parent.jsx'
//const variablename=useContext(variablename);
//access the value using variablename