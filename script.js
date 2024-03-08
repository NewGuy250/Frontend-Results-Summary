// Function to populate HTML elements with JSON data
function populateSummary(data) {
  data.forEach(item => {
    const categoryElement = document.querySelector(`.${item.category.toLowerCase()}-score`);
    categoryElement.querySelector('.black-text').textContent = item.score;
    categoryElement.querySelector('img').src = item.icon;
  });
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