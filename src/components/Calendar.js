import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2
    }
});

function Calendar(props) {
    const { classes } = props
    return (
    <div>
        <Paper className={classes.root} elevation={2}>
            <Typography variant="display4">
            {props.date.getDate()}. {props.monthName()} {props.date.getFullYear()}
            </Typography>
        </Paper>
    </div>
    );
}

export default withStyles(styles)(Calendar);
