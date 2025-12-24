import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { createRandomPost } from './utils/createRandomPost';

// PostContext: Manages posts and post operations
export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const handleAddPost = useCallback((post) => {
    setPosts((posts) => [post, ...posts]);
  }, []);

  const handleClearPosts = useCallback(() => {
    setPosts([]);
  }, []);

  const value = useMemo(() => {
    return {
      posts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
    };
  }, [posts, handleAddPost, handleClearPosts]);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export const usePosts = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('PostContext was used outside the post provider');
  }

  return context;
};
