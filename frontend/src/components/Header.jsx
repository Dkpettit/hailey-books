import { FaSignInAlt, FaSignOutAlt, FaUser, FaListAlt} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import girl from '../assets/undraw_Bookshelves_re_lxoy.png'
import { useSelector, useDispatch} from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'><img src={girl} alt='Girl displaying a book' height={150} width={150} /></Link>
        </div>
        <ul>
            {user ? ( <li>
                <button className='btn' onClick={onLogout}>
                    <FaSignOutAlt />Log out
                </button>
            </li>) : (<>
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
            </>)}
           
        </ul>
    </header>
  )
}
export default Header