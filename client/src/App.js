import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from './components/Header'
import './App.scss'
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
