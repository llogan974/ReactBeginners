import React from "react";
import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';
import sampleFishes from '../sample-fishes';
// Pull in sample data
import Fish from './Fish';


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
    loadSampleFishes = () => {

        // This function takes in the items from sample-fishes.js
        this.setState({fishes: sampleFishes});
    };

    // In order for this to work, we need to pass it down via props
    addToOrder = (key) => {
        // take a copy of state
        const order = {...this.state.order};
        // add to the order or update number in the order
        order[key] = order[key] + 1 || 1;
        // call setState to update our state obkject
        this.setState({order});
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Luke is Cool" age={500} cool={true}/>
                    {/* Pull in sample data */}
                    <ul className="fishes">
                    {/* Loop over the fish objects */}
                    {/* Pass in an object */}
                    {Object.keys(this.state.fishes).map(key =>
                        <Fish
                        key={key}
                        // Pass the key via props.
                        // Key cannot be accessed using "key"
                        index={key}
                        details={this.state.fishes[key]} addToOrder={this.addToOrder}>{key}</Fish>)}
                    </ul>
                </div>
                {/* Whatever is in here is what it is "reacting" to. Meaning this will include the data we are feeding it */}

                <Order fishes={this.state.fishes} order={this.state.order}/>
                {/* This calls the ADDFISH from above */}
                <Inventory addFish= {this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;