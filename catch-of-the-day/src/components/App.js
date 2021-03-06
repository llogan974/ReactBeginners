import React from "react";
import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';
import sampleFishes from '../sample-fishes';
// Pull in sample data
import Fish from './Fish';
import base from "../base";


class App extends React.Component {

    // Create the dfault state
    state = {
        // Objects will be empty on page load
        // Arrays could also be used
        // Or an ampty string.
        fishes: {},
        order: {}

    };

    // Hook into the app when it mounts
    componentDidMount(){
        console.log("MOUNTED!");
        // Get data from just our store from the url via props router > storeID
        const {params} = this.props.match;

        // reinstate our local storage if the user has a previous order.
        const localStorageRef = localStorage.getItem(params.storeId);

        // Check if it is a new store; if so, there will be no order in localstorage
        if(localStorageRef){
            this.setState({ order: JSON.parse(localStorageRef) })
        }

        // syncState takes two args
        this.ref = base.syncState(`${params.storeId}/fishes`, {context: this,
        state: "fishes"});
    }

    // check if order changed to update local storage
    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount(){
        // remove references to the old store when using back button in browser to go to a new store
        base.removeBinding(this.ref);
    }
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

    // Function for when fish are updated in the inventory form
    updateFish = (key, updatedFish) =>  {
        // Take a copy of the current state
        const fishes = {...this.state.fishes};

        // update that state
        fishes[key] = updatedFish;

        // Set that to state
        this.setState({fishes});
    }

    deleteFish = (key) => {
        // Take a copy of the fish state (it is an object)
        const fishes = {...this.state.fishes};

        // delete the state
        fishes[key] = null;
        // update state
        this.setState({fishes});
    }
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
    removeFromOrder = (key) => {
                // take a copy of state
                const order = {...this.state.order};
                // add to the order or update number in the order
                delete order[key];
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

                <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                {/* This calls the ADDFISH from above */}
                <Inventory
                     addFish= {this.addFish}

                    //  Call the const created above, when a fish is updated in the FishForm
                     updateFish= {this.updateFish}

                    //  From the Edit Fish Form Button to delete fish
                    deleteFish={this.deleteFish}

                    loadSampleFishes={this.loadSampleFishes}
                    // Put all the fish in the inventory to loop over them in EditFishForm
                    fishes={this.state.fishes}
                />
            </div>
        )
    }
}

export default App;