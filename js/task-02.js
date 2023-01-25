const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const createListEl = (values) => {
  return values.map((value) => {
    const item = document.createElement("li");
    item.textContent = value;
    item.classList.add("item");
    return item;
  });
};
const items = createListEl(ingredients);

listEl.append(...items);
