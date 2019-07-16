import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';



const App = () =>{
    return(
        <div className='ui container'>
            
            <Router history={history}>
                <div>
                    <Header />
                    <Route exact path='/' component={StreamList}/>
                    <Route exact path='/streams/new' component={StreamCreate}/>
                    <Route exact path='/streams/edit/:id' component={StreamEdit}/>
                    <Route exact path='/streams/delete/:id' component={StreamDelete}/>
                    <Route exact path='/streams/show' component={StreamShow}/>


                </div>

            </Router>
        </div>
    )
}

export default App;