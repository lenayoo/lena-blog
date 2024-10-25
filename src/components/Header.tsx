import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='top'>
      <div className='top-logo'>Lena BLOG</div>
      <ul className='top-menu'>
        <li className='top-write'>
          <Link to='/' className='nav-link'>
            posts
          </Link>
        </li>
        <li className='top-posts'>
          <Link to='write' className='nav-link'>
            write
          </Link>
        </li>
        <li className='top-contact'>
          <Link to='contact' className='nav-link'>
            contact
          </Link>
        </li>
      </ul>
    </header>
  );
}
