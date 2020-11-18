import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home, Card} from '../pages/index'
import ShopHeader from "../ShopHeader";

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/cart' exact component={Card}/>
            </Switch>
        </main>
    )
}
export default App
