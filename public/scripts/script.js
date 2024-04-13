function displayDetail(title, text, imagePath) {
    const detailContainer = document.getElementById('detailText');
    let contentHTML = `<h1>${title}</h1><p>${text}</p>`;
    if (imagePath) {
        contentHTML += `<img src="${imagePath}" alt="${title}" style="max-width:100%;height:auto;">`;
    }
    detailContainer.innerHTML = contentHTML;
}
