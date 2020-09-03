import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


const App = () => {
    const [personState, setPersonState] = useState({
        persons: [
            {name: "Raj", age: 19},
            {name: "Raima", age: 19},
            {name: "Monai", age: 16}
        ]
    });

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                {name: "Monai", age: 16},
                {name: "Raima", age: 19},
                {name: "Raj", age: 19}
            ],
            hobbies: (
                <ol>
                    <li>My hobbies is cooking, singing, dancing</li>
                    <li>Also i love to read philosophy books</li>
                </ol>
            )
        })
    }


    return (
        <div className="App">
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name}
                    age={personState.persons[1].age}>{personState.hobbies}</Person>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
        </div>
    );
}

export default App