import React from 'react';
import styled from 'styled-components';

import BookCard from './BookCard';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const BookCards = (props) => {
    const { results } = props; // eslint-disable-line
    const {  items  } = results;
    if (!Object.keys(results).length || !items) {
        return <div style={{ textAlign :'center', marginTop: '2em' }}>No books found! Please try searching a different term</div>
    }
    
    return (
        <Container>
            {items.map(item => {
                let image;
                if (!Object.prototype.hasOwnProperty.call(item.volumeInfo, 'imageLinks')) {
                    image = 'https://via.placeholder.com/468x60?text=No+Image+Found'
                } else {
                    image = item.volumeInfo.imageLinks
                }
                return <BookCard key={item.id} title={item.volumeInfo.title} authors={item.volumeInfo.authors} publisher={item.volumeInfo.publisher} previewLink={item.volumeInfo.previewLink} image={image} />
            })}
        </Container>
    )
    
}

export default BookCards;