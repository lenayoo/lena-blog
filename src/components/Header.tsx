import './style.css';

export default function Header() {
  return (
    <header className='top'>
      <div className='top-logo'>Lena BLOG</div>
      <div className='top-menu'>
        <div className='top-write'>write</div>
        <div className='top-posts'>posts</div>
        <div className='top-contact'>contact</div>
      </div>
    </header>
  );
}
