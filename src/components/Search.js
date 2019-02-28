import React, { Component, Fragment } from 'react';
import { Col, Form, FormGroup, Input, Button } from 'reactstrap';
import styled from 'styled-components';

const Header = styled.h1`
    text-align: center;
    margin-bottom: 0.5em;
`;

class Search extends Component {
    state = {
        search: ''
    }

    _handleSubmit = (e, search) => {
        e.preventDefault();
        console.log(search);
    }

    _handleUserInput = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value  });
    }

    render() {
        const { search } = this.state;
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
            </Fragment>
        )
    }
}

export default Search;