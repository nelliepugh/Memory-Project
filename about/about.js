

function renderGallery(xmlPath, galleryId) {
  fetch(xmlPath)
    .then(response => response.text())
    .then(text => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "application/xml");
      const images = xml.querySelectorAll("image");
      const gallery = document.getElementById(galleryId);

      if (!gallery) return;

      images.forEach(item => {
        const srcNode = item.querySelector("src");
        const src = srcNode ? srcNode.textContent : "";
        if (!src) return;

        const img = document.createElement("img");
        img.src = src;
        img.alt = "Memory fragment";
        img.classList.add("flicker");

        const delay = (Math.random() * 6).toFixed(2);
        const duration = (4.5 + Math.random() * 4.5).toFixed(2);
        img.style.setProperty("--flicker-delay", `${delay}s`);
        img.style.setProperty("--flicker-duration", `${duration}s`);

        gallery.appendChild(img);
      });
    })
    .catch(error => {
      console.error(`Error loading ${xmlPath}:`, error);
    });
}

renderGallery("about.xml", "aboutgallery");
