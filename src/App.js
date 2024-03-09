
import './App.css';
import Register from './Register';
import Header from './Header';
import ClientTable from './ClientTable';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import UpdatePage from './UpdatePage';

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
   
    <Route path='/register' element={<Register/>}/>
    <Route path='/clienttable' element={<ClientTable/>}/>
    {/* <Route path='/updatepage' element={<UpdatePage/>}/> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
