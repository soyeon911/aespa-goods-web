import React, { Component } from "react";
import './main.css';	

class App extends Component {
  render() {
    return <div id="Soyeon Protfolio"></div>;
  }
  componentDidMount() { 
    const FixRatio = () => {
      const root = document.querySelector("#root");
      const app = document.querySelector("#App");
		
      // 가로를 화면에 딱 맞게
      let width = root.clientWidth;
      let height = width * 0.5625;	// 1080 ÷ 1920 ≒ 0.5625

      if (height > root.clientHeight) { // 설정된 세로 값이 화면보다 크다면
        // 세로를 화면에 딱 맞게
        height = root.clientHeight;
        width = height * 1.7777;	// 1920 ÷ 1080 ≒ 1.7777
      }
	
      // 설정한 값을 적용
      app.style.width = `${width}px`;
      app.style.height = `${height}px`;
    };

    window.onresize = FixRatio; // 화면의 사이즈가 변할 때마다 호출
    FixRatio(); // 맨 처음 실행 될 때도 호출
  }
}

export default App;
