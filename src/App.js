import MainPage from './pages/MainPage';
import {useToggleDarkLightMode} from './hooks.js'

function App() {

  const isDark = useToggleDarkLightMode()

  return (
    <div className={isDark ? "dark" : "light"}>
      <button onClick={useToggleDarkLightMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
