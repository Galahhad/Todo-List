const searchWrap = document.querySelector(".search_wrap");
searchWrap.addEventListener("submit", (e) => {
  e.preventDefault();

  const saveWrap = document.createElement("form");
  saveWrap.className = "save_wrap";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";

  const searchInput = document.querySelector(".search_input");
  const saveText = document.createElement("div");
  saveText.className = "save_text";
  saveText.textContent = searchInput.value;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete_button";
  deleteButton.textContent = "delete";

  const supreme = document.querySelector(".supreme");

  supreme.append(saveWrap);
  saveWrap.append(checkbox, saveText, deleteButton);

  searchInput.value = "";

  saveWrap.addEventListener("submit", (e) => {
    e.preventDefault;
    saveWrap.remove();
  });

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      saveText.style.color = "darkgray";
      saveText.style.textDecoration = "line-through";
    } else {
      saveText.style.textDecoration = "none";
      saveText.style.color = "black";
    }
  });
});
