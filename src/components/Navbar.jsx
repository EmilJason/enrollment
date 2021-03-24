import { AppBar, Toolbar, Typography,Button } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

export default function Navbar() {
    const data = useContext(DataContext)
    useEffect(() => {
        console.log(data.state.count)
    
    })
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Enrollment System</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
