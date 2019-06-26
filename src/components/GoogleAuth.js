import React from 'react';

class GoogleAuth extends React.Component{

    state = {
        isSignedIn: null
    }

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '866818660704-8iieopgqpirbe3h93en2luhlakdhgbie.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            })
        });

    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>I don't know if we are sign in</div>
        }else if(this.state.isSignedIn){
            return <div>I am sign in</div>
        }else{
            return <div>I am not sign in</div>
        }
    }
    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth;