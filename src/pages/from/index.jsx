import React from 'react'
import { Form, Input, Button ,message} from 'antd'
import { connect } from 'react-redux'
import { post } from '@/utils/request'
import { FROMMS } from '@/actions/froms'
import api from '@/servicer/api'
import './style.less'
export default @connect ( state => {
  return {
    data:state.froms.data
  }
},{
  FROMMS
})
@Form.create({
  mapPropsToFields(props) {
    const { data } =props
    return Object.entries(data).reduce((v,[key,value]) => {
      v0[key]=Form.createFormField({value})
      return v
    },{})
  },
})
class index extends React.Component {
  state = {
      formLayout: 'vertical',
    };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(values.age>=0&&values.age<=100){
          post(`/apa${api.add}`, values).then(res => {
          if(parseInt(res.status)===200){
            message.info('添加成功')
            this.props.history.push('/table')
            this.props.FROMMS({})
          }
        })
        }else{
          message.info('添加失败,年龄小于100')
        }
      }
    });
}
handleReset = () => {
  this.props.FROMMS({})
};
  render() {
    const { getFieldDecorator } = this.props.form;
  const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'vertical'
        ? {
            labelCol: { span: 14 },
            wrapperCol: { span: 14 },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'vertical'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : null;
    return(
	<div id='form'>
	  <h3>Basic Form</h3>
      <h5>Basic form elements</h5>
      <div>
        <Form layout={formLayout} onSubmit={this.handleSubmit} className="login-form" >
         
          <Form.Item label="Name" {...formItemLayout}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!' }],
            })(
              <Input placeholder="Name" />)}
          </Form.Item>
          <Form.Item label="Age" {...formItemLayout}>
            {getFieldDecorator('age', {
              rules: [{ required: true, message: 'Please input your age!' }],
            })(
              <Input placeholder="age" type="Number"/>)}
          </Form.Item>
          <Form.Item label="Price" {...formItemLayout}>
            {getFieldDecorator('msg', {
              rules: [{ required: true, message: 'Please input your msg!' }],
            })(
              <Input placeholder="price" />)}
          </Form.Item>
          <Form.Item label="Gender" {...formItemLayout}>
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please input your gender!' }],
            })(
              <Input placeholder="Hospital" />)}
          </Form.Item>
          <Form.Item label="File upload Image" {...formItemLayout}>
            {getFieldDecorator('hospital', {
                rules: [{ required: true, message: 'Please input your hospital!' }],
              })(
                <Input placeholder="hospital" />)}
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit"  className="login-form-button">Submit</Button>
            <Button type="" onClick={this.handleReset}>Cancel</Button>
          </Form.Item>
        </Form>
      </div>
    </div>)
  }
}