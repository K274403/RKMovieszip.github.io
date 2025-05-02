// Sample list of files (this could be fetched dynamically from a database or an API)
const files = [
    { name: "File1.pdf", link: "https://example.com/file1.pdf" },
    { name: "File2.mp4", link: "https://example.com/file2.mp4" },
    { name: "File3.jpg", link: "https://example.com/file3.jpg" },
    { name: "File4.zip", link: "https://example.com/file4.zip" },
    { name: "File5.txt", link: "https://example.com/file5.txt" }
];

// Function to display files on the page
function displayFiles() {
    const fileList = document.getElementById('files');
    fileList.innerHTML = '';

    files.forEach(file => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${file.link}" target="_blank">${file.name}</a>`;
        fileList.appendChild(li);
    });
}

// Function to filter files based on search input
function searchFiles() {
    const searchQuery = document.getElementById('search-box').value.toLowerCase();
    const filteredFiles = files.filter(file => file.name.toLowerCase().includes(searchQuery));
    
    const fileList = document.getElementById('files');
    fileList.innerHTML = '';

    filteredFiles.forEach(file => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${file.link}" target="_blank">${file.name}</a>`;
        fileList.appendChild(li);
    });
}

// Initial call to display all files
window.onload = displayFiles;
