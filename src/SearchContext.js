import { createContext, useContext, useMemo, useState } from 'react';
import { usePosts } from './PostContext';

// SearchContext: Manages search query and filtered posts
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { posts } = usePosts(); // Get raw posts from PostContext
  const [searchQuery, setSearchQuery] = useState('');

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts = useMemo(() => {
    return searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;
  }, [posts, searchQuery]);

  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      searchQuery,
      setSearchQuery,
    };
  }, [searchedPosts, searchQuery]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('SearchContext was used outside the search provider');
  }

  return context;
};
