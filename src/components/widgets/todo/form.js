import React, {Component} from 'react'
import {Button, Form, FormGroup, Label, Input, Col, Row} from 'reactstrap'
import {Link, withRouter} from 'react-router-dom'

import { connect } from "react-redux"
import {createTodo, editTodo} from '../../../actions/todo'

class Forms extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      status: '',
      priority: '',
      redirect: false
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, status, priority} = this.state;
    const id = this.props.match.params.id;
    let todo = {
      id: id,
      name: name,
      status: status,
      priority: priority
    };
    if(id){
      this.props.editTodo(todo);
    }else {
      this.props.createTodo(todo);
    }
    this.props.history.push('/todo-list');
  };
  render() {
    return (
      <Row>
        <Col md={{size: 6, offset: 3}}>
          <Form onSubmit={ (e) => this.handleSubmit(e)}>
            <h2 className={'text-center'}>new</h2>
            <FormGroup>
              <Label for="name">Name: </Label>
              <Input type="text" name="name" id="name" placeholder="complete your name" onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup tag="fieldset">
              <Label className={'radio-area'}>Status:</Label>
              <FormGroup check className={'radio-area'}>
                <Label check>
                  <Input type="radio" name="status" onChange={this.handleChange} value={'positive'} />{' '}
                  positive
                </Label>
              </FormGroup>
              <FormGroup check className={'radio-area'}>
                <Label check>
                  <Input type="radio" name="status" onChange={this.handleChange} value={'negative'} />{' '}
                  negative
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <Label for="priority">Priority: </Label>
              <Input type="select" name="priority" id="priority" onChange={this.handleChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <div className="text-center">
              <Link to='/todo-list' className='btn btn-secondary btn-sm mr-2'>Cancel</Link>
              <Button color='primary' className='btn-sm'>Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  editTodo: (todo) => dispatch(editTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Forms));