import React, { Component, Fragment } from 'react';
import { Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import { notifyFailure } from '../utils';
import BookCards from './BookCards';
import Loading from './Loading';

const Header = styled.h1`
    text-align: center;
    margin-bottom: 0.5em;
`;

class Search extends Component {
    state = {
        search: '',
        results: {},
        showResults: false,
        isLoading: false
    }

    signal = axios.CancelToken.source();

    componentWillUnmount() {
        this.signal.cancel('Api is being canceled');
    }

    _handleSubmit = async (e, search) => {
        try {
            e.preventDefault();
            this.setState({ isLoading: true });
            if (search.trim() === '') {
                notifyFailure('Please enter something to search');
            } else {
                const results = await axios.get(`${process.env.API_URL}?q=${search}&orderBy=newest&key=${process.env.API_KEY}`);
                console.log(results);
                this.setState({ results: results.data, showResults: true, isLoading: false });
            }
        } catch (err) {
            if (axios.isCancel(err)) {
                console.error('Error: ', err.message);
                this.setState({ isLoading: false });
            } else {
                notifyFailure()
                this.setState({ isLoading: false });
            }
        }
        
    }

    _handleUserInput = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value  });
    }

    render() {
        const { search, results, showResults, isLoading } = this.state;
        if (isLoading) {
            return <Loading />
        }
        return (
            <Fragment>
                <Header>Book Finder</Header>
                <Form onSubmit={(e) => this._handleSubmit(e, search)} style={{ width: '50%', margin: '0 auto' }}>
                    <FormGroup row>
                        <Col sm={9} style={{ padding: '0' }}>
                            <Input required type='text' name='search' id='search' onChange={(e) => this._handleUserInput(e)} placeholder="Enter Book" style={{ borderTopRightRadius: '0', borderBottomRightRadius: '0' }} />
                        </Col>
                        <Col sm={3} style={{ padding: '0' }}>
                            <Button type='submit' style={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}>Search</Button>
                        </Col>
                    </FormGroup>
                </Form>
                {showResults ? <BookCards results={results}/> : null}
                <ToastContainer />
            </Fragment>
        )
    }
}

export default Search;