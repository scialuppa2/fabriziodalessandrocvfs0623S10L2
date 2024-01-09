import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + asin,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliOTY3YWUwZGQxZDAwMTgyZDE3MDEiLCJpYXQiOjE3MDQ2OTU0MTgsImV4cCI6MTcwNTkwNTAxOH0.9Lx6rYFI98V5axazCldU7MpOQM1VhxI0ZuGwIwKF_3o',
            },
          }
        );

        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
          setIsLoading(false);
          setIsError(false);
        } else {
          console.log('error');
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    if (asin) {
      getComments();
    }
  }, [asin]);

  return (
    <div className="text-center">
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
