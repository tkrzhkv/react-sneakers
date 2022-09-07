import React from "react"
import {Routes, Route} from 'react-router-dom'
import axios from "axios"
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"



function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, setCartOpened] = React.useState(false)

//отправляем запрос на бекенд и получаем список кроссовок
    React.useEffect(() => {
        axios.get('https://63136ed9a8d3f673ffcac9aa.mockapi.io/items/')
            .then(res => {
                setItems(res.data)
            })
        axios.get('https://63136ed9a8d3f673ffcac9aa.mockapi.io/cart/')
            .then(res => {
                setCartItems(res.data)
            })
        axios.get('https://63136ed9a8d3f673ffcac9aa.mockapi.io/favorites/')
            .then(res => {
                setFavorites(res.data)
            })
    },[])

    const onAddToCart = (obj) => {
        axios.post('https://63136ed9a8d3f673ffcac9aa.mockapi.io/cart/', obj)
        setCartItems(prev =>[...prev, obj])//берет предыдущие данные из массива и довляет к нему то что в obj
    }

    const onAddToFavorite = async (obj) => {
        try {
            if(favorites.find((favobj) => favobj.id === obj.id)) {
                axios.delete(`https://63136ed9a8d3f673ffcac9aa.mockapi.io/favorites/${obj.id}`)
            } else {
                const {data} = await axios.post('https://63136ed9a8d3f673ffcac9aa.mockapi.io/favorites/', obj)
                setFavorites((prev) =>[...prev, data])//берет предыдущие данные из массива и довляет к нему то что в obj
            }
        } catch (error) {
            alert('Не удалось добавить закладку')
        }
    }

//удаление элементов корзины с помощью фильтрации массива
    const onRemoveItem = (id) => {
        axios.delete(`https://63136ed9a8d3f673ffcac9aa.mockapi.io/cart${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)

    }

  return (
      <div className="wrapper clear">

          {cartOpened &&
         <Drawer
              items={cartItems}
              onRemove={onRemoveItem}
              onClose={() => setCartOpened(false)}/>} {/*if cartOpened true will back False.*/}

        <Header onClickCart={() => setCartOpened(true)}/>

          <Routes>
              <Route
                  path='/'
                  element={
                  <Home
                      items={items}
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                      onChangeSearchInput={onChangeSearchInput}
                      onAddToFavorite={onAddToFavorite}
                      onAddToCart={onAddToCart}

                  />
              }>
              </Route>
          </Routes>
          <Routes>
              <Route
                  path='/favorites'
                  exact
                  element={
                  <Favorites
                        items={favorites}
                        onAddToFavorite={onAddToFavorite}
                  />}
              >

              </Route>
          </Routes>


      </div>
  );
}

export default App;
