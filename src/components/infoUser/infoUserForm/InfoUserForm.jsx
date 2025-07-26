import { handleUpdateInfoUser } from "@/utils/handle";
import { Avatar, Button, Form, Input, Typography } from "antd";
import React, { useState } from "react";

const { Title } = Typography;

function InfoUserForm() {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);

  const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN") || "null");

  const onFinish = async (values) => {
    try {
      await handleUpdateInfoUser(values);
      setIsEditing(false);
    } catch (error) {}
  };

  return (
    <div className="flex justify-center text-center pt-[150px]">
      <div className="w-full max-w-[280px] md:max-w-[600px] p-[24px] rounded-[30px] shadow-custom-card info_card">
        <Avatar
          src={
            userLogin.avatar ||
            "https://tse4.mm.bing.net/th/id/OIP.kQyrx9VbuWXWxCVxoreXOgHaHN?pid=Api&P=0&h=180"
          }
          className="mb-[16px] w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
        />
        <Title level={4} className="text_info">
          {userLogin.fullName}
        </Title>

        <div className="text-end">
          {!isEditing && (
            <Button
              className="custom-button max-w-[80px] md:max-w-[100px]"
              onClick={() => setIsEditing(true)}
            >
              Edit info
            </Button>
          )}
        </div>

        {/* Form thông tin */}
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            fullName: userLogin.fullName,
            email: userLogin.email,
          }}
        >
          <Form.Item label="Full Name" name="fullName">
            <Input className="custom-input" disabled={!isEditing} />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input className="custom-input" disabled={!isEditing} />
          </Form.Item>

          {isEditing && (
            <div className="text-end">
              <Button htmlType="submit" className="custom-button max-w-[100px]">
                Submit
              </Button>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default InfoUserForm;
