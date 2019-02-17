import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2
    }
});

function Clock(props) {
    const { classes } = props
    return (
    <div>
        <Paper className={classes.root} elevation={2}>
            <Typography variant="display4">
            {props.dayName()} {props.timeOfDay()}
            </Typography>
            <Typography variant="display3">
            Klokken er {props.timeString()}
            </Typography>
        </Paper>
    </div>
    );
}

export default withStyles(styles)(Clock);
