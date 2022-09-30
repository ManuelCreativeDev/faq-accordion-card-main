"use stric";

//Selecting elements
const paragraph = [
  '"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."',
  '"No more than 2GB. All files in your account must fit your allotted storage space."',
  '"Click “Forgot password” from the login page or Change password” from your profile page. A reset link will be emailed to you."',
  '"Yes! Send us a message and we’ll process your request no questions asked."',
  '"Chat and email support is available 24/7. Phone lines are open during normal business hours."',
];
const arrow = document.querySelectorAll(".arrow");
const details = document.querySelector(".details");
const summ1 = document.querySelector(".summary");
const summ = document.querySelectorAll(".summary");

arrow.forEach((ele) => {
  fillParagraph();
  ele.addEventListener("click", function () {
    if (ele.classList.contains("arrow")) {
      ele.classList.remove("arrow");
      ele.classList.add("arrowUp");
    } else {
      ele.classList.remove("arrowUp");
      ele.classList.add("arrow");
    }
  });
});

function fillParagraph() {
  for (let i = 0; i < paragraph.length; i++) {
    let p0 = document.getElementById("p" + i);
    let p1 = document.getElementById("p" + i);
    let p2 = document.getElementById("p" + i);
    let p3 = document.getElementById("p" + i);
    let p4 = document.getElementById("p" + i);
    p0.textContent = paragraph[i];
    p1.textContent = paragraph[i];
    p2.textContent = paragraph[i];
    p3.textContent = paragraph[i];
    p4.textContent = paragraph[i];
  }
}

//window.onload = fillParagraph();
