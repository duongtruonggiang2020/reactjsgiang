import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import ListMenu from './listmenu';
import './navigator.css'
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#211377",
        
    },
    maincontainer:{
        margin: "0 auto",
        width: "85%"
    }
  });

class  Navigator extends React.Component{
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <div className={classes.maincontainer}>
                <Grid container>
                    <Grid item sm={6}>
                        <div className="logo">
                            <a href="#"><img src="https://cdnweb.dantri.com.vn/bundle/static/assets/logo_dantri.png"/></a>
                        </div>
                    </Grid>
                    <Grid item sm={6}>
                        <ListMenu/>
                    </Grid>  
                </Grid>
                </div>  
            </div> 
        )
    }
}  
// export default Navigator;
export default withStyles(styles)(Navigator);