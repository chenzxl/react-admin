import * as React from 'react'
import { Layout, Menu, Icon, Avatar, Tabs } from 'antd'
const { TabPane } = Tabs
// import { UserOutlined } from '@ant-design/icons'
const { Header, Sider, Content } = Layout
import KeepAlive, { AliveScope } from 'react-activation'
import { routeCofigs, FilterRouter } from '@/routers'

import { ContentComponents, MenuComponent } from '@/components'
import { NavLink } from 'react-router-dom'

import PrivteRoute from '@/routers/privteRoute'

const { SubMenu } = Menu

export interface HomeProps {}
interface IState {
  collapsed?: boolean
  activeKey?: string
}
export default class Home extends React.Component<any, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      collapsed: false,
      activeKey: '0'
    }
  }
  dirConsole = (data: any) => {
    console.log(data)
  }
  onChange = (activeKey: string): void => {
    this.setState({ activeKey })
  }

  // onEdit = (targetKey, action) => {
  //   this[action](targetKey)
  // }

  // add = () => {
  //   const { panes } = this.state
  //   const activeKey = `newTab${this.newTabIndex++}`
  //   panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey })
  //   this.setState({ panes, activeKey })
  // }

  // remove = (targetKey: any) => {
  //   let { activeKey: any } = this.state
  //   let lastIndex
  //   this.state.panes.forEach((pane, i) => {
  //     if (pane.key === targetKey) {
  //       lastIndex = i - 1
  //     }
  //   })
  //   const panes = this.state.panes.filter(pane => pane.key !== targetKey)
  //   if (panes.length && activeKey === targetKey) {
  //     if (lastIndex >= 0) {
  //       activeKey = panes[lastIndex].key
  //     } else {
  //       activeKey = panes[0].key
  //     }
  //   }
  //   this.setState({ panes, activeKey })
  // }
  callback = (key: any) => {
    console.log(key)
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible={true} collapsed={this.state.collapsed} style={{ background: '#fff' }}>
          {/* <div className="logo" /> */}
          <MenuComponent />
          {/* <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu> */}
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
            {/* <Tabs hideAdd={true} onChange={this.onChange} type="editable-card"></Tabs> */}
            {/* <Avatar
              size={32}
              icon={() => (
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              )}
            /> */}
            <Tabs defaultActiveKey="1" onChange={this.callback}>
              <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
            ,
          </Header>
          {/* <div>this is hearder</div> */}
          <Content
            style={{
              margin: '16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            <ContentComponents>{/* <FilterRouter path="/main" /> */}</ContentComponents>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
