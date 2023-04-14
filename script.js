//your JS code here. If required.
const getRandomTime = () => Math.floor(Math.random() * 3) + 1;

      const promises = [
        new Promise((resolve) => setTimeout(() => resolve('Promise 1'), getRandomTime() * 1000)),
        new Promise((resolve) => setTimeout(() => resolve('Promise 2'), getRandomTime() * 1000)),
        new Promise((resolve) => setTimeout(() => resolve('Promise 3'), getRandomTime() * 1000)),
      ];

      Promise.all(promises)
        .then((results) => {
          const totalTime = results.reduce((acc, curr) => acc + getRandomTime(), 0);
          const output = document.getElementById('output');
          output.innerHTML = '';
          results.forEach((result, i) => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const timeCell = document.createElement('td');
            nameCell.textContent = result;
            timeCell.textContent = `${getRandomTime()}`;
            row.appendChild(nameCell);
            row.appendChild(timeCell);
            output.appendChild(row);
          });
          const totalRow = document.createElement('tr');
          const totalNameCell = document.createElement('td');
          const totalTimeCell = document.createElement('td');
          totalNameCell.textContent = 'Total';
          totalTimeCell.textContent = `${totalTime.toFixed(3)}`;
          totalRow.appendChild(totalNameCell);
          totalRow.appendChild(totalTimeCell);
          output.appendChild(totalRow);
        })
        .catch((error) => {
          console.error(error);
          const output = document.getElementById('output');
          output.innerHTML = '<tr><td colspan="2">Error occurred while fetching data</td></tr>';
        });