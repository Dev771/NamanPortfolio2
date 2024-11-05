import styles from './styles.module.scss';
import Logo from '../../assets/svg/Logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={`flex justify-between items-center container ${styles.navbar}`}>
            <Link to={""}>
                <img width='40' height='40' src={Logo} alt='Naman' />
            </Link>
            <div className='flex gap-4'>
                <Link to={'works'}>Selected Work</Link>
                <Link to={'life'}>Life</Link>
            </div>
        </nav>
    )
}

export default Navbar