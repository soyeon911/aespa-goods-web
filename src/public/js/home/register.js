"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const id = document.querySelector("input[name='id']");
    const name = document.querySelector("input[name='name']");
    const psword = document.querySelector("input[name='psword']");
    const confirmPsword = document.querySelector("input[name='confirm-psword']");
    const registerBtn = document.querySelector(".submit-btn");

    if (registerBtn) {
        registerBtn.addEventListener("click", register);
    }

    function register(event) {
        event.preventDefault();

        if (!id || !name || !psword || !confirmPsword) {
            console.error("필수 입력 필드를 찾을 수 없습니다.");
            return;
        }

        if (!id.value) {
            alert("아이디를 입력해주십시오.");
            return;
        }

        if (!name.value) {
            alert("이름을 입력해주십시오.");
            return;
        }

        if (!psword.value) {
            alert("비밀번호를 입력해주십시오.");
            return;
        }

        if (psword.value !== confirmPsword.value) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        const req = {
            id: id.value,
            name: name.value,
            psword: psword.value,
        };

        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/login";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("회원가입 중 에러 발생", err);
        });
    }
});
