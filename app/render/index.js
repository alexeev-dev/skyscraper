const bgCtx = document.getElementById('bg').getContext('2d')

function renderFrame(state, images) {
  bgCtx.drawImage(images['images/places/summer-bg.png'], 0, 0)
}

export default renderFrame
