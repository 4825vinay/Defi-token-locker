import Home from './pages/HomePage/Home';
import Documentation from './pages/Documentation/Documentation';
import Dashboard from './pages/Dashboard/Dashboard.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Navbar, Footer } from './components';
import GlobalStyles from './globalStyles';
import timelocker from './pages/Time Locker/timelocker';
import farms from './pages/Farms/Farms';
import pools from './pages/Pools/pools';


function App() {
  return (
    <>

      <Router>
        <GlobalStyles/>
        <Navbar/>
        
         <Switch>
           <Route path='/' exact component={Home} />
           <Route path="/dashboard" exact component={Dashboard}/>
           <Route path='/documentation' exact component={Documentation}/>
           <Route path='/time-locker' exact component={timelocker}/>
           <Route path='/farms' exact component={farms}/>
           <Route path='/pools' exact component={pools}/>
{/*            <Route path='/support' exact component={Documentation}/>
 */}
         </Switch>

      </Router>
     
    </>
  );
}

export default App;
