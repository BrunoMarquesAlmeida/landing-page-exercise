function toggleMobileNav() {
  const currentNavDisplay = document.getElementById("header-nav").style.display;

  if (!currentNavDisplay || currentNavDisplay === "none") {
    document.getElementById("header-nav").style.display = "block";
  } else {
    document.getElementById("header-nav").style.display = "none";
  }
}

function onValueMouseOver(valueNumber) {
  const hoveredValue = `value${valueNumber}-img`;
  const currentImageFullSrc = document.getElementById(hoveredValue).src;
  const splitSrc = currentImageFullSrc.split("/");
  const currentImageFile = splitSrc[splitSrc.length - 1];

  const possibleIcons = [
    "save-money.png",
    "handshake.png",
    "flexible-screen.png",
  ];

  let newIcon = currentImageFile;

  while (newIcon === currentImageFile) {
    newIcon = possibleIcons[Math.floor(Math.random() * 3)];
  }

  document.getElementById(hoveredValue).src = `/assets/images/Icons/${newIcon}`;
}

const demoModal = document.getElementById("demo-modal");
const welcomeModal = document.getElementById("welcome-modal");

function openDemoModal() {
  setTimeout(() => {
    demoModal.style.display = "block";
  }, 3000);
}

function closeModals() {
  demoModal.style.display = "none";
  welcomeModal.style.display = "none";
}

function onPageLoad() {
  welcomeModal.style.display = "block";

  setTimeout(() => {
    welcomeModal.style.display = "none";
  }, 5000);
}
