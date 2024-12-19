window.addEventListener("load", function () {
  fetch("img/insta_images/instagram_images_metadata.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((insta_images_metadata) => {
      const gallery = this.document.getElementById("gallery_container");
      let content = "";
      Object.entries(insta_images_metadata).forEach(([filename, metadata]) => {
        content += `
        <img class="img-fluid gallery-item" src="img/insta_images/${filename}" loading="lazy">
        `;
        console.log(`Filename: ${filename}`);
        console.log(`Post Link: ${metadata.post_link}`);
        console.log(`Description: ${metadata.description}`);
        console.log(`Likes: ${metadata.likes}`);
        console.log(`Timestamp: ${metadata.timestamp}`);
        // Add additional processing logic here if needed
      });
      gallery.innerHTML = content;
    })
    .catch((error) => {
      console.error("There has been a problem with your fetch operation:", error);
    });
});
