const input = document.getElementById('coverInput');
const preview = document.getElementById('coverPreview');

input.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        preview.style.display = "block";
        preview.src = URL.createObjectURL(file);
    }
});