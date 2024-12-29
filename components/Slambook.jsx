import './Slambook.css';
function Slambook()
{
    return(
        <div>
        <form>
            <fieldset>
            <legend> SLAM BOOK</legend>
                <label for="name">
                    Name:
                <input type="text" id='name' placeholder="Enter your name" /> 
                </label>
                <br />
                <label for="dob">
                    Date of Birth:
                <input type="date" id='dob' placeholder="Enter your dob" /> 
                </label>
                <br />
                <label for="nick">
                    Nick name:
                <input type="text" id='nick' placeholder="Enter nick name" /> 
                </label>
                <br />
                <label for="add">
                    Address:
                <textarea id='add' placeholder="Enter your Address" /> 
                </label>
                <br />
                
                <label for="memo">
                    Memories:
                <textarea id='memo' placeholder="Share your memories" /> 
                </label>
                <br />
                <label for="gender">
                    Gender:
                <input type="radio" name="gender" value="male"/> Male
                <input type="radio" name="gender" value="female" /> Female
                </label>
                <br />
                <label for="actor">
                    Fav Actors:
                <input type="checkbox" name="actor" value="vijay"/> Vijay
                <input type="checkbox" name="actor" value="vjs"/> VJS
                <input type="checkbox" name="actor" value="ak"/> AK
                <input type="checkbox" name="actor" value="sk"/> SK
                <input type="checkbox" name="actor" value="ashok"/> Ashok Selvan
                
                </label>
                <br />
                <label for="school">
                    School:
                <select name="school" id='school'>
                    <option value="KSV" > KSV </option>
                    <option value="CRMMS" > CRMMS </option>
                    <option value="CHERAN" > CHERAN </option>
                    <option value="BP"  >BP </option>
                </select>
                </label>
                <button> Submit</button>
                </fieldset>
            </form>
            </div>
    )
}
export default Slambook;