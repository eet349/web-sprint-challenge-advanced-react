# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

- A stateful component contains at least one slice of state that it is keeping track of so that it can be updated in the DOM whereas the functional components is either completely static and renders the some thing every time or its dynamic data is handled elsewhere and is passed down as props.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

- componentWillMount will be called on the initial rendering of the page. This includes anytime the browser is refreshed, because the page will be repainted upon refresh. componentDidUpdate will be called when either the state or props is updated/changed. In other words when a setState function is called.

3. Define stateful logic.

- Stateful logic is simply the logic that governs how and when state is updated. An axios call is not does not directly affect state so it would not be stateful logic, but if state is assigned as a result of the axios call (in the .then() for example) that assignment is whats known as stateful logic.

4. What are the three step of creating a successful test? What is done in each phase?

1. Arrange: grab all of the elements needed for the test.
1. Act: perform any actions that need to be tested.
1. Assert: check to see if what we expect to happen actually happened.
