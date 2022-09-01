
import Card from './components/Card/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 260,
        imageUrl: '/img/sneakers/1.jpg'
    },
    {
        title: 'Мужские Кроссовки Nike Air Max 270',
        price: 240,
        imageUrl: '/img/sneakers/2.jpg'
    },
    {
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 200,
        imageUrl: '/img/sneakers/3.jpg'
    },
    {
        title: 'Кроссовки Puma X Aka Boku Future Rider',
        price: 230,
        imageUrl: '/img/sneakers/4.jpg'
    },
    // {
    //     name: 'Мужские Кроссовки Under Armour Curry 8',
    //     price: 180,
    //     imageUrl: '/img/sneakers/5.jpg'
    // },
    // {
    //     name: 'Мужские Кроссовки Nike Kyrie 7',
    //     price: 167,
    //     imageUrl: '/img/sneakers/6.jpg'
    // },
    // {
    //     name: 'Мужские Кроссовки Jordan Air Jordan 11',
    //     price: 233,
    //     imageUrl: '/img/sneakers/7.jpg'
    // },
    // {
    //     name: 'Мужские Кроссовки Nike LeBron XVIII',
    //     price: 260,
    //     imageUrl: '/img/sneakers/8.jpg'
    // },
    // {
    //     name: 'Мужские Кроссовки Nike Lebron XVIII Low',
    //     price: 230,
    //     imageUrl: '/img/sneakers/9.jpg'
    // },
    // {
    //     name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //     price: 190,
    //     imageUrl: '/img/sneakers/10.jpg'
    // },
    // {
    //     name: 'Кроссовки Puma X Aka Boku Future Rider',
    //     price: 210,
    //     imageUrl: '/img/sneakers/11.jpg'
    // },
    // {
    //     name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    //     price: 330,
    //     imageUrl: '/img/sneakers/12.jpg'
    // },
]

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
              {arr.map((obj) =>
                  <Card
                      title={obj.title}
                      price={obj.price}
                      imageUrl={obj.imageUrl}
                  />
              )}
          </div>
        </div>
      </div>
  );
}

export default App;
