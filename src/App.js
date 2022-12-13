import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import { useModal } from './contexts/Modal';
import Modal from './components/Modal';
import SignUp from './components/Signup';

function App() {
  const screen = window.screen.width

  const {modalIsOpen, setModalOpen} = useModal()
    return (
      <>
      <div className='wrapper'>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/signup" element={<SignUp/>} />


          </Routes>
        </Router>          
        {modalIsOpen && <Modal modalIsOpen={modalIsOpen}/>}
      </div>

      </>
    );
  } 

export default App;
