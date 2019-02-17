import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Clock from './Clock.js'
import Calendar from './Calendar.js'

const styles = theme => ({
  root: {
    height: '100vh',
    flexGrow: 1,
    backgroundColor: theme.palette.grey['50'],
  },
  grid: {
    padding: theme.spacing.unit * 2,
  }
});

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};

        this.dayName = this.dayName.bind(this);
        this.monthName = this.monthName.bind(this);
        this.timeOfDay = this.timeOfDay.bind(this);
        this.timeString = this.timeString.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    dayName() {
        const names = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
        return names[this.state.date.getDay()];
    }

    monthName() {
        const names = ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"];
        return names[this.state.date.getMonth()];
    }

    timeOfDay() {
        const names = ["natt", "morgen", "formiddag", "ettermiddag", "Kveld"];
        const hours = this.state.date.getHours();
        if (hours >= 18) {
            return names[4];
        }
        if (hours >= 12) {
            return names[3];
        }
        if (hours >= 9) {
            return names[2];
        }
        if (hours >= 6) {
            return names[1];
        }
        return names[0];
    }

    timeString() {
        const hourString = ("0" + this.state.date.getHours()).slice(-2);
        const minuteString = ("0" + this.state.date.getMinutes()).slice(-2);
        return hourString + ":" + minuteString
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Grid className={classes.grid} container spacing={24}>
                    <Grid item xs={12}>
                        <Calendar date={this.state.date} monthName={this.monthName}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Clock dayName={this.dayName} timeString={this.timeString} timeOfDay={this.timeOfDay}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Main);