// Get the tbody element where the table rows will be added
const tbody = document.getElementById("output");

// Add a row that says "Loading..." initially
const loadingRow = document.createElement("tr");
const loadingCell = document.createElement("td");
loadingCell.colSpan = 2;
loadingCell.textContent = "Loading...";
loadingRow.appendChild(loadingCell);
tbody.appendChild(loadingRow);

// Create 3 Promises that resolve after a random time between 1 and 3 seconds
const promises = [
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000))
];

// Wait for all Promises to resolve using Promise.all
Promise.all(promises).then(results => {
  // Remove the "Loading..." row
  tbody.removeChild(loadingRow);

  // Add rows for each Promise and their respective times
  results.forEach((result, index) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = `Promise ${index + 1}`;
    const timeCell = document.createElement("td");
    timeCell.textContent = result.toFixed(3);
    row.appendChild(nameCell);
    row.appendChild(timeCell);
    tbody.appendChild(row);
  });

  // Add a row for the total time taken to resolve all Promises
  const totalRow = document.createElement("tr");
  const totalNameCell = document.createElement("td");
  totalNameCell.textContent = "Total";
  const totalTimeCell = document.createElement("td");
  totalTimeCell.textContent = results.reduce((acc, cur) => acc + cur, 0).toFixed(3);
  totalRow.appendChild(totalNameCell);
  totalRow.appendChild(totalTimeCell);
  tbody.appendChild(totalRow);
});
