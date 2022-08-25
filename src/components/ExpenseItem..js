import './ExpenseItem.css'
import { useState } from 'react';

export default function ExpenseItem(props) {

    const [name, setName] = useState('');

    const data = props.menu.map((x, index) => {
        return <li key={index} >{x}</li>
    });

    const addMenu = (name) => {
        setName(name);
    }

    return (
        <>
            <ul className='ul'>
                <h3>List of menu</h3>
                {data}
            </ul>
            <label htmlFor='txtname' >Enter Name</label>
            <input id='txtname' type='input' placeholder='Enter menu name' onChange={(val) => {
                setName(val.target.value);
            }}></input>
            <button onClick={() => { addMenu(name) }}>Add Menu</button>
            <label> name is {name}</label>
        </>
    )
}
