function toggleMobileNav() {
  let currentNavDisplay = document.getElementById("header-nav").style.display;

  if (!currentNavDisplay || currentNavDisplay === "none") {
    document.getElementById("header-nav").style.display = "block";
  } else {
    document.getElementById("header-nav").style.display = "none";
  }

  console.log(currentNavDisplay);
}
