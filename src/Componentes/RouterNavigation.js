import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LogOut from './LogOut'
import LoginUI from './LoginUI'
import Users from './UserList'

export default class RouterNavigation extends Component{
    render(){
        return(
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="loginAuth">
                        <Scene key="login" 
                            component={LoginUI} 
                            title="Login" />
                    </Scene>
                    <Scene key="main">
                        <Scene key="logout" 
                            rightTitle="LogOut"//Add bitton on rightside
                            onRight={() => console.log('Right')}//rightside button click
                            component={LogOut} //class name
                            title="Logout" //appears on header
                             />
                        <Scene key="user"
                                component={Users}
                                title="Users"
                                />
                    </Scene>
                </Scene>
            </Router>
        );
    };
}
