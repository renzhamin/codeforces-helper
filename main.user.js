// ==UserScript==
// @name         codeforces-helper
// @author       renzhamin
// @version      0.01
// @description  Reduce codeforces navigation time
// @match        https://codeforces.com/*
// @match        http://codeforces.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-start
// ==/UserScript==

let problemPageFontSize = "1.8em"
let submitKey = "s"
let solutionPageKey = "g"
let friendsolutionPageKey = "f"
let contestRankingPage = "R"

let arr = location.pathname.replace("problemset/problem", "contest").split("/"),
    n = arr.length

;(function () {
    window.addEventListener("load", function () {
        if (arr[n - 1] == "submit") {
            submitPage()
        } else {
            problemStatementPage()
        }
    })
})()

function submitPage() {
    // select problem from saved value
    document.querySelector('select[name="submittedProblemIndex"]').value =
        GM_getValue("pid", "A")
    window.scroll(0, 172)

    document.addEventListener("keydown", function (event) {
        // copy clipboard content to source code area and click submit button
        if (event.key === submitKey) {
            navigator.clipboard.readText().then((clipText) => {
                document.getElementById("sourceCodeTextarea").value = clipText
                document.querySelector('input[value="Submit"]').click()
            })
        }
    })
}

function problemStatementPage() {
    document.querySelector(".problem-statement").style.fontSize =
        problemPageFontSize
    let url = `/${arr[1]}/${arr[2]}`
    GM_setValue("pid", arr[n - 1])
    window.scroll(0, 172)
    document.addEventListener("keydown", function (event) {
        if (event.key === submitKey) {
            window.open(`${url}/submit`)
        } else if (event.key === solutionPageKey) {
            window.open(`${url}/status/${arr[n - 1]}`)
        } else if (event.key === friendsolutionPageKey) {
            window.open(`${url}/status/${arr[n - 1]}/?friends=on`)
        } else if (event.key === contestRankingPage) {
            window.open(`${url}/standings/friends/true`)
        }
    })
}
