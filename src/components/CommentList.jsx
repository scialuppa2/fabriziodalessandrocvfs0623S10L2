import ListGroup from 'react-bootstrap/ListGroup'
import SingleComment from './SingleComment'

const CommentList = ({ commentsToShow }) => (
    <ListGroup data-testid="comment-list" style={{ color: 'black' }} className="mt-2">
        {commentsToShow.map((comment) => (
            <SingleComment comment={comment} key={comment._id} />
        ))}
    </ListGroup>
)

export default CommentList
