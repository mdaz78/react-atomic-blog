import { useContext } from 'react';
import List from './List';
import { PostContext } from '../App';

function Posts() {
  const { posts } = useContext(PostContext);

  return (
    <section>
      <List posts={posts} />
    </section>
  );
}

export default Posts;
