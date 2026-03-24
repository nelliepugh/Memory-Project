fetch("../about/about.xml")
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");

    const images = xml.querySelectorAll("image");
    const gallery = document.getElementById("aboutgallery");
  })
  
  .catch(error => {
    console.error("Error loading XML:", error);
  });
