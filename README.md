# How to install

1. Install Tampermonkey for your browser. ([Instructions](https://tampermonkey.net/)).
2. [**Click this link**](https://github.com/renzhamin/codeforces-helper/raw/master/cf-helper.user.js) to install cf-helper userscript


# Easy submission
- Pressing 's' in problem statement page will take you to the submit page and the problem number will be automatically selected
- After the submit page gets focus,contents on the clipboard will be pasted and pressing 's' again will trigger a click on the submit button
- So you can submit from the problem page by pressing 's' 3 times,1st for getting to submit page,2nd is for getting the focus (or any other key) and the last for submitting
- The button doesnt has to be s it can be changed by using the `submitKey` variable


# Looking at others submission
- Pressing 'g' on the problem page will take you to the all submission page (status page)
- Pressing 'f' will do the same but with filtering to your friends solution
- These keys can be changed by `solutionPageKey` and `friendsolutionPageKey` variable


# Extra
- Press 'R' to go to contest standings page with friends=true to which the current problem belongs to
- Font is bigger on the problem page so its easier to read and can be adjusted using the `problemPageFontSize` variable
