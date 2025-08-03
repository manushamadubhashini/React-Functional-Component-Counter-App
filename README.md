# 🚀 React Counter App (Functional Components)
Getting some hands-on experience about React Hooks, State and Props Management, using functional components

1. Firstly let's clean up the current `App.tsx` file content our project.
2. Let's define `App.tsx` fie's structure as a React functional component like this.
 ```typescript jsx
import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app">
            <h1>This is App Component!</h1>
        </div>
    );
}

export default App;
```
In `App.css`:
```css
.app {
  margin: 0;
  height:  100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

}

```

3. Here we're going to create a counter app. So, we need to create a new package called `counter` and a new component called `Counter.tsx` inside it.
```typescript jsx
import React from 'react';
import './Counter.css';

function Counter() {
   return (
      <div className="counter">
         <h1>This is Counter App Component!</h1>
      </div>
   );
}

export default Counter;
```
In `Counter.css`
```css
.counter {
    background-color: darkmagenta;
}
```

Define `Counter` inside the div in `App.tsx` in order to render it in the browser:
```typescript jsx
function App() {
    return (
        <Counter />
    );
}
```

4. Now let's design the content of the counter app inside render function.
```typescript jsx

import React from 'react';
import './Counter.css';

function Counter() {
    return (
        <div className="container">
             <h1>React Counter App</h1>
            <h2>Count: 0</h2>
            <div>
                <button className="button">+</button>
                <button className="button">-</button>
            </div>
        </div>
    );
}

export default Counter;
```

In `Counter.css`
```css
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: darkmagenta;
    width: 500px;
    height: 300px;
    box-shadow: 2px 2px 8px 2px #888888;
    color: white;
}
.button{
    font-size: 30px;
    margin: 0 13px;
    padding: 0 12px;
    width: 60px;
    background-color: cyan;
    border: 2px solid white;
    color: white;

}
h2{
    margin-top: 0;
    padding-top: 0;
}
```

5. Now let's understand what are the steps that UI renders (useEffect) (React Hook) in React app.
```typescript jsx
import "./Counter.css"
import {useEffect, useState} from "react";
export function Counter(props ?:any) {
    const [count,setCount]  = useState(0) // this is a react hook it has react symbols
    useEffect(() => {
        alert("componentDidMount: component has been mounted  "+ props.data)
        return ()=>{
            alert("componentWillUnmount : component is being removed!")
        }
    }, []);

    return (
        <div className="container">
            <h1>React Counter App</h1>
            <h2>Count : {count} </h2>
            <div>
                <button className="button">+</button>
                <button className="button">-</button>
            </div>

        </div>
    );
}
```

Here, you need to pass the props in `App.tsx`:
```typescript jsx
return (
    <div className="App">
         <Counter data={"Saman"}/>
    </div>
);
```

6. Let's have a look at the how to manage UI updates using same React Hook `useEffect` (With state updates using `useState`)
```typescript jsx
import "./Counter.css"
import {useEffect, useState} from "react";
export function Counter(props ?:any) {
    const [count,setCount]  = useState(0) // this is a react hook it has react symbols
    useEffect(() => {
        alert("componentDidMount: component has been mounted  "+ props.data)
        return ()=>{
            alert("componentWillUnmount : component is being removed!")
        }
    }, []);
    useEffect(() => {
        alert("componentDidUpdate : component has been updated")
    }, [count]);



    const increase = () =>{

        setCount((previousCount) => previousCount + 1);

    }
    const decrease = () => {

        setCount((previousState) => previousState - 1);

    }
    return (
        <div className="container">
            <h1>React Counter App</h1>
            <h2>Count : {count} </h2>
            <div>
                <button className="button" onClick={increase}>+</button>
                <button className="button" onClick={decrease} >-</button>
            </div>

        </div>
    );
}
```

Define props in `Counter.tsx` as optional if it's not mandatory:

```typescript jsx
type CounterProps = {
    data?: any;
};
```
