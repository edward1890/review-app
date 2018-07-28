import React, { Component, Fragment }from "react";
import { Form, FormGroup, Label, Input} from "reactstrap";



class SearchBar extends Component {
    state = {
        term: ""
    }


    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="term" hidden>Search Term</Label>
                    <Input 
                        type="term" 
                        name="email" 
                        id="term" 
                        placeholder="Insert Tacos Here" 
                        
                    />
                </FormGroup>
            </Form> 
        )
    }
}


export default SearchBar;