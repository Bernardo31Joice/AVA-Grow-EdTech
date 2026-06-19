let selectedRole = null;

function goTo(screenId) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(screenId);

  if (target) {
    target.classList.add("active");
    target.scrollTop = 0;
  }

  lucide.createIcons();
}

const perfilButtons = document.querySelectorAll(".perfil-btn");

perfilButtons.forEach((button) => {
  button.addEventListener("click", () => {
    perfilButtons.forEach((btn) => btn.classList.remove("selected"));

    button.classList.add("selected");
    selectedRole = button.dataset.role;
  });
});

document.getElementById("entrarPerfil").addEventListener("click", () => {
  if (!selectedRole) {
    alert("Selecione uma opção para continuar.");
    return;
  }

  goTo("login");
});

document.getElementById("entrarLogin").addEventListener("click", () => {
  if (selectedRole === "professor") {
    goTo("professorHome");
  } else if (selectedRole === "aluno") {
    goTo("alunoHome");
  } else if (selectedRole === "voluntario") {
    goTo("voluntarioHome");
  } else {
    goTo("perfil");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});
