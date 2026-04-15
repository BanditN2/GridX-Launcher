export function addRecent(id) {
  let r = JSON.parse(localStorage.getItem("recent") || "[]");
  r.unshift(id);
  localStorage.setItem("recent", JSON.stringify(r));
}
