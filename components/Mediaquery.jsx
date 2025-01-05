import React from 'react';
import './Mediaquery.css';

function Mediaquery() {
    return (
        <div className="forms">
            <form>
                <h1>Update User</h1>
                <label>Name:</label>
                <input type="text" className="name" placeholder="Enter Name" />
                <label>Email:</label>
                <input type="email" className="email" placeholder="Enter Email" />
                <label>Address:</label>
                <input type="text" className="address" placeholder="Enter Address" />
                <button className="but">Submit</button>
            </form>
        </div>
    );
}

export default Mediaquery;
