import {SnackbarProvider} from 'notistack'
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';

function App() {
  return (
    <SnackbarProvider>
        <HomePage/>
    </SnackbarProvider>
  );
}

export default App;
