import { useSearch } from '../SearchContext';

function Results() {
  const { posts } = useSearch(); // Uses SearchContext to get filtered posts

  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
