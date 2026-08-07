import './styles/App.css';
import Portfolio from './sections/Portfolio.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import { Route, Routes } from "react-router-dom";

export default function App() {

  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio/> } />
        </Routes>
      </>
  )
}
