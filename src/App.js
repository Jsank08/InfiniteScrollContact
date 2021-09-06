import './App.css';
import Header from "./Components/Header";
import Infinitelist from "./Components/InfiniteList";
import LogIn from "./Components/Login/LogInPage";
import ContactList from "./Components/InfiniteContactList";
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import { useSelector, useDispatch } from 'react-redux';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact component={LogIn} path="/" />
          <Route component={ContactList} path="/contactlist" />
          {/* <Route component={Infinitelist} path="/infinitelist" /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
