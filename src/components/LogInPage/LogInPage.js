import React from "react";
import { useNavigate } from "react-router-dom";
import "./LogInPage.css";
export default function LogInPage() {
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    let user = {
      userName: e.target.uname.value,
      password: e.target.upass.value,
    };

    let url = "http://localhost:3200/login";
    let options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    };

    let response = await fetch(url, options);
    let responseData = await response.json();
    console.log(responseData);

    if (responseData.flag) {
      navigate("../myhome");
    } else {
      alert(responseData.msg);
    }
  }

  return (
    <div>
      <div className="form">
        <h1>Log In Page</h1>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="email">Email:</label> */}
          <br />
          <input type="email" name="uname" placeholder="Enter your email" />
          <br />
          {/* <label htmlFor="password">Password:</label> */}
          <br />
          <input
            type="password"
            name="upass"
            placeholder="Enter your password"
          />
          <br />
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
