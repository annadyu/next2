"use client";

import { Alert, Flex, Spin } from "antd";

const Loading = () => {
  const contentStyle = {
    padding: 50,
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: 4,
  };
  const content = <div style={contentStyle} />;
  return (
    <Flex
      vertical
      justify="center"
      align="center"
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Spin size="large" tip="Loading...">
        <Alert title="" description="" type="info" />
      </Spin>
    </Flex>
  );
};

export default Loading;
