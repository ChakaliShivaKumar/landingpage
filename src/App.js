import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Page from './components/Page';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Page/>}>
              <Route index element = {<Home/>}/>
              <Route path='/services' element={<Services/>}/>
              {/* <Route path='/checkout' element={<TicketCheckout/>}/>
              <Route path='/confirmation' element={<Confirmation/>}/>
              <Route path='/events' element={<Events/>}/> */}
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
