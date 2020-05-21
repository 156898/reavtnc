import React from 'react'
import { Layout, Menu, Icon, Input } from 'antd'
import { NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import Router from '@/router/content'
import { talbeDate } from '@/actions/table'
import './style.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
export default @connect ( state => {
  return {
    data:state.login.data
  }
},{
  talbeDate
})
class index extends React.Component {
  render() {
    const { data } = this.props
    return <div className='home'>
        <Layout>
          <Header className="header">
          <div className="logo" >
            <div className='sear'>
              <Search
                placeholder="search"
                onSearch={value => this.props.talbeDate(value)}
                style={{ width: 200 ,height:30 }}
              />
              <div className="user">
              {data.user_name}
              </div>
            </div>
            </div>
          </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                 Dahboard ( 2 neww updates )
                <Icon type="user" className='icon'/>
               
              </span>
            }
          >
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                 Basic UI Elments
                <Icon type="laptop"  className='icon'/>
              </span>
            }
          >
              </SubMenu>
              <SubMenu
            key="sub3"
            title={
              <span>
                 Icons
                <Icon type="laptop"  className='icon'/>
              </span>
            }
          >
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <NavLink to="/from" activeClassName="check">
              <span>
                Form ELements
                <Icon type="laptop"  className='icon'/>
              </span>
              </NavLink>
            }
          >
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <NavLink to="/echart" activeClassName="check">
              <span>
                Charts
              <Icon type="notification"  className='icon'/>
              </span>
           </NavLink>
            }
          >
              </SubMenu>
              <SubMenu
            key="sub6"
            title={
              <NavLink to="/table" activeClassName="check">
              <span>
                 Table
                <Icon type="notification"  className='icon'/>
              </span>
              </NavLink>
            }
          >
              </SubMenu>
              <SubMenu
            key="sub7"
            title={
              <NavLink to="/sample" activeClassName="check">
              <span>
                 Sample Pages
                <Icon type="notification"  className='icon'/>
              </span>
              </NavLink>
            }
          >
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '24px' }}>
       
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
        <Router />
        </Content>
      </Layout>
    </Layout>
  </Layout>,
    </div>;
  }
}
