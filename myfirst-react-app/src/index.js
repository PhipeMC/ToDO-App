import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './miscss.css'
import { Form, Button, Input, Label, List } from 'reactstrap';


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className='container'>
        <h3>Tareas pendientes</h3>
        <TodoList items={this.state.items} />
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="new-todo">
            ¿Qué se necesita hacer?
          </Label>
          <Input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <Button color='primary' style={ButtonStyle}>
            Añadir #{this.state.items.length + 1}
          </Button>
        </Form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <List>
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </List>
    );
  }
}

const ButtonStyle = {
  margin: '1em 0 0'
};

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);