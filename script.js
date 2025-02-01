const uploadBtn = document.getElementById('upload-btn');
const pdfUpload = document.getElementById('pdf-upload');
const pdfList = document.getElementById('pdf-list');

// Simulated admin check
const isAdmin = true; // Change this to false to simulate a regular user

// Simulated storage for uploaded PDFs
let uploadedPDFs = [];

// Function to handle PDF upload
uploadBtn.addEventListener('click', () => {
    if (isAdmin) {
        const file = pdfUpload.files[0];
        if (file && file.type === 'application/pdf') {
            const url = URL.createObjectURL(file);
            uploadedPDFs.push({ name: file.name, url: url });
            displayPDFs();
            pdfUpload.value = ''; // Clear the input
        } else {
            alert('Please upload a valid PDF file.');
        }
    } else {
        alert('Only admins can upload PDFs.');
    }
});

// Function to display uploaded PDFs
function displayPDFs() {
    pdfList.innerHTML = '';
    uploadedPDFs.forEach(pdf => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${pdf.url}" target="_blank">${pdf.name}</a>`;
        pdfList.appendChild(li);
    });
}

// Initial display
displayPDFs();
