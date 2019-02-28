import React from 'react';
import Search from './Search';
import BookCards from './BookCards';

const BookFinder = () => (
    <div className='container' style={{ margin: '0 auto', marginTop: '2em' }}>
        <Search />
        <BookCards />
    </div>
)

export default BookFinder;