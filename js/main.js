// Wait for the DOM to load everything, just to be safe
$(document).ready(() => {

  // When the menu button is clicked
  $('.menu-button').on('click', () => {

    // Animate the menu button with the 'button-active' css class
    $('.menu-button').toggleClass('button-active');

    // Show the navigation menu
    $('.nav-menu').toggleClass('hidden');
  });
});
