import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Tasks=()=> {

    const [data, setData] = useState('')

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos').then((res)=>{
            console.log(res)
        }).catch((error)=> {
            console.log(error)
        })
    })
    
        return (
            <div style={{padding:"3%"}}>
                <h1>Task Page</h1>
            </div>
        );
    }

export default Tasks;
