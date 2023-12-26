// Your code here 
//moveDodgerLeft
let dodger=document.getElementById('dodger')
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
dodger.addEventListener('click', moveDodgerLeft)
//moveDodgerRight()
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left  +1}px`;
    }
  }
  dodger.addEventListener('mouseover', moveDodgerRight)
