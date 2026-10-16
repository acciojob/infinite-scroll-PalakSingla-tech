//your code here!
const list = document.getElementById("infi-list");

let count = 1;

// Function to add list items
function addItems(number) {
  for (let i = 0; i < number; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
  }
}

// Add 10 items by default
addItems(10);

// Add 2 items when the user reaches the bottom
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 5
  ) {
    addItems(2);
  }
});
