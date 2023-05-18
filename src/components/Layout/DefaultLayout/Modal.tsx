import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

function Modal() {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return ( <div className="absolute top-0 left-0 w-full h-full">
        <Form
            name="normal_login"
            className="absolute login-form left-1/2 transform -translate-x-1/2 top-1/2 transform -translate-y-1/2 p-10"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{backgroundColor:"#fff" ,zIndex:"11"}}
        >
            <Form.Item
                name="Tài khoản"
                rules={[{ required: true, message: 'Không được để trống trường này !' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Không được để trống trường này !' }]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>

        <div className="absolute top-0 left-0 w-full h-full z-10" style={{background:"#333",opacity:"0.5"}}></div>
        
    </div> );
}

export default Modal;