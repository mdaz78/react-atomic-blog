import { useContext } from 'react';
import FormAddPost from './FormAddPost';
import Posts from './Posts';
import { PostContext } from '../App';

function Main() {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  );
}

export default Main;
