import './style.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='header_logo'>Lena BLOG</div>
      <div className='header-menu'>
        <div className='header-write'>write</div>
        <div className='header-posts'>posts</div>
        <div className='header-contact'>contact</div>
      </div>
    </header>
  );
}
