import React from 'react';
import styles from './Card.module.scss';

function Card({id, title, price, imageUrl, onPlus, onFavorite, favorited=false}) {
    const [isAdded, setIsAdded] = React.useState()
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({title, price, imageUrl});
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onFavorite({id, title, price, imageUrl})
        setIsFavorite(!isFavorite)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img
                    src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
                    alt="heart"
                    onClick={onClickFavorite}
                />
            </div>
            <img
                width={133}
                height={112}
                src={imageUrl}
                alt="sneakers"
            />
            <h5>
                {title}
            </h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column pt-10'>
                    <span>Цена:</span>
                    <b>{price} $</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                    alt="plus"
                />
            </div>
        </div>
    )
}

export default Card;