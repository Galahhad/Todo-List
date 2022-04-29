const searchWrap = document.querySelector(".search_wrap");
searchWrap.addEventListener("submit", (e) => {
  e.preventDefault();

  const todayTime = document.createElement("div");
  todayTime.className = "today_time";

  const time = document.createElement("div");
  time.className = "time_wrap";

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
  
  const prependBlock = document.querySelector(".prepend_block")

  prependBlock.after(saveWrap);
  saveWrap.append(checkbox, saveText, deleteButton);
  saveText.after(time);
  time.after(todayTime);

  searchInput.value = "";

  saveWrap.addEventListener("submit", (e) => {
    e.preventDefault;
    saveWrap.remove();
  });

  checkbox.addEventListener("change", () => {
    const supreme = document.querySelector(".supreme");
    if (checkbox.checked) {
      
      const searchWrap = document.querySelector(".search_wrap");
      saveText.style.color = "darkgray";
      saveText.style.textDecoration = "line-through";
      time.textContent = new Date().toISOString().split("T")[0];
      todayTime.textContent = new Date().toLocaleTimeString().slice(0, -3);
      supreme.append(saveWrap);
    } else {
      saveText.style.textDecoration = "none";
      saveText.style.color = "black";
      time.textContent = "";
      todayTime.textContent = "";
    }
  });
});

