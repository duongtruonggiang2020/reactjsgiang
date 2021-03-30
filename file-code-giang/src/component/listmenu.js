import React from 'react';
import './listmenu.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
class ListMenu extends React.Component{
    render(){
        return(
            <ul className="menu">
                <li className="home"><a href="#"><HomeIcon style={{paddingTop:"10px",  color:"white"}}/> Home</a></li>
                <li><a href="#">Mục 1</a></li>
                <li><a href="#">Mục 2</a></li>
                <li>
                   
                        <Button variant="contained">
                        <ExitToAppIcon/>
                        Log out
                    </Button>
                </li>
            </ul>
        )
    }
}
export default ListMenu