import React, {Component} from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import {filterTodo} from "../../../actions/todo";
import {connect} from "react-redux";

class FormFilter extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      status: '',
      priority: '',
    }
  }
  onChangeKeyword = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.props.handleSearch(this.state)
    });
    // let dataFilter = this.state;
    // dataFilter[e.target.name] = e.target.value;
    // this.props.handleSearch(this.state)
  }

  render() {
    return (
      <Form className={'form-filter'}>
        <FormGroup>
          <Input type="text" name="name" id="name" placeholder="Search.." onChange={(e) => this.onChangeKeyword(e)}/>
          <Button color={'secondary'} className={'btn-search'}>Search</Button>
        </FormGroup>
        <FormGroup>
          <Label for="status">Status: </Label>
          <Input type="select" name="status" id="status" onChange={(e) => this.onChangeKeyword(e)}>
            <option></option>
            <option>positive</option>
            <option>negative</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="priority">Priority: </Label>
          <Input type="select" name="priority" id="priority" onChange={(e) => this.onChangeKeyword(e)}>
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Form>
    )
  }
}

export default FormFilter;
