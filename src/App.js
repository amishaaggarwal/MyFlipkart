import './App.css';
import Routing from 'routing/Routing';
import TopBar from 'components/TopBar/TopBar';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <TopBar/>
      <Routing />
      <ToastContainer />
    </div>
  );
}

export default App;
