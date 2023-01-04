## The useState() hook in React JS

The `useState` hook is a feature in React that allows you to add state to functional components. Prior to the introduction of hooks, state could only be used in class-based components.

Here is an example of how you might use the `useState` hook in a functional component:

```js
import { useState } from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
```

In this example, the `useState` hook is called with an initial state value of 0. This returns an array with two elements: the current state value, and a function that can be used to update the state.

The current state value is destructured from the array and assigned to a constant called count. The function for updating the state is destructured from the array and assigned to a constant called setCount.

The component renders a p element that displays the current value of count, and a button that, when clicked, calls the setCount function to update the count.

The `useState` hook allows you to add state to functional components in a way that is similar to how state is used in class-based components. It is a powerful tool that makes it easier to add state to functional components and helps to make your code more reusable and easier to maintain.
