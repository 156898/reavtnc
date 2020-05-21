import React, { Component } from 'react'
import { Table, Divider, Button, Progress  } from 'antd';
import { connect } from 'react-redux'
import { talbeDate } from '@/actions/table'
import { FROMMS } from '@/actions/froms'
import './style.less'

export default @connect ( state => {
  return {
    data:state.table.data
  }
},{
  talbeDate,
  FROMMS,
})
class index extends Component {
  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      key: 'age',
      render: (text, record) => (
        <Progress showInfo={false} percent={parseInt(record.age)} />
      ),
    },
    {
      title: 'price',
      key: 'msg',
      render: (text, record) => (
        <span>
         ${record.msg}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a onClick={() =>{ 
            this.props.FROMMS(text)
            this.props.history.push("/form")
           
          }}
          >Edit</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ]
componentDidMount () {
  this.props.talbeDate('')
}
 render() {
    const { data } = this.props
    return (
      <div className="table">
      <Button type="primary" onClick = {() =>this.props.history.push("/form")}>添加</Button>
      <Table style={{marginTop:30}} rowKey={ v => v.id} columns={this.columns} dataSource={data} />
      </div>
    )
  }
}
