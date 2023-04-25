# How to install

1. Install Tampermonkey for your browser. ([Instructions](https://tampermonkey.net/))
2. [**Click this link**](https://github.com/renzhamin/codeforces-helper/raw/main/main.user.js) to install this userscript

# Easy submission

-   Pressing 's' in problem statement page will take you to the submit page and the problem number will be automatically selected
-   Pressing 's' again will copy the content from your clipboard to the source code area and automatically click the submit button.
-   Sometimes you may need to press 's' twice, first to focus the page then submit
-   The button doesn't has to be 's' it can be changed by using the `submitKey` variable

## Demo

https://user-images.githubusercontent.com/57265942/234389845-1e2643c4-577a-416c-b8d3-5c61633520f2.mp4

# Looking at others submission

-   Pressing 'g' on the problem page will take you to the all submission page (status page)
-   Pressing 'f' will do the same but with filtering to your friends solution
-   These keys can be changed by `solutionPageKey` and `friendsolutionPageKey` variable

# Extra

-   Press 'R' to go to contest standings page with friends=true to which the current problem belongs to
-   Font is bigger on the problem page so its easier to read and can be adjusted using the `problemPageFontSize` variable
