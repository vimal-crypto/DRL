
import React, { useState, useEffect } from 'react';

const Feed = () => {
  const [items, setItems] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moreItemsAvailable, setMoreItemsAvailable] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      if (loadingStatus) return;
      setLoadingStatus(true);

      const res = await fetch(`https://dummyapi.io/data/api/post?page=${currentPage}&limit=10`, {
        headers: { 'app-id': 'your-app-id' }  // Use dummyapi.io for post data
      });
      const data = await res.json();

      setItems((previousItems) => [...previousItems, ...data.data]);
      setLoadingStatus(false);

      if (data.data.length < 10) {
        setMoreItemsAvailable(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handleScrolling = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (moreItemsAvailable) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrolling);
    return () => window.removeEventListener('scroll', handleScrolling);
  }, [moreItemsAvailable]);

  return (
    <div>
      <h1>My Infinite Feed</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h3>{item.text}</h3>
          </li>
        ))}
      </ul>
      {loadingStatus && <div>Loading...</div>}
      {!moreItemsAvailable && <div>No more content</div>}
    </div>
  );
};

export default Feed;
