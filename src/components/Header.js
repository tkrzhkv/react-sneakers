import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to='/'>
                <div className='d-flex align-center'>
                    <img width={40} height={40} alt='logo' src='/img/logo.png'/>
                    <div className='headerInfo'>
                        <h3 className='text-uppercase'>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className='d-flex'>
                <li className='mr-30 cu-p' onClick={props.onClickCart}>
                    <img width={18} height={18} alt='logo' src='/img/cart.svg'/>
                    <span>1205 $</span>
                </li>
                <li className='mr-20 cu-p'>
                    <Link to='/favorites'>
                        <img width={18} height={18} src="/img/favorite.svg" alt="favorite"/>
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} alt='logo' src='/img/user.svg'/>
                </li>
            </ul>
        </header>
    )
}

export default Header;