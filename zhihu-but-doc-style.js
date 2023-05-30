// ==UserScript==
// @name         zhihu-but-doc-style
// @version      0.1
// @description  把知乎变为文档风格
// @author       SheepJ0z
// @match        https://www.zhihu.com/*
// @grant        none
// @require      https://scriptcat.org/lib/513/1.2.1/ElementGetter.js
// ==/UserScript==

(function () {
    'use strict'; ``
    var block, i, len;

    block = document.getElementsByClassName("QuestionHeader-title")[0];
    if (block != null) {
        block.style.display = "none";
    }

    block = document.getElementsByClassName("HitQrcode")[0];
    if (block != null) {
        block.style.display = "none";
    }

    block = document.getElementsByClassName("Avatar");
    for (i = 0, len = block.length; i < len; i++) {
        block[i].style.display = "none";
    }

    block = document.getElementsByClassName("Sticky ColumnPageHeader")[0];
    if (block != null) {
        block.style.display = "none";
    }

    block = document.getElementsByClassName("Sticky AppHeader")[0];
    if (block != null) {
        block.style.display = "none";
    }

    block = document.getElementsByClassName("Card Topstory-noMarginCard Topstory-tabCard")[0];
    if (block != null) {
        block.style.display = "none";
    }

    block = document.getElementsByClassName("css-1oy4rvw")[0];
    if (block != null) {
        block.style.display = "none";
    }

    block = document.getElementsByClassName("css-1oy4rvw")[0];
    if (block != null) {
        block.style.display = "none";
    }

    block = document.getElementsByTagName("img");
    for (i = 0, len = block.length; i < len; i++) {
        block[i].style.display = "none";
    }

    block = document.querySelector("link[rel='shortcut icon']");
    if (block != null) {
        block.href = 'https://img1.imgtp.com/2023/05/05/xllc7NKZ.png';
    }

    block = document.getElementsByClassName("ContentItem-title");
    for (i = 0, len = block.length; i < len; i++) {
        block[i].style.color = "#141414";
    }


    const eg1 = new ElementGetter();
    eg1.each('.RichContent.is-collapsed', document, imgs => {
        const i = imgs.querySelector('img');
        if (i != null) {
            i.style.display = "none";
        }
    });

    const eg2 = new ElementGetter();
    eg2.each('.Comments-container.css-plbgu', document, avatar => {
        let a = avatar.querySelectorAll(".css-1jll2aj");
        console.log(a)
        let l = a.length
        for (let i = 0; i < l; i++) {
            a[i].style.display = "none";
        }
    });
})();
