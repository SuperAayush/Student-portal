fetch("https://abaran803.github.io/Student-portal/nav.txt")
  .then((data) => data.text())
  .then((data) => {
    console.log(data);
    document.getElementById("navbar").innerHTML = data;
    const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
    const navLinks = document.getElementsByClassName("nav-links")[0];

    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("display");
    });
  });
