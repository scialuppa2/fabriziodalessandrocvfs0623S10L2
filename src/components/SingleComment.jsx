import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliOTY3YWUwZGQxZDAwMTgyZDE3MDEiLCJpYXQiOjE3MDQ2OTU0MTgsImV4cCI6MTcwNTkwNTAxOH0.9Lx6rYFI98V5axazCldU7MpOQM1VhxI0ZuGwIwKF_3o",
          },
        }
      )
      if (response.ok) {
        alert('Commento eliminato con successo')
      } else {
        alert('Errore - commento non eliminato')
      }
    } catch (error) {
      alert('Errore - commento non eliminato')
    }
  }

  return (
    <ListGroup.Item data-testid="single-comment">
      <p>"{comment.comment}"</p>
      <p>{comment.author}</p>
      <Button
        variant="danger"
        className="m-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
