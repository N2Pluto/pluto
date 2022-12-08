import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Col, Divider, Input, Row, Space, Typography } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");

  const [show, setShow] = useState("fullname");

  const increase = () => {
    setCount(count + 1);
  };

  function decrease() {
    setCount(count - 1);
  }

  function decrease10() {
    setCount(count - 10);
  }

  const linkYoutube = () => {
    window.open("https://www.youtube.com/");
  };

  const increaseNumber = (value) => {
    setCount(count + value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  const clearFullName = () => {
    setName("");
    setSurname("");
  };

  const clearNickName = () => {
    setNickname("");
  };

  const onBlur = () => {
    setCount(count + 1);
  };

  console.log("X:", "1" == 1); // true
  console.log("Y:", "1" === 1); // false

  // False
  // undefined
  // 0
  // ""
  // ''
  // null

  return (
    <div className="container center">
      <div>
        <div>Count: {count}</div>
        <div>Count x 10: {count * 10}</div>
        {/* AND AND */}
        {show === "fullname" && (
          <div style={{ color: "yellowgreen" }}>
            Full Name {name} {surname}
          </div>
        )}
        {show === "nickname" && (
          <div style={{ color: "green" }}>Nickname {nickname}</div>
        )}
        <div style={{ color: "green" }}>Address {address}</div>
        <div style={{ color: "red" }}>Age {age}</div>
      </div>
      <div className="column">
        <Button onClick={() => increase()}>Increase</Button>
        <Button onClick={decrease}>Decrease</Button>
        <Button onClick={decrease10}>Decrease*10</Button>
        <Button onClick={linkYoutube}>Link Youtube</Button>
        <Button onClick={() => increaseNumber(10)}>Increase 10</Button>
        <Button onClick={() => increaseNumber(20)}>Increase 20</Button>
        <input
          value={name}
          onChange={onChangeName}
          type="text"
          placeholder="Name"
          onBlur={onBlur}
        />
        <input
          value={surname}
          onChange={onChangeSurname}
          type="text"
          placeholder="Surname"
        />
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          type="text"
          placeholder="Nicknames"
        />
        <input
          value={nickname}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Address"
          
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="text"
          placeholder="Age"
          
        />

        <Button onClick={clearFullName}>clearFullName</Button>
        <Button onClick={clearNickName}>clearNickName</Button>
        <Button onClick={() => setShow("fullname")}>Show Full Name</Button>
        <Button onClick={() => setShow("nickname")}>Show Nickname</Button>
      </div>
    </div>
  );
}

export default App;
