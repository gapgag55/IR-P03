import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import "typeface-roboto";
// import 'antd/dist/antd.css';
import './App.css';

const FormItem = Form.Item;

class App extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="container flex-column">
        <div className="bg"></div>
        <h1 className="headline">PANTIP LISTENING</h1>
        <Form onSubmit={this.handleSubmit} className="search-form">
          <FormItem>
            {getFieldDecorator('keyword')(
              <Input suffix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Keyword" size="large" />
            )}
          </FormItem>
          <FormItem>
            <div className="flex-between">
              <Button type="primary" htmlType="submit" size="large" className="search-button">
                Search Sentiment
              </Button>
              <Button type="primary" htmlType="submit" size="large" className="search-button">
                Search Question
              </Button>
            </div>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(App);
