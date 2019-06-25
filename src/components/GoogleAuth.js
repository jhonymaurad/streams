import React from 'react';

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '866818660704-8iieopgqpirbe3h93en2luhlakdhgbie.apps.googleusercontent.com',
                scope: 'email'
            });
        });

    }
    render(){
        return(
            <div>
                Google Auth
            </div>
        )
    }
}

export default GoogleAuth;