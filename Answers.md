1. What problem does the context API help solve?

It allows the ability to share data accross all levels of the application.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - dispatches types and payloads (payloads are the data you want to save)
reducers - listen for the types that have been dispatched and store the payload in redux store
store - one big spot that holds many variables

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is global and component state is local, a good time to use one over ther other is when you want to make changes to one specific component in which case you'd use component state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

it allows us to call action creators as a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Store is my favorite state management system I like the ability to keep all my application state together.
