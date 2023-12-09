let input = document.querySelector(".get-repo input"),
  btn = document.querySelector(".get-repo .get-btn"),
  showData = document.querySelector(".show-data");

btn.addEventListener("click", () => {
  getRepos();
});

function getRepos() {
  if (input.value == "") {
    showData.innerHTML = "<span>Please Write Valid Username.</span>";
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((res) => res.json())
      .then((val) => {
        showData.innerHTML = "";
        console.log(val.length);
        val.forEach((v) => {
          let s = document.createElement("div");
          s.textContent = v.name;
          let link = document.createElement("a");
          link.href = v.html_url
          link.textContent = "Visit"
          link.target = "_blank"
          s.appendChild(link)
          showData.appendChild(s);
        });
      });
  }
}
