import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Page from './components/Page';
import Services from './components/Services';
import Ptrans from './components/Ptrans';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime/css/react-datetime.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Page/>}>
              <Route index element = {<Home/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/ptrans' element={<Ptrans/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
