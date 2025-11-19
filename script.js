// --- SECTION NAVIGATION ---
document.querySelectorAll("nav button").forEach(btn => {
    btn.addEventListener("click", () => {
        const section = btn.getAttribute("data-section");

        document.querySelectorAll(".content-section").forEach(sec => 
            sec.classList.add("hidden")
        );

        document.getElementById(section).classList.remove("hidden");
    });
});


// --- TEXTAREA AUTO-SAVE ---
document.querySelectorAll(".text-save").forEach(area => {
    const id = area.getAttribute("data-id");
    area.value = localStorage.getItem(id) || "";

    area.addEventListener("input", () => {
        localStorage.setItem(id, area.value);
    });
});


// --- CHECKBOX GROUPS ---
function addItem(groupName) {
    const container = document.querySelector(`[data-group="${groupName}"]`);
    const id = `${groupName}-${Date.now()}`;

    const row = document.createElement("div");
    row.innerHTML = `
        <input type="checkbox" id="${id}">
        <input type="text" class="text-save" data-id="${id}-text" placeholder="New item">
    `;

    container.appendChild(row);

    // Load saved state
    const checkbox = row.querySelector("input[type='checkbox']");
    const textInput = row.querySelector("input[type='text']");

    checkbox.checked = localStorage.getItem(id) === "true";
    textInput.value = localStorage.getItem(`${id}-text`) || "";

    checkbox.addEventListener("change", () => {
        localStorage.setItem(id, checkbox.checked);
    });

    textInput.addEventListener("input", () => {
        localStorage.setItem(`${id}-text`, textInput.value);
    });
}
