import React, { useEffect, useRef, useState } from 'react';
import './FeedItem.css';

interface FeedItemProps {
  item: {
    id: string;
    avatar: string;
    username: string;
    shopName: string;
    text: string;
    images: string[];
    likes: number;
    comments: number;
  };
  onImpression: (id: string) => void; // Callback for impression tracking
}

const FeedItem: React.FC<FeedItemProps> = ({ item, onImpression }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(item.likes);

  const ref = useRef<HTMLDivElement | null>(null);

  const displayedImages = item.images.slice(0, 2); // Display onle the first 2 images

  // Intersection Observer for Impression Tracking
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log(`Feed item ${item.id} is visible in the viewport.`);
          onImpression(item.id);
          observer.disconnect(); // Disconnect after the first impression
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the item is visible
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [item.id, onImpression]);

  const handleLike = () => {
    if (isLiked) {
      // If already liked, unlike and decrement likes
      setIsLiked(false);
      setTotalLikes((prevLikes) => prevLikes - 1);
      console.log('Unliked post:', item.id);
    }
    else {
      // If not liked, like and increment likes
      setIsLiked(true);
      setTotalLikes((prevLikes) => prevLikes + 1);
      console.log('Liked post:', item.id);
    }
  }

  return (
    <div className="feed-item">
      {/* Header */}
      <div className="feed-item-header">
        <img src={item.avatar} alt={`${item.username}'s avatar`} className="avatar" />
        <div className="user-info">
          <span className="username">{item.username}</span>
          {item.shopName && <span className="shop-name">{item.shopName}</span>}
        </div>
      </div>

      {/* Post Text */}
      <div className="post-text">{item.text}</div>

      {/* Image Container */}
      <div className="image-container">
        {displayedImages.map((image, index) => (
          <img key={index} src={image} alt={`Post image ${index + 1}`} className="post-image" />
        ))}
      </div>

      {/* Footer */}
      <div className="feed-item-footer">
        <div className="likes">
          <img src="/like.png" alt="Likes Icon" className="likes-icon" />
          <span>{totalLikes} Likes</span>
        </div>
        <div className="comments">
          <span>{item.comments} Comments</span>
        </div>
      </div>

      {/* Vector Line */}
      <div className="vector-line"></div>

     {/* Action Buttons */}
     <div className="action-buttons">
        <div className="like-button" onClick={handleLike}>
          <svg
            className="button-icon"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            xmlns="http://www.w3.org/2000/svg"
            fill={isLiked ? '#0A66C2' : '#737877'}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.23598 1.27155C7.32626 1.06841 7.52771 0.9375 7.75 0.9375C8.49592 0.9375 9.21129 1.23382 9.73874 1.76126C10.2662 2.28871 10.5625 3.00408 10.5625 3.75V6.1875H14.2421C14.5399 6.18462 14.8348 6.24628 15.1065 6.36823C15.3793 6.49065 15.6222 6.67092 15.8184 6.89653C16.0145 7.12215 16.1593 7.38773 16.2427 7.67486C16.3261 7.96199 16.346 8.26381 16.3011 8.55941L15.2661 15.3093C15.1915 15.8011 14.9417 16.2495 14.5627 16.5716C14.1846 16.893 13.7033 17.0673 13.2071 17.0625H2.5C1.95299 17.0625 1.42839 16.8452 1.04159 16.4584C0.654798 16.0716 0.4375 15.547 0.4375 15V9.75C0.4375 9.20299 0.654798 8.67839 1.04159 8.29159C1.42839 7.9048 1.95299 7.6875 2.5 7.6875H4.38445L7.23598 1.27155ZM5.3125 8.36937L8.09931 2.09904C8.41658 2.16618 8.71043 2.32394 8.94324 2.55676C9.25971 2.87322 9.4375 3.30245 9.4375 3.75V6.75C9.4375 7.06066 9.68934 7.3125 10 7.3125H14.245L14.2514 7.31246C14.3873 7.31093 14.5219 7.33895 14.6459 7.3946C14.7698 7.45024 14.8803 7.53218 14.9694 7.63474C15.0586 7.73729 15.1244 7.85801 15.1623 7.98852C15.2002 8.11895 15.2093 8.25605 15.1889 8.39033L14.1539 15.1407C14.12 15.3642 14.0064 15.568 13.8341 15.7144C13.6618 15.8609 13.4424 15.9401 13.2164 15.9375L5.3125 15.9375V8.36937ZM4.1875 15.9375V8.8125H2.5C2.25136 8.8125 2.0129 8.91127 1.83709 9.08709C1.66127 9.2629 1.5625 9.50136 1.5625 9.75V15C1.5625 15.2486 1.66127 15.4871 1.83709 15.6629C2.0129 15.8387 2.25136 15.9375 2.5 15.9375H4.1875Z"
            />
          </svg>
          <span style={{ color: isLiked ? '#0A66C2' : '#737877' }}>Like</span>
        </div>
        <div className="comment-button">
          <img src="/comment_button.png" alt="Comment Icon" className="button-icon" />
          <span>Comment</span>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
