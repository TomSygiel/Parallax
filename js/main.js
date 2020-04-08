let image_top = document.getElementById('parallax_top')
let image_right = document.getElementById('parallax_right')

new simpleParallax(image_top, {
  scale: 1.5,
  delay: 8
})

new simpleParallax(image_right, {
  orientation: 'right',
  scale: 1.5
})