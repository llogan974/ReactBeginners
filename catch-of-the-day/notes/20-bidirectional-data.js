/*
Make the data flow both ways

Do not put state in an editable area.
React needs you to, instead of putting into an input box, put the input into a state.

So you need to create an OnCHange event.

You cant access a key when it is inside of a component

What did we do?
In the form, we created an input where value is set in state.
WHen something changes in input, we run handleChange
we get the value, and update the fish (event.currentTarget)
and only update the field we need to update by targeting the input's NAME,
Send the info to the App component, with the updateFish function

*/