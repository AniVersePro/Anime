document.addEventListener('DOMContentLoaded', () => {
  const backBtn = document.getElementById('backBtn');
  backBtn.addEventListener('click', () => {
    // Redirect back to main page (adjust filename/path as needed)
    window.location.href = 'index.html';
  });
});
