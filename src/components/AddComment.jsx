import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  });

  useEffect(() => {
    setComment((prevComment) => ({
      ...prevComment,
      elementId: asin,
    }));
  }, [asin]);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliOTY3YWUwZGQxZDAwMTgyZDE3MDEiLCJpYXQiOjE3MDQ2OTU0MTgsImV4cCI6MTcwNTkwNTAxOH0.9Lx6rYFI98V5axazCldU7MpOQM1VhxI0ZuGwIwKF_3o',
          },
        }
      );
      if (response.ok) {
        alert('Comment was sent!');
        setComment({
          comment: '',
          rate: 1,
          elementId: null,
        });
      } else {
        console.log('error');
        alert('Something went wrong');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleCommentChange = (e) => {
    setComment((prevComment) => ({
      ...prevComment,
      comment: e.target.value,
    }));
  };

  const handleRateChange = (e) => {
    setComment((prevComment) => ({
      ...prevComment,
      rate: parseInt(e.target.value, 10),
    }));
  };

  return (
    <div>
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Aggiungi un commento qui"
            value={comment.comment}
            onChange={handleCommentChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={handleRateChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Form.Control>
        </Form.Group>
        <Button data-testid="add-comment-btn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
