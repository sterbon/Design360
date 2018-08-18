import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import CreateLobby from './CreateLobby';
import ConfirmEvent from './ConfirmEvent';
import Feed from './Feed';
import { backgroundColor } from '../Values/colors';

const RouterComponent = () => {
    return (
        <Router {...sceneConfig}>
            <Stack hideNavBar>
                <Scene key='loginPage' component={LoginPage} initial />
                <Scene key='signUpPage' component={SignUpPage} />
                <Scene key='createLobby' component={CreateLobby} />
                <Scene key='confirmEvent' component={ConfirmEvent} />
                <Scene key='feed' component={Feed} />
            </Stack>
        </Router>
    );
};

const sceneConfig = {
    cardStyle: {
      backgroundColor
    }
};

export default RouterComponent;
