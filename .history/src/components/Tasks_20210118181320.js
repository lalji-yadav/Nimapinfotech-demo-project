import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table,TableHead,TableRow,TableCell,TableBody,Button } from "@material-ui/core";
import '../App.css';

function Tasks() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos').then((res) => {
            // console.log(res)
            setData(res.data);
           // console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const deleteHandler=()=> {
       console.log(data)
    }

    return (
        <div style={{ padding: "2% 3% 3% 3%" }}>
            <h3 style={{marginLeft:'10%'}}>Task Page</h3>

            <div className="effect1" style={{ width: "80%", margin: "1% 10% 0% 10%"}}>
                
                <Table aria-label="simple table">
                    <div className="scroll-tab">

                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }}
                             align="center">Id</TableCell>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} 
                            align="center">Title</TableCell>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} 
                            align="center">Completed</TableCell>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} 
                            align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.filter((item) => !item.hidden).map((item, row) => (
                            <TableRow key={row.id}>
                                <TableCell style={{ fontSize: "1.3vw" }} align='center'>
                                    {item.id}
                                </TableCell>

                                <TableCell style={{ fontSize: "1.3vw" }} align="center">{item.title}
                                </TableCell>

                                <TableCell style={{ fontSize: "1.3vw" }} align="center">
                                    {item.completed ? "True" : "False"}</TableCell>

                                <TableCell style={{ fontSize: "1.3vw" }} align="center">
                                    <Button onClick={deleteHandler} style={{ fontSize: "1vw" }} variant="contained"
                                     color="secondary">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    </div>
                </Table>

                <div className="row" style={{padding:'1% 0% 3% 4%'}}>
                    <Button variant="contained" color="primary"> Add Task </Button>

                </div>


            </div>
        </div>
    );
}

export default Tasks;
