import { memo } from 'react';
import { usePosts } from '../PostContext';
import Results from './Results';
import SearchPosts from './SearchPosts';

function Header() {
  const { onClearPosts } = usePosts(); // Only subscribes to PostContext, not SearchContext
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default memo(Header);
