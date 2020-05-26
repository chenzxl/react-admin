import * as React from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { Input, Form, Checkbox, Button, Icon } from 'antd'
import * as Md5 from 'js-md5'
//工具类
import { reduxConfg } from '@/redux'

import { httpServe } from '@/tool/httpServe'
import { api } from './config/index'

// type thisProps = Loadable.LoadingComponentProps

interface IState {}
const FormItem: any = Form.Item
class Login extends React.Component<any, IState> {
  _shouldComponentUpdate() {
    return false
  }
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        const param = {
          params: JSON.stringify({
            userName: values.userName,
            pwd: Md5('' + values.password + 'lo0.1l@g9v#')
          })
        }
        httpServe
          .post(api.login, param)
          .then((res: any) => {
            if (res.status === 'S') {
              this.props.setUserInfo(res.data)
              this.props.history.push('/main')
            }
          })
          .then(e => {
            console.log(e)
          })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="logBOX h100p">
        {/* <div style={{'widht':'100%','height':'100px','background':'red'}}>
                    <img src='./images/au1/back.jpg' alt="" style={{'widht':'100%','height':'100px'}} />
                </div> */}
        <div className="login-contain">
          <Form className="login-form" onSubmit={this.handleSubmit}>
            <div className="p15">
              <div>
                <h3>请登录</h3>
              </div>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入帐号!' }]
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入帐号" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="请输入密码"
                  />
                )}
              </FormItem>
              <FormItem>
                <Checkbox>
                  <strong>
                    自动登录,<span className="red">公共场所慎用</span>
                  </strong>
                </Checkbox>
                <Button type="primary" htmlType="submit" className="login-form-button w100p">
                  登入
                </Button>
              </FormItem>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  isIntercept: state.isIntercept,
  clientHeightState: state.clientHeight
})
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    setClientHeight: (res: any) => {
      reduxConfg.actions.setClientHeight(res, dispatch)
    },
    setUserInfo: (res: any) => {
      reduxConfg.actions.setUserInfo(res, dispatch)
    },
    setUserRespListL: (res: any) => {
      reduxConfg.actions.setUserRespListL(res, dispatch)
      // dispatch(reduxConfg.actions.setUserInfo(res, dispatch))
    }
  }
}
// function matchDispatchToProps(dispatch: any) {
//   //setpropsState
//   return bindActionCreators(
//     { setClientHeight: allAction.setClientHeight, setIntercept: allAction.setIsIntercept },
//     dispatch
//   )
// }
const WrappedNormalLoginForm: any = Form.create({ name: 'normal_login' })(Login)
export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)
// export default Login
