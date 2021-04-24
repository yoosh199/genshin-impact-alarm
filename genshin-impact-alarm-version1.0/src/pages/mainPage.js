import React, {useState, useEffect} from "react";
import "./mainPage.css";

function MainPage() {
  const [resin, setResin]= useState(0);
 
  const handleSubmit = (event) => {
    event.preventDefault(); //submit 버튼 클릭시 전송하는것을 막음
  }

  const textChange = (event) =>{
    
    setResin(event.target.value);
     
  }

  const submitClick = ()=>{
    
  }
  return (
    <div>
      <h1>genshin-impact</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="현재 레진은 얼마입니까?" onChange={textChange}></input>
      <input type="submit" onClick={submitClick}></input>
      </form>
      <div>
        <h2>당신의 현재 레진</h2>
        <h3>{resin}</h3>
      </div>
    </div>
  );
}

export default MainPage;
