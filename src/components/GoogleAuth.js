import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
// const key = config.clientId;

class GoogleAuth extends React.Component{
    // WITHOUT REDUX
    // state = {
    //     isSignedIn: null
    // }

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '866818660704-8iieopgqpirbe3h93en2luhlakdhgbie.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                //WITHOUT REDUX
                //this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }
    // onAuthChange = () => {
    //     this.setState({
    //         isSignedIn : this.auth.isSignedIn.get()
    //     });
    // };

    // REDUX:
    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn();
        }else{
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick= () => {
        this.auth.signOut();
    };

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return(
                <button className= 'ui red google button' onClick={this.onSignOutClick}>
                    <i className= 'google icon'></i>
                    Sign Out
                </button>
            )
        }else{
            return (
                <button className= 'ui green google button' onClick={this.onSignInClick}>
                    <i className= 'google icon'></i>
                    Sign In with Google
                </button>
            );
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

const mapStateToProps = (state) => {
    return { isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);