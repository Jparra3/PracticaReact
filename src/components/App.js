import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyPage from '../pages/MyPage'
import PageNew from '../pages/PageNew'
import NotFound from '../pages/NotFound'

function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/my-page" component={MyPage}/>
                <Route exact path="/my-page/page-new" component={PageNew}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App