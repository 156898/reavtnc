import React from 'react';
import { Pagination } from 'antd';
import { post } from '@/utils/request'
import api from '@/servicer/api'
import { connect } from "react-redux";
import { message } from "antd";
import './style.less'
export default @connect((state) => {
  return {
    user: state.auth.user,
  };
})
class index extends React.Component {
 state = {
   data: [],
   count: 1,
 }
  constructor(props) {
      super(props)
      if (!this.props.user) {
        message.info("请先登录")
        this.props.history.push("/login")
      }
    }
    Changes = (current) => {
      let obj = { page: current };
      post(api.pageUrl, obj).then((res) => {
        this.setState({
          data: res.result.list,
          count: current,
        })
      })
    }
    componentDidMount() {
      let obj = { page: this.state.count };
      post(api.pageUrl, obj).then((res) => {
        this.setState({
          data: res.result.list,
        })
      })
    }
  render() {
     const { data } = this.state;
    return (
      <div className="sample">
        {data.map((v) => {
          return (
            <div key={v.id} className="content">
              <p>{v.title}</p>
            </div>
          );
        })}
        <Pagination
          defaultCurrent={this.state.count}
          total={500}
          onChange={this.Changes}
        />
      </div>
    )
  }
}