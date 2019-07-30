// let's go!
// the second react is lower case
import React from 'react';

import {getFunName } from "../helpers";
// create a class
class StorePicker extends React.Component {

    // Get text from the form

    myInput = React.createRef();

    // Use JS and bind all the methods.
    // goToStore is a property, and we are setting it to a function
    // This is the only way to get data from a text field at this time
    goToStore = (event) => {
    // prevent page reloading
        event.preventDefault();

        // Get text input
        const storeName = this.myInput.current.value;

        // Change url to /store/textinput.
        // Since storeinput is a child of the router, we can access it
        this.props.history.push(`/store/${storeName}`);
    };


    //Every class in react needs at least one method called "render" to tell what goes on the page
    render() {
        return (
        <React.Fragment>
        {/* Do not import comments as adjacent tags*/}
            <p>Cmon baby!</p>
            {/*onSubmit will take the value, and run the function "goToStore" */}
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter the store</h2>

                <input
                type="text"
                // Put the ref on the component so we can grab it.
                ref = {this.myInput}
                required
                placeholder="Store name!"
                defaultValue={getFunName()}
                />
                <button type="submit">Visit Store</button>
            </form>
        </React.Fragment>
        )

    }
}

export default StorePicker;