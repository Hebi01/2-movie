function toggleVideo() {
  const trailer = document.querySelector('.trailer');
  const video = document.querySelector('video');
  trailer.classList.toggle('active');

  if (trailer.classList.contains('active')) {
    video.play();
  } else {
    video.pause();
    video.currentTime = 0;
  }
}

function changeBg(bg, title) {
  const banner = document.querySelector('.banner');
  const contents = document.querySelectorAll('.content');

  banner.style.background = `url('./imag/movies-20250615T074651Z-1-001/movies/${bg}') no-repeat center center`;
  banner.style.backgroundSize = 'cover';

  contents.forEach(content => {
    content.classList.remove('active');
    if (content.classList.contains(title)) {
      content.classList.add('active');
    }
  });
}
