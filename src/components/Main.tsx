import { useState } from 'react';
import './style.css';

interface Post {
  title: string;
  content: string;
}

export default function Main() {
  const [post, setPost] = useState<Post>({ title: '', content: '' });
  const [posts, setPosts] = useState<Post[]>([]);

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: e.target.value });
  };
  const changeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...post, content: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (post.title.trim() === '' || post.content.trim() === '') {
      alert('내용을 입력해 주세요');
      return;
    }
    setPosts([...posts, post]);
    setPost({ title: '', content: '' });
  };

  // console.log(post);
  console.log(posts);

  return (
    <div className='main'>
      <form action='submit' className='main-div' onSubmit={submitHandler}>
        <label htmlFor='title'>제목</label>
        <input
          type='text'
          id='title'
          onChange={changeTitle}
          value={post.title}
        />
        <label htmlFor='content'>내용</label>
        <textarea
          name='content'
          id='content'
          onChange={changeContent}
          value={post.content}
        ></textarea>
        <button>제출하기</button>
      </form>
    </div>
  );
}
