
import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  return (
      <div className="wrapper clear">
        <Drawer/>
        <Header/>
        <div className="content p-40">
          <div className='d-flex align-center justify-between mb-40'>
            <h1>Все кроссовки</h1>
            <div className="search-block d-flex align-center">
              <img width={16} height={16} src="/img/search.svg" alt="search"/>
              <input placeholder='Поиск...' type="text"/>
            </div>
          </div>

          <div className='d-flex '>
            <Card/>
          </div>
        </div>
      </div>
  );
}

export default App;
