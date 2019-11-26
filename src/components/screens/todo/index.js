import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"

import FromFilter from "../../widgets/filter/filter";
import {deleteTodo} from '../../../actions/todo'

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      filterList: this.props.todoReducer.listTodo,
      currentPage: 1,
      perPage: 4,
      deleteID: null
    }
  }

  toggle = (e, index) => {
    console.log(index)
    this.setState(prevState => ({
      modal: !prevState.modal,
      deleteID: index
    }));
  }

  deleteButtonOnClick = (e) => {
    e.preventDefault();
    this.props.deleteTodo(this.state.deleteID);
    this.toggle()
  };

  handleClick = (e) => {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }

  handleOnChangeFormFilter = (dataFilter) => {
    let updatedList = this.props.todoReducer.listTodo;
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().search(dataFilter.name.toLowerCase()) !== -1
        && item.status.toLowerCase().search(dataFilter.status) !== -1
        && item.priority.toString().search(dataFilter.priority) !== -1
    });
    this.setState({filterList: updatedList});
  }

  render() {
    localStorage.setItem ('name', 'Bepatient');
    console.log(localStorage.getItem('name'));
    const {filterList} = this.state;
    const { currentPage, perPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const currentTodo = filterList.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filterList.length / perPage); i++) {
      pageNumbers.push(
        <Pagination.Item key={i} id={i} active={i === currentPage} onClick={this.handleClick}>
          {i}
        </Pagination.Item>,
      );
    }

    return (
      <div className={'container todo-lists'}>
        <Row>
          <Col>
            <Link to={'/todo-list/new'} className={'btn btn-secondary btn-new'}>New</Link>
            <FromFilter handleSearch={(dataFilter) => this.handleOnChangeFormFilter(dataFilter)}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <table>
              <thead>
              <tr>
                <th width={'100'}>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Priority</th>
                <th width={'200'}>Control</th>
              </tr>
              </thead>
              <tbody>
              {currentTodo.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.status}</td>
                    <td>{data.priority}</td>
                    <td>
                      <div className={'todo-actions'}>
                        <Link to={`/todo-list/${data.id}/edit`} className={'btn btn-primary btn-sm'}>Edit</Link>
                        <Button color={'danger'} className={'btn-sm'} id={data.id} onClick={e => this.toggle(e, data.id)}>Delete</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}
                               backdrop={this.state.backdrop}>
                          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                          <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={this.deleteButtonOnClick}>Do
                              Something</Button>{' '}
                            <Button color="secondary" onClick={e => this.toggle(e, data.id)} className={'secondary'}>Cancel</Button>
                          </ModalFooter>
                        </Modal>
                      </div>
                    </td>
                  </tr>
                )
              })}
              </tbody>
            </table>
            <div>
              <Pagination>{pageNumbers}</Pagination>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todoReducer: state.todo
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (index) => dispatch(deleteTodo(index)),
});

export default
connect(mapStateToProps, mapDispatchToProps)(Todo);
