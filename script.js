function moveCarousel(direction, carouselId) {
  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelectorAll('.carousel-item');
  const activeItem = carousel.querySelector('.carousel-item.active');
  let newIndex;

  const activeIndex = Array.from(items).indexOf(activeItem);

  if (direction === 'next') {
      newIndex = (activeIndex + 1) % items.length;
  } else if (direction === 'prev') {
      newIndex = (activeIndex - 1 + items.length) % items.length;
  }

  activeItem.classList.remove('active');
  items[newIndex].classList.add('active');
}

document.getElementById('mudar-para-UX').addEventListener('click', function() {
  document.getElementById('content-UI').style.display = 'none';
  document.getElementById('content-UX').style.display = 'block';
  document.getElementById('passar-para-UX').textContent = 'UX';
  document.getElementById('mudar-para-UX').textContent = 'Mudar para UI';
});

document.getElementById('mudar-para-UX-UI').addEventListener('click', function() {
  document.getElementById('content-UX').style.display = 'none';
  document.getElementById('content-UI').style.display = 'block';
  document.getElementById('passar-para-UI').textContent = 'UI';
  document.getElementById('mudar-para-UX-UI').textContent = 'Mudar para UX'; 
});

