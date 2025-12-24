import { useSearch } from '../SearchContext';

function List() {
  const { posts } = useSearch(); // Uses SearchContext to get filtered posts

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
