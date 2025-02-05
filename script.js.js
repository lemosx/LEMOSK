const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');

simButton.addEventListener('click', () => {
  window.location.href = 'https://www.youtube.com/watch?v=LACbVhgtx9I';
});

naoButton.addEventListener('click', () => {
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;

  naoButton.style.position = 'absolute';
  naoButton.style.left = randomX + 'px';
  naoButton.style.top = randomY + 'px';
});