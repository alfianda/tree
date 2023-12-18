// Optional: Add dynamic functionality with JavaScript
// For example, open links in a new tab

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.link');
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      window.open(link.href, '_blank');
    });
  });
});
