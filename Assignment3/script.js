let modal = document.getElementById("modal");
let modalTitle = document.getElementById("modal-title");
let modalDescription = document.getElementById("modal-description");
let closeModalButton = document.querySelector(".close");

// Lista de proyectos con títulos y descripciones
const projects = [
  {
    title: "Illinois State Uversity",
    description:
      "This project focused on developing marketing strategies to enhance online visibility and engagement.",
  },
  {
    title: "Social Media Optimization",
    description:
      "Optimizing social media presence through targeted campaigns, analytics, and audience engagement strategies.",
  },
  {
    title: "Web Development",
    description:
      "Building and improving websites for better functionality, user experience, and responsiveness.",
  },
];

function showModal(projectId) {
  if (projectId < 1 || projectId > projects.length) return;

  modalTitle.textContent = projects[projectId - 1].title;
  modalDescription.textContent = projects[projectId - 1].description;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

closeModalButton.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
