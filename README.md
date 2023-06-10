# Getting Started with Counter  App created with react

App component imports 2 children component  Counter.js and Reset.js. In its constructor, there is a state of count, set as 0 for the initial value.

Counter.js will be responsible for displaying the count and controlling it. So, it hands down 1 property for the displaying (count) and 2 methods for controlling increment & decrement as props. Each method either increases or decreases the state value of count by 1.

Reset.js will reset the counter to 0. On click event, it will call a method called ResetButton to change the App state value of count to 0, using setState method.

Counter.js file displays the current value of the counter, and delegates the controlling functions to its child component, Controllers.js. In h2 tag, the count prop is shown, and the 2 handed prop methods will be again passed down to the child component, Controllers, as props.

Controllers.js file has 2 buttons: one for decreasing the counter value and the other for increasing it. The 2 handed-down prop methods will be invoked when a specific click event happens. Consequently, these prop methods will change the count state value in App.js file. And, that state change will cause the re-rendering of the counter to the decreased/increased value.

handleButtonClick method of this file uses computed property names to call the right method for each situation. To do so, each button has a name attribute. e.target.name will turn into the method name and accomplish its expected function.

Reset.js file controls the resetting function of the app. It takes the ResetButton method from its parent component (App.js). On click, this method will change the count state in App.js back to 0, if it is not.
