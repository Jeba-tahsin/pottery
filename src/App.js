import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import MoreItems from './Pages/More/MoreItems/MoreItems';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <BrowserRouter>
        <Header></Header>

        <Switch>
        <Route exact path='/'>
            <Home></Home>
         </Route>
         <Route path='/home'>
            <Home></Home>
         </Route>
         <Route path='/moreItems'>
           <MoreItems></MoreItems>
         </Route>
        </Switch>

        <Footer></Footer>
      </BrowserRouter>
  );
}

export default App;
