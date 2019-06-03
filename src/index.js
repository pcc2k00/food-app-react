import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/common/Header';
import Categories from './components/categories/Categories'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Recip from './components/recipies/Recip'


const App=()=>{
    return(
        <div>
            <Header/>
            <Router>
            <Route exact path="/" component={Categories}/>
            <Route path={`/:catID`} component={Recip}/>
            </Router>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
