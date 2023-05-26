
import { Provider } from 'react-redux';
import './App.css';
import { Counter } from './components/counter/counter';
import store from './redux/store';

function App() {
  return (
    <div className="App">

      {/* <Provider store={store}> */}
      <Counter/>
      hello world
      {/* </Provider> */}
    </div>
  );
}

export default App;
