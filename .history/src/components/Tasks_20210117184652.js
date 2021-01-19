import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card,Table,TableHead,TableRow,TableCell,TableBody,Button } from "@material-ui/core";
import '../App.css';

function Tasks() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/todos').then((res) => {
            // console.log(res)
            setData(res.data);
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div style={{ padding: "3%" }}>
            <h1>Task Page</h1>

            <Card style={{ width: "80%", margin: "1% 10% 0% 10%", border: "1px solid green" }}>
                
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} align="center">Id</TableCell>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} align="center">Title</TableCell>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} align="center">Completed</TableCell>
                            <TableCell style={{ fontSize: "1.5vw", color: "black" }} align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <div className="scroll-tab">

                    <TableBody style={{ fontSize: "2vw", border:'1px solid red' }}>
                        {data.filter((item) => !item.hidden).map((item, row) => (
                            <TableRow key={row.id}>
                                <TableCell style={{ fontSize: "1.3vw" }} align='center'>
                                    {item.id}
                                </TableCell>
                                <TableCell style={{ fontSize: "1.3vw" }} align="center">{item.title}</TableCell>
                                <TableCell style={{ fontSize: "1.3vw" }} align="center">{item.completed ? "True" : "False"}</TableCell>
                                <TableCell style={{ fontSize: "1.3vw" }} align="center">
                                    <Button style={{ fontSize: "1vw" }} variant="contained" color="secondary">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                    </div>
                </Table>
            </Card>
        </div>
    );
}

export default Tasks;
