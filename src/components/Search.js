import React from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap';

function Search(props) {
    return (
        <div className = 'search'>
            <InputGroup className="mb-3" style = {{maxWidth: '800px', margin: '0 auto'}}>
                <FormControl onChange = {props.onChange}
                    placeholder="Search country..."
                />
                <InputGroup.Append>
                    <Button onClick = {props.onClick} variant="outline-secondary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default Search