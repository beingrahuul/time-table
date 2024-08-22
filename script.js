// Function to save checkbox state
function saveCheckboxState() {
  const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
  const states = Array.from(checkboxes).map(checkbox => checkbox.checked);
  localStorage.setItem('checkboxStates', JSON.stringify(states));
}

// Function to load checkbox state
function loadCheckboxState() {
  const states = JSON.parse(localStorage.getItem('checkboxStates'));
  if (states) {
      const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
      checkboxes.forEach((checkbox, index) => {
          checkbox.checked = states[index] || false;
      });
  }
}

// Add event listeners to save progress on change
document.addEventListener('DOMContentLoaded', () => {
  loadCheckboxState();
  const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', saveCheckboxState);
  });
});

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  // Save user preference in localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

// Load user preference from localStorage
function loadDarkMode() {
  const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
  if (isDarkMode) {
      document.body.classList.add('dark-mode');
  }
}

// Event listener for the toggle button
document.addEventListener('DOMContentLoaded', () => {
  loadDarkMode();
  const toggleButton = document.getElementById('darkModeToggle');
  if (toggleButton) {
      toggleButton.addEventListener('click', toggleDarkMode);
  }
});

