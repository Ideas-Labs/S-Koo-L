import React from 'react';
import './navbar.styles.scss';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#333333',
      marginTop: '8px'
    },
    indicator: {
        backgroundColor: '#90caf9',
    }
});

class NavBar extends React.Component {
    state = {
      value: 0
    };

    handleChange = (event, newVal) => {
        this.setState({value: newVal});
    };

    render = () => {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                classes={{
                    indicator: classes.indicator
                }}
                centered
            >
                <Tab label="Subjects" />
                <Tab label="Teachers" />
                <Tab label="Classes" />
            </Tabs>
            </Paper>
        )
    };
};

export default withStyles(styles, { withTheme: true })(NavBar);
