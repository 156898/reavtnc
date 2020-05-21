import React from 'react';
import { Form, Input, Button, message } from "antd";
import { connect } from 'react-redux'
import { LOGIN_Name } from '@/actions/login'
import { post } from '@/utils/request'
import './style.less';
export default @Form.create({
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        value: "",
      }),
    };
  },
})
@connect ( state => {
  return {}
},{
LOGIN_Name
})
class index extends React.Component {
  logindate = (e) => {
    e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            post(api.loginUrl, values).then((res) => {
              message.info(res.message);
              if (res.status === "200") {
                this.props.LOGIN_Name(res.data.user_name)
                this.props.history.push("/");
              }
            })
        }
    })
 }

  render() {
	  const { getFieldDecorator } = this.props.form;
    return (<div id='login' style={{ backgroundImage: `url(${bgimg})` }}>
		<Form onSubmit={this.logindate}>
		 <Form.Item>
		   {getFieldDecorator("username", {
			 rules: [
			   { required: true, message: "Please input your username!" },
			 ],
		   })(<Input placeholder="USERNAME" />)}
		 </Form.Item>
		 <Form.Item>
		   {getFieldDecorator("pwd", {
			 rules: [
			   { required: true, message: "Please input your Password!" },
			 ],
		   })(<Input type="password" placeholder="PASSWORD" />)}
		 </Form.Item>
		 <Form.Item>
		   Not registerï¼<a href="/reg">Sign Up</a>
		 </Form.Item>
		 <Form.Item>
		   <Button
			 type="primary"
			 htmlType="submit"
			 style={{ backgroundColor: "#67c9cb", border: "none" }}
		   >
			 Sign In
		   </Button>
		 </Form.Item>
		</Form>
    </div>
	)
  }
}