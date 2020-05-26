import * as React from 'react'
import { Menu, Icon } from 'antd'
const { SubMenu } = Menu
import { httpServe } from '@/tool/httpServe'
import { router, api } from '@/config'

export interface IMenuComponentProps {}
import './fontawesome'
// const MyIcon = Icon.createFromIconfontCN({
//   scriptUrl: './fontawesome.js' // 在 iconfont.cn 上生成
// })
export default class MenuComponent extends React.Component<IMenuComponentProps, any> {
  constructor(props: IMenuComponentProps) {
    super(props)
    this.state = {
      findMenuData: [],
      menuData: []
    }
  }
  findMenu = async () => {
    const url: string = api.findMenuInfo
    const params = {
      params: JSON.stringify({
        isValid: true,
        systemCode: 'OA',
        companyId: 1,
        systemType: 'OA'
      })
    }
    const res: any = await httpServe.post(url, params)
    if (localStorage.findMenuData) {
      this.setState(
        {
          findMenuData: [...JSON.parse(localStorage.findMenuData)]
        },
        this.processMenu
      )
      return
    }
    if (res.status === 'S') {
      localStorage.findMenuData = JSON.stringify(res.data)
      this.setState(
        {
          findMenuData: [...res.data]
        },
        this.processMenu
      )
    }
  }
  toTree = (data: [], pid: string, id: string) => {
    // 删除 所有 children,以防止多次调用
    data.forEach((item: any) => {
      delete item.children
    })
    // 将数据存储为 以 id 为 KEY 的 map 索引数据列
    const map = {}
    data.forEach(function(item) {
      const itemId = item[id]
      map[itemId] = item
    })
    //        console.log(map);
    const val: any = []
    data.forEach(function(item) {
      // 以当前遍历项，的pid,去map对象中找到索引的id
      const itemPid: string = item[pid]
      const parent: any = map[itemPid]

      // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
      if (parent) {
        ;(parent.children || (parent.children = [])).push(item)
      } else {
        //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
        val.push(item)
      }
    })
    return val
  }
  processMenu = (): any => {
    const menData = this.toTree(this.state.findMenuData, 'menuParentId', 'menuId')
    this.setState({
      menuData: [...menData]
    })
  }
  showMenu = (attrData: any[]) => {
    return attrData.map((item: any, index: any) => (
      <SubMenu
        key={item.menuId}
        title={
          <span>
            <Icon viewBox="0 0 1024 1024">
              <i className={item.imageLink}></i>
            </Icon>
            {/* <Icon type="team" component={() => <i className={item.imageLink}></i>} /> */}
            {/* <MyIcon type={item.imageLink} /> */}
            <span>{item.menuName}</span>
          </span>
        }
      >
        {item.children &&
          item.children.length &&
          item.children.map((subItem: any, subIndex: any) =>
            subItem.children ? (
              this.showMenu([subItem])
            ) : (
              <Menu.Item key={subItem.menuId}>
                <span>{subItem.menuName}</span>
              </Menu.Item>
            )
          )}
      </SubMenu>
    ))
  }

  componentDidMount() {
    this.findMenu()
  }
  public render() {
    return (
      <Menu style={{ width: '100%' }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark">
        {this.state.menuData.length && this.showMenu(this.state.menuData)}
      </Menu>
    )
  }
}
