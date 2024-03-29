import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';

import { useState } from 'react';

const MovieCard = ({el}) =>{
    const [showMore, setShowMore] = useState(false);
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.posterURL} style={{width :'286px', height:'406px'}}  />
                <Card.Body style={{backgroundColor: '#ffcbe35e'}}>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text>
                        {showMore ? el.description : `${el.description.substring(0, 80)}`}
                        <a className={showMore ? 'red' : 'blue'}  onClick={()=>setShowMore(!showMore)}>{showMore ? '  Show less' : '...  Show more'}</a>
                    </Card.Text>
                    <Rating name="read-only" value={el.rating} readOnly />
                </Card.Body>
            </Card>
        </div>
    )
}
export default MovieCard