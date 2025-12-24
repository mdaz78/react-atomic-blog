import { useSearch } from '../SearchContext';

function SearchPosts() {
  const { searchQuery, setSearchQuery } = useSearch(); // Uses SearchContext

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder='Search posts...'
    />
  );
}

export default SearchPosts;
