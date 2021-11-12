import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import {HomePage,AboutPage,CartPage,CheckoutPage,ErrorPage,SingleProductPage,ProductsPage} from "./pages";
import {Footer, Navbar, Sidebar} from "./components";
const AppRoute = () => {
    return(
        <Router>
            <Navbar />
            <Sidebar/>
            <Switch>
                <Route path={'/'}  exact component={HomePage}/>
                <Route path={'/about'} exact component={AboutPage} />
                <Route path={'/products'} exact component={ProductsPage} />
                <Route path={'/products/:id'} exact children={SingleProductPage} />
                <Route path={'/cart'} exact component={CartPage} />
                <Route path={'/checkout'} exact component={CheckoutPage} />
                <Route path={'*'} component={ErrorPage} />
            </Switch>
            <Footer />
        </Router>
    )
}
export default AppRoute;
