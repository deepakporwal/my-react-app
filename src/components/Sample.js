import React from 'react'
import { useEffect, useState } from 'react';

// array destructuring
const [first, second] = ["Tokyo", "London", "Paris"];

export default function Sample() {

    // use State Hook
    const [color, setColor] = useState('blue');

    // fetch API data using useState hook
    const [data, setData] = useState(null);

    // use Effect
    useEffect(() => {
        console.log(`color is ${color}`);
    });

    const fetchData = () => {
        fetch("https://api.github.com/users/deepakporwal17").then((res) => {
            res.json().then((data) => {
                setData(data);
                console.log(data);
            });
        })
    };
    return (
        <>
            <p>Sample component</p>
            <div>
                {first} | {second}
                <br />
                Color is {color}
                <button onClick={() => {
                    setColor('red');
                }} >Red</button>
                <button onClick={() => {
                    setColor('green');
                }} >Green</button>
                <br />
                <button onClick={fetchData}>fetch data</button>
                <br />
                <p>{JSON.stringify(data)}</p>
            </div>
        </>
    )
}
