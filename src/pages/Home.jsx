import Card from "../components/Card/Card";

function Home({
                  items,
                  searchValue,
                  setSearchValue,
                  onChangeSearchInput,
                  onAddToFavorite,
                  onAddToCart
              }) {
    return (
        <div className="content p-40">
            <div className='d-flex align-center justify-between mb-40'>
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block d-flex align-center">
                    <img width={16} height={16} src="/img/search.svg" alt="search"/>
                    {searchValue && <img
                        className='clear cu-p'
                        src="/img/btn-remove.svg"
                        alt="remove"
                        onClick={() => setSearchValue('')}
                    />}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' type="text"/>
                </div>
            </div>
            <div className='d-flex flex-wrap'>
                {items
                    .filter((item) => item.title.toLowerCase().includes(searchValue)) //фильтрую массив для поиска
                    .map((item) =>
                        <Card
                            key={item.id}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                            {...item}
                        />
                    )}
            </div>
        </div>
    )
}

export default Home;