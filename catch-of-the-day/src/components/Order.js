import React from "react";
import {formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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

        // Create a vriable for all the transitions
        const transitionOptions = {
            classNames: "order",
            key,
            timeout: {enter: 500, exit: 500}

        };

        // If there is no fish (this is for checking local storage if a user has an order)
        if(!fish) return null;

        if(!isAvailable){

            // Add a key to loop over objects
            // Must return all items
           return (
            <CSSTransition {...transitionOptions}>

            <li key={key}>
                    Sorry {fish ? fish.name : 'fish'} is no longer available
                </li>
            </CSSTransition>

           );
        }
        // Use parens to show formatting
        return (
            <CSSTransition {...transitionOptions}>

                {/* A key needs to be defined for looping */}
                <li key={key}>
                {/* Wrap order in a span to target it with animations */}
                    <span>
                    {/* Transision Group and CSSTransition are both imported libraries for animation properties */}
                        <TransitionGroup component="span" className="count">
                            <CSSTransition classNames="count" key={count} timeout={{enter: 500, exit: 500}}>
                                <span>{count}</span>
                            </CSSTransition>
                                                                        {/* Count and fish are defined above */}
                        </TransitionGroup>
                         lbs {fish.name}
                        {formatPrice(count * fish.price)}
                        <button onClick={() => this.props.removeFromOrder(key)}>
                            &times;
                        </button>

                    </span>

                </li>

            </CSSTransition>
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
            <div className="order-wrap">Order!!!
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                {/* renderOrder was created above */}

                <div className="total">
                Total:
                    <strong>{formatPrice(total)}</strong>
                </div>

            </div>
        )
    }
}

export default Order;