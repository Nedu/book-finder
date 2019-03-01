import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const BookCard = (props) => {
    console.log(props);
    // eslint-disable-next-line react/prop-types
    const { image, authors, title, publisher, previewLink } = props;
    let bookCover;
    // const count = 100;
    if (!Object.prototype.hasOwnProperty.call(image, 'thumbnail')) {
        bookCover = image;
    } else {
        bookCover = image.thumbnail
    }
    return <Card style={{ margin: '1em', width: '30%' }}>
            <CardImg top width="100%" height="150px" style={{ objectFit: 'cover' }} src={bookCover} alt="Book cover image" />
            <CardBody>
                <CardTitle>Title: {title}</CardTitle>
                <CardSubtitle>Author: {authors ? (authors.map(author => author)) : 'Authors not found'}</CardSubtitle>
                <CardText>Publisher: {publisher || 'Publisher not found'}</CardText>
                <Button><a href={previewLink}>More Info</a></Button>
            </CardBody>
    </Card>
}

export default BookCard;