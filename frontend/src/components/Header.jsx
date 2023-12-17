import { FaSignInAlt, FaSignOutAlt, FaUser, FaListAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import girl from '../assets/undraw_Book_lover_re_rwjy.png'

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'><img src={girl} alt='Girl displaying a book' height={150} width={150} />Hailey Ferreira's Book List</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt />Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser />Register
                </Link>
            </li>
            <li>
                <Link to='/topten'>
                    <FaListAlt />Top Ten
                </Link>
            </li>
        </ul>
    </header>
  )
}
export default Header