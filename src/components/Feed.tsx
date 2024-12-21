import React, { useState, useEffect, useCallback } from 'react';
import './Feed.css';
import FeedItem from './FeedItem.tsx';

const Feed: React.FC = () => {
  const [feedItems, setFeedItems] = useState<any[]>([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const sentImpressions = new Set<string>(new Set()); // Track sent impressions

  const fetchFeedData = useCallback(async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const response = await fetch(`https://backend.tedooo.com/hw/feed.json?skip=${skip}`);
      const data = await response.json();

      setFeedItems((prevItems) => [...prevItems, ...data.data]);
      setSkip((prevSkip) => prevSkip + 6);
      setHasMore(data.hasMore);
    } catch (error) {
      console.error('Error fetching feed data:', error);
    } finally {
      setLoading(false);
    }
  }, [hasMore, loading, skip]);

  useEffect(() => {
    fetchFeedData();
  }, [fetchFeedData]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      fetchFeedData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleImpression = async (id: string) => {
    console.log(`Attempting to send impression for item ID: ${id}`); // Debugging log
    if (!sentImpressions.has(id)) {
      sentImpressions.add(id); // Mark impression as sent
      try {
        console.log(`Sending impression for item ID: ${id}`);
        await fetch(`https://backend.tedooo.com/?itemId=${id}`, {
          method: 'GET',
        });
        console.log(`Impression successfully sent for item ID: ${id}`); // Log success
      } catch (error) {
        console.error(`Failed to send impression for item ID: ${id}`, error);
      }
    } else {
      console.log(`Impression already sent for item ID: ${id}`); // Log duplicate
    }
  };

  return (
    <div className="feed">
      {feedItems.map((item, index) => (
        <FeedItem key={`${item.id}-${index}`} item={item} onImpression={handleImpression} />
      ))}
      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default Feed;
