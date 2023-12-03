import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import { getTodos, sendPost } from "./redux/actions";
import { Button, Input, Space } from "antd";

function App() {
  const [post, setPost] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getTodos({ id: "1" }));
  };

  const handleSendPost = () => {
    dispatch(sendPost({body: post}))
  }

  return (
    <div>
      <div style={{margin: '15px 0'}}>
        <Button onClick={handleClick}>Загрузить данные</Button>
      </div>
      <Space direction="vertical">
        <Input onChange={(e) => setPost(e.target.value)} />
        <Button onClick={handleSendPost}>Отправить</Button>
      </Space>
    </div>
  );
}

export default App;
