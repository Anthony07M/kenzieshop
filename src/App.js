import { ToastContainer } from 'react-toastify';
import './App.css';
import Header from './components/Header';
import Routes from './routes'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className="App">
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

        <Header/>
         <Routes/>
      </div>
    </>
  );
}

export default App;
