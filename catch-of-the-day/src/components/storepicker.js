// let's go!
// the second react is lower case
import React from 'react';

// create a class
class StorePicker extends React.Component {

    //Every class in react needs at least one method called "render" to tell what goes on the page
    render() {
        return (
        <React.Fragment>
        {/* Do not import comments as adjacent tags*/}
            <p>Cmon baby!</p>
            {/*Curly brackets tells React that you are using JavaScript, and comments only use block comments */}
            <form action="" className="store-selector">
                <h2>Please enter the store</h2>
                <input type="text" required placeholder="Store name!"/>
                <button type="submit">Visit Store</button>
            </form>
        </React.Fragment>
        )

    }
}

export default StorePicker;