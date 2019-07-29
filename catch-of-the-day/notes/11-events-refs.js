/*
Events are similay to JS events.
Events get wrapped in synthetic event, which makes sure it works in all the browsers.
It is weird because it is done inline.
Outside of React If you have a button, and it says "submit", and when it is clicked, you run code.

In react, onclick={this.handleClick}
In JS, it would be {this.handleClick()}, but it would run on pageload instead of onclick

In readct, the golden rule is DONT TOUCH THE DOM

All react METHODS are in the App component, our main component.

If we make our own that extenxs that, they are not bound by default. It is hard to reference INSIDE its own component.

SOLUTION? Bind our own components as well.


*/