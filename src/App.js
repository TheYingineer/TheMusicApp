import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    console.log(isLogin)
  }, [isLogin])

  return (
    <div className="App">
      <Header state={isLogin} setState={setIsLogin}/>
      {isLogin ? (
        <Dashboard />
      ) : (
        <Login state={isLogin} setState={setIsLogin} />
      )}
    </div>
  );
}

export default App;
