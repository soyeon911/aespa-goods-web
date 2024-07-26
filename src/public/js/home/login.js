"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const id = document.querySelector("input[name='id']");
    const psword = document.querySelector("input[name='password']");
    const loginBtn = document.querySelector(".submit-btn");

    if (loginBtn) {
        loginBtn.addEventListener("click", login);
    }

    function login(event) {
        event.preventDefault();

        if (!id || !psword) {
            console.error("아이디 또는 비밀번호 입력 필드를 찾을 수 없습니다.");
            return;
        }

        if (!id.value) {
            alert("아이디를 입력해주십시오.");
            return;
        }

        if (!psword.value) {
            alert("비밀번호를 입력해주십시오.");
            return;
        }

        const req = {
            id: id.value,
            psword: psword.value,
        };

        console.log("보내는 데이터:", req);

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생", err);
        });
    }
});
