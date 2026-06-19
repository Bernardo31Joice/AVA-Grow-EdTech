let selectedProfile = null;

const profileButtons = document.querySelectorAll(".profile-btn");
const goLoginButton = document.getElementById("go-login");
const loginButton = document.getElementById("login-btn");

function showScreen(screenId) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  const selectedScreen = document.getElementById(screenId);

  if (selectedScreen) {
    selectedScreen.classList.add("active");
    window.scrollTo(0, 0);
  }
}

profileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    profileButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    selectedProfile = button.dataset.profile;
  });
});

goLoginButton.addEventListener("click", () => {
  if (!selectedProfile) {
    alert("Selecione uma opção: Professor, Aluno ou Voluntário.");
    return;
  }

  showScreen("screen-login");
});

loginButton.addEventListener("click", () => {
  if (selectedProfile === "professor") {
    showScreen("screen-professor");
  } else if (selectedProfile === "aluno") {
    showScreen("screen-aluno");
  } else if (selectedProfile === "voluntario") {
    showScreen("screen-voluntario");
  } else {
    showScreen("screen-profile");
  }
});

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const parentScreen = tab.closest(".screen");

    const screenTabs = parentScreen.querySelectorAll(".tab");
    const screenContents = parentScreen.querySelectorAll(".tab-content");

    screenTabs.forEach((item) => {
      item.classList.remove("active");
    });

    screenContents.forEach((content) => {
      content.classList.remove("active");
    });

    tab.classList.add("active");

    const tabId = tab.dataset.tab;
    const activeContent = document.getElementById(tabId);

    if (activeContent) {
      activeContent.classList.add("active");
    }
  });
});
