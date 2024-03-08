// Function to populate HTML elements with JSON data
function populateSummary(data) {
  let totalScore = 0;
  data.forEach(item => {
    const categoryElement = document.querySelector(`.${item.category.toLowerCase()}-score`);
    categoryElement.querySelector('.black-text').textContent = item.score;
    totalScore += item.score;
    categoryElement.querySelector('img').src = item.icon;
  });

  // Calculate the average score
  const averageScore = totalScore / data.length;

  // Update the .score element with the average score
  document.querySelector('.score').textContent = Math.round(averageScore);
}

// Fetch JSON data from file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Call the function to populate HTML elements with JSON data
    populateSummary(data);
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });