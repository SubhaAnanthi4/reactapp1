
import {useParams} from 'react-router-dom';
function Useparams() {
  let {id}=useParams();
  return (
    <h1>Your id is {id}</h1>
  )
}export default Useparams;