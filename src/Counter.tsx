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