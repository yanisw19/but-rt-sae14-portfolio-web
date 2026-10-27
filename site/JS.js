document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const projects = document.querySelectorAll(".project-bubble");

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    projects.forEach(project => {
      const title = project
        .querySelector(".project-title")
        .textContent
        .toLowerCase();

      if (title.includes(value)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

