function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img
                    src="/img/heart-unliked.svg"
                    alt="heart"
                />
            </div>
            <img
                width={133}
                height={112}
                src="/img/sneakers/1.jpg"
                alt=""
            />
            <h5>
                Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column pt-10'>
                    <span>Цена:</span>
                    <b>12999 $</b>
                </div>
                <button className='button'>
                    <img
                        width={11}
                        height={11}
                        src="/img/plus.svg"
                        alt="plus"
                    />
                </button>
            </div>
        </div>
    )
}

export default Card;