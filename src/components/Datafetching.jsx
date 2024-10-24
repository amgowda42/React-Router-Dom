//data fetching using use effect

import axios from "axios";
import { useEffect, useState } from "react";

const Datafetching = () => {
  // const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idfromClick, setIdfromClick] = useState(1);
  const handleClick = () => {
    setIdfromClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idfromClick}`)
      .then((response) => {
        // setPosts(response.data), console.log(response.data);
        setPost(response.data), console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [idfromClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Click here</button>
      <ol>
        {/* {posts.map((posts) => (
          <li key={posts.id}>
            {posts?.id} {posts?.title}
          </li>
        ))} */}

        {<li>{post.body}</li>}
      </ol>
    </div>
  );
};

export default Datafetching;
