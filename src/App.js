import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pic from './component/profile/ProfilePhoto.js';
import FullNames from './component/profile/FullName.js'
import Adresse from'./component/profile/Address'
function App() {
  return (
<div className="App">
<Pic/>
  <FullNames></FullNames>
  <Adresse/>
  </div>
  );
}

export default App;
