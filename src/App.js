import './App.css';
// components
import LogoPage from './views/LogoPage';
import { useEffect, useState } from 'react';
import Loading from './views/Loading';
function App() {
  const [load,setLoad] = useState(true);
  useEffect(()=>{
      setTimeout(()=>{
           setLoad(false)
      },5000)
  },[])
  return (
    <div className="App">
      {
         load && <Loading/>
      }
      { !load && <LogoPage/> }
    </div>
  );
}

export default App;
