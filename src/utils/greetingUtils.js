export function makeWish(name, wishes) {
  const clean = name.trim() || "आपके परिवार";
  return `${clean} के लिए: ${wishes[Math.floor(Math.random() * wishes.length)]}`;
}