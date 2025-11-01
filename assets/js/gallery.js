(function() {
  'use strict';

  // Gallery data storage
  const galleries = {};

  // Modal elements
  const modal = document.getElementById('gallery-modal');
  const modalImg = modal.querySelector('.gallery-modal-image');
  const closeBtn = modal.querySelector('.gallery-close');
  const prevBtn = modal.querySelector('.gallery-prev');
  const nextBtn = modal.querySelector('.gallery-next');
  const caption = modal.querySelector('.gallery-caption');

  // Current gallery state
  let currentGallery = null;
  let currentIndex = 0;

  // Initialize galleries from DOM
  function initGalleries() {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach((item, itemIndex) => {
      const thumbnails = item.querySelectorAll('.gallery-thumbnail');
      if (thumbnails.length === 0) return;

      const postId = thumbnails[0].dataset.postId;
      if (!postId) return;

      // Store gallery data
      galleries[postId] = {
        images: [],
        element: item
      };

      // Collect image data from thumbnails
      thumbnails.forEach(thumb => {
        const img = thumb.querySelector('img');
        if (!img) return;

        galleries[postId].images.push({
          url: img.src,
          alt: img.alt,
          title: img.alt
        });

        // Add click handler
        thumb.addEventListener('click', () => {
          const index = parseInt(thumb.dataset.galleryIndex);
          openGallery(postId, index);
        });
      });
    });
  }

  // Open gallery modal
  function openGallery(postId, index) {
    currentGallery = postId;
    currentIndex = index;

    if (!galleries[postId] || !galleries[postId].images[index]) return;

    showImage();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close gallery modal
  function closeGallery() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentGallery = null;
    currentIndex = 0;
  }

  // Show current image
  function showImage() {
    if (!currentGallery || !galleries[currentGallery]) return;

    const images = galleries[currentGallery].images;
    const image = images[currentIndex];

    modalImg.src = image.url;
    modalImg.alt = image.alt;
    caption.textContent = image.title || '';

    // Update nav button visibility
    prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
    nextBtn.style.display = currentIndex < images.length - 1 ? 'block' : 'none';
  }

  // Navigate to previous image
  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      showImage();
    }
  }

  // Navigate to next image
  function showNext() {
    if (!currentGallery || !galleries[currentGallery]) return;

    const images = galleries[currentGallery].images;
    if (currentIndex < images.length - 1) {
      currentIndex++;
      showImage();
    }
  }

  // Event listeners
  closeBtn.addEventListener('click', closeGallery);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  // Close on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeGallery();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    switch(e.key) {
      case 'Escape':
        closeGallery();
        break;
      case 'ArrowLeft':
        showPrev();
        break;
      case 'ArrowRight':
        showNext();
        break;
    }
  });

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGalleries);
  } else {
    initGalleries();
  }
})();
