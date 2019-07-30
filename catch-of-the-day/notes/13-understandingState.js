/*
COMMAND + OPTION + CLICK will tell you lots.

All about State.
Understand this part- it is foudnational

State is an object that lives in a component and holds data that it needs, and its children may need.

Data can live in multiple places in JS.
With React, instead of updating all pieces on a site, we want to update data and have react update everything else.

Updating all of the data in React is much easier.
So if you update the STATE, the data is updated EVERYTWHERE.

How do we get it to state, and where does state live?
Each component has its own state, but there is often one parent state, and data is passed down.

How can a child-component get data? The data must be in the parent-component
So, Data should live in App, our MOMMA component.

So, go to App.js and create a default (empty) state.
THen, changed need to be pushed to the state.

How do you get an item into state?
The method that updates state and the actual state need to stay in the same component.

How do we get info from APP to its child? In this case, from the parent "app" to the child "inventory"?
Use PROPS.

        // How do you update objects? Must update
        // state using update state API in react.
        // Take copy of existing state. Never reach into an object directly.
First, take copu of the existing state.

So, in App.js, a component is being called, "inventory".
Also, a function is being created there.
The data that the function uses is being passed in from Inventory.js, a component.

In inventory.js, the component AddFishForm is created, and addFish, a first class function, is taking in the data from AddFishForm via PROPS.

In AddFIshForm, when something is submitted, the data is wrapped in an object "fish" and is is being passed through "Props and receiving the addFish function.


*/