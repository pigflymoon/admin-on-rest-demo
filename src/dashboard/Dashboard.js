import React, {Component} from 'react';
import withWidth from 'material-ui/utils/withWidth';
import {AppBarMobile,} from 'admin-on-rest';//GET_LIST, GET_MANY

import Welcome from './Welcome';
import UploadArea from '../components/UploadArea';
import ChosenFiles from '../components/ChosenFiles';
const styles = {
    welcome: {marginBottom: '2em'},
    flex: {display: 'flex'},
    leftCol: {flex: 1, marginRight: '1em'},
    rightCol: {flex: 1, marginLeft: '1em'},
    singleCol: {marginTop: '2em'},
};

class Dashboard extends Component {
    state = {};

    componentDidMount() {

    }

    render() {

        const {width} = this.props;
        return (
            <div>
                {width === 1 && <AppBarMobile title="Posters Galore Admin"/>}
                <Welcome style={styles.welcome}/>
                <div style={styles.flex}>
                    <div style={styles.leftCol}>
                        <div style={styles.flex}>
                            <UploadArea/>
                        </div>

                    </div>
                    <div style={styles.rightCol}>
                        <div style={styles.flex}>
                            <ChosenFiles/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withWidth()(Dashboard);
