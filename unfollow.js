function unfollow() {
  const UNFOLLOW_INITIAL_SELECTOR = "css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1vsu8ta r-aj3cln r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr"

  const UNFOLLOW_CONFIRMATION_SELECTOR = "css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-16y2uox r-1w2pmg r-1vuscfd r-1dhvaqw r-1ny4l3l r-1fneopy r-o7ynqc r-6416eg r-lrvibr"

  setInterval(() => {
    window.scrollTo(0, document.body.scrollHeight);
    let buttons = document.getElementsByClassName(UNFOLLOW_INITIAL_SELECTOR);
    let unfollowButtons = []
    Array.from(buttons).forEach(b => b.innerText === "Following" && unfollowButtons.push(b));
    if (Array.from(unfollowButtons).length > 0) {
      unfollowButtons.forEach(b => {
        b.click();
        setTimeout(() => {
          const confirmationButtons = document.getElementsByClassName(UNFOLLOW_CONFIRMATION_SELECTOR);
          if (confirmationButtons.length > 0) {
            confirmationButtons[0].click();
          }
        }, 1000)
      })
    }
  })
}

while (true) { window.scrollTo(0, document.body.scrollHeight); }