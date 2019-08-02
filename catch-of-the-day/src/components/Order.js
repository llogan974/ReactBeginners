import React from "react";
import {formatPrice } from "../helpers";
/*
When users click "add to order" info in the order section will
be updated.
*/
class Order extends React.Component {
    // Make a separate render function, becuase the one below was getting too loaded down
    renderOrder = key => {

        // "fish" and "count" were copied from the
        // render function found below
        const fish = this.props.fishes[key];
        const count = this.props.order[key];

        // Check to see if the fish is available
        const isAvailable = fish && fish.status === 'available';

        // If there is no fish (this is for checking local storage if a user has an order)
        if(!fish) return null;

        if(!isAvailable){

            // Add a key to loop over objects
            // Must return all items
           return <li key={key}>
                Sorry {fish ? fish.name : 'fish'} is no longer available
            </li>
        }
        // Use parens to show formatting
        return (
            // A key needs to be defined for looping
        <li key={key}>

            {/* Count and fish are defined above */}
            {count} lbs {fish.name}
            {formatPrice(count * fish.price)}
        </li>
        );
    };

    render() {
        const orderIds = Object.keys(this.props.order);

        // Reduce the data and return a tally
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable){
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0);
        return (
            <div className="order-wrapped">Order!!!
                <h2>Order</h2>

                {/* renderOrder was created above */}
                <ul>{orderIds.map(this.renderOrder)}</ul>

                <div className="total">
                Total:
                    <strong>{formatPrice(total)}</strong>
                </div>

            </div>
        )
    }
}

export default Order;