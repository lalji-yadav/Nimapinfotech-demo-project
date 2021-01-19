import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card,Table,TableHead,TableRow,TableCell,TableBody } from "@material-ui/core";

const Tasks=()=> {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos').then((res)=>{
           // console.log(res)
           setData(res.data)
           console.log(res.data)
        }).catch((error)=> {
            console.log(error)
        })
    },[])
    
        return (
            <div style={{padding:"3%"}}>
                <h1>Task Page</h1>

                <Card style={{width:"80%", margin:"1% 10% 0% 10%", border:"1px solid green"}}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell style={{fontSize:"1.5vw", color:"black"}} align="center">Name</TableCell>
                        <TableCell style={{fontSize:"1.5vw", color:"black"}} align="center">Username</TableCell>
                        <TableCell style={{fontSize:"1.5vw", color:"black"}} align="center">Phone</TableCell>
                        <TableCell style={{fontSize:"1.5vw", color:"black"}} align="center">Website</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell align='center'>
                            {row.userId}
                        </TableCell>
                        <TableCell align="center">{row.title}</TableCell>
                        <TableCell align="center">{row.completed}</TableCell>
                        <TableCell align="center">{row.website}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </Card>
            </div>
        );
    }

export default Tasks;
