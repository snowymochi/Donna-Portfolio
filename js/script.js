if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  var scrollUpButton = document.getElementById('scroll-up-button');
  if (scrollPosition > 100) {
    scrollUpButton.style.display = 'block';
  } else {
    scrollUpButton.style.display = 'none';
  }
});

document.getElementById('scroll-up-button').addEventListener('click', function() {
  window.scrollBy({
    top: -window.pageYOffset || document.documentElement.scrollTop,
    behavior: 'smooth'
  });
});
