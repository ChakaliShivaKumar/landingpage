import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Page from './components/Page';
import Services from './components/Services';
import Ptrans from './components/Ptrans';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime/css/react-datetime.css';
import Nav from './components/Nav';
import Gtrans from './components/Gtrans';
import Business from './components/Business';
import ContactUs from './components/ContactUs';
import Query from './components/Query';


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Page/>}>
              <Route index element = {<Home/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/ptrans' element={<Ptrans/>}/>
              <Route path='/gtrans' element={<Gtrans/>}/>
              <Route path='/business' element={<Business/>}/>
              <Route path='/contactus' element={<ContactUs/>}/>
              <Route path='/query' element={<Query/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
