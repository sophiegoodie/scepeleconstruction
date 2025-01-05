const images = 39;
window.addEventListener("load", function () {
  const gallery = this.document.getElementById("gallery_container");
  let content = "";

  // Add images from img/gallery/tiny
  for (let i = 0; i <= images; i++) {
    const filename = i.toString().padStart(2, "0") + ".jpg";
    content += `
        <a class="gallery-item" href="img/gallery/full/${filename}"><img class="img-fluid" src="img/gallery/thumb/${filename}" alt="" title="" loading="lazy"/></a>
        `;
  }

  gallery.innerHTML = content;

  var $gallery = new SimpleLightbox(".gallery a", {});
});
