import React from "react";
import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';


class App extends React.Component {

    // Create the dfault state
    state = {
        // Objects will be empty on page load
        // Arrays could also be used
        // Or an ampty string.
        fishes: {},
        order: {}

    };

    // This component data is created two levels down in addFishForm and is received via inventory
    /* This is being created here,  */
    addFish = fish => {
        console.log("Adding a fish!");
        // Make a copy of the existing state.
        // Use a spread on all fish objects
        const fishes = {...this.state.fishes};
        // Add our new fishes with a timestamp
        fishes[`fish${Date.now()}`] = fish;
        // Set new fishes object to state.
        // Object was taken out of our form
        this.setState({fishes});
        // refresh the form.
    };
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Luke is Cool" age={500} cool={true}/>


                </div>
                <Order />
                {/* This calls the ADDFISH from above */}
                <Inventory addFish= {this.addFish} />
            </div>
        )
    }
}

export default App;