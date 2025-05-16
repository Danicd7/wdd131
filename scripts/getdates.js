// Set current year
const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;

// Set last modified date
const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Update: ${lastModified}`;

