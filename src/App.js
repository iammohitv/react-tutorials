
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import  {About}  from './components/About';
// let name = "Mohit"
function App() {
  return (
    <>
    <Navbar title="KingTextUtils"/>
    <div className="container my-3">
      <TextForm heading="Please Enter Text in this TextBox"/>
      <About/>
    </div>
    
    </>
  );
}

export default App;
