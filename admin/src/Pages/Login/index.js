import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import Api from '../../config/apiUrl'
import './style.css'


const Login = (props) => {
  const [loading, setLoading] = useState(false)

  const onFinish = values => {
    const { username, password } = values
    setLoading(true)
    axios.post(Api.checkLogin, {
      username,
      password
    }).then((res)=>{
      setLoading(false)
      const { data } = res
      console.log(res)
      if (data.success) {
        message.success('登录成功，正在跳转')
        props.history.push('/admin/')
      } else {
        message.error('用户名或密码错误，请重新输入！')
      }
    }).catch((err) => {
      setLoading(false)
      message.error('网络异常')
      return { err }
    })
    console.log('Success:', values)
  }

  return <div className="login">
    <Card title="欢迎登录博客后台管理系统">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            className="login-form-button"
            loading={loading}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </div>
}

export default withRouter(Login)