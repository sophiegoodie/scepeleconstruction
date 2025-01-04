window
  .addEventListener("load", function () {
    const gallery = this.document.getElementById("gallery_container");
    let content = "";

    // Add images from img/gallery/tiny
    for (let i = 0; i <= 20; i++) {
      const filename = i.toString().padStart(2, "0") + ".jpg";
      content += `
        <a class="gallery-item" href="img/gallery/tiny/${filename}"><img class="img-fluid" src="img/gallery/tiny/${filename}" alt="" title="" /></a>
        `;
    }

    gallery.innerHTML = content;

    var $gallery = new SimpleLightbox(".gallery a", {});
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
