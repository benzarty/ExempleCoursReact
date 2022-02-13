import logo from './logo.svg';
import './App.css';
import ClassComposant from './Composants/ClassComposant';
import FunctionComposant from './Composants/FunctionComposant';
import { WithConst } from './Composants/Constructor/WithConst';
import Methods from './LifeCyle/Methods';
import Mouting from './LifeCyle/Mounting';
import Unmouting from './LifeCyle/Unmounting';
import { Update } from './LifeCyle/Update';


function App() {
  // Ajouter les composants que vous voulez pour faire le test
  
  return (
    <div className="App">
      <header className="App-header">

<Update></Update>
     </header>
    </div>
  );
}

export default App;
