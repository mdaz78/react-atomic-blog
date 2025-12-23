import { useContext } from 'react';
import List from './List';
import { PostContext } from '../App';

function Posts() {
  return (
    <section>
      <List />
    </section>
  );
}

export default Posts;
