import * as React from "react";
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';



export default function SimpleContainer(props) {
    return <Container maxWidth="xs">
        <Paper sx={{paddingLeft: 5, paddingRight: 5, width: 300, height: 300}}>
            {props.children}
        </Paper>
    </Container>;
}
