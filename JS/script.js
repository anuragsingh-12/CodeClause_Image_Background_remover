const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('image-preview');
const removeButton = document.getElementById('remove-button');
const downloadButton = document.getElementById('download-button');

imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const imageUrl = URL.createObjectURL(file);
  imagePreview.innerHTML = `<img src="${imageUrl}" alt="Preview">`;
  removeButton.style.display = 'block';
});

removeButton.addEventListener('click', function() {
  // Perform background removal here
  // Replace the line below with your actual implementation
  // For demonstration purposes, we'll just show a message
  alert('Background removed successfully!');
  downloadButton.style.display = 'block';
});

downloadButton.addEventListener('click', function() {
  const image = imagePreview.querySelector('img');
  const imageURL = image.getAttribute('src');
  const anchor = document.createElement('a');
  anchor.href = imageURL;
  anchor.download = 'background_removed_image.png';
  anchor.click();
});
