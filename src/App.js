import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddProducts from './Pages/AddProducts/AddProducts';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import MoreItems from './Pages/More/MoreItems/MoreItems';
import NotFound from './Pages/NotFound/NotFound';
import Purches from './Pages/Purches/Purches';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <AuthProvider>
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
         <PrivateRoute path='/details/:id'>
           <Details></Details>
         </PrivateRoute>
         <Route path='/login'>
           <Login></Login>
         </Route>
         <Route path='/register'>
           <Register></Register>
         </Route>
         <Route path="/addProducts">
            <AddProducts></AddProducts>
          </Route>
          <Route path='/manageProducts'>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path='/manageOrder'>
            <ManageOrder></ManageOrder>
          </Route>
          <PrivateRoute path='/purches/:id'>
            <Purches></Purches>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
