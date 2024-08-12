import {SnackbarProvider} from 'notistack'
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import DoctorPage from './components/pages/DoctorPage/DoctorPage';
import BookingsPage from './components/pages/BookingPage/BookingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <SnackbarProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/doctors' element={<DoctorPage/>}/>
          <Route path='/booking' element={<BookingsPage/>}/>
        </Routes>
      </Router>
        
    </SnackbarProvider>
  );
}

export default App;
