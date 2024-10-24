import { useEffect, useState } from 'react';
import supabase from '../../supabase';

interface Post {
  title: string;
  content: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('posts').select();

    if (!data) return;

    setPosts(data);
  }

  return (
    <ul>
      {posts.map((post) => (
        <>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </>
      ))}
    </ul>
  );
}
