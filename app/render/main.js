import renderCommon from './common'

const bgCtx = document.getElementById('bg').getContext('2d')
const fgCtx = document.getElementById('fg').getContext('2d')

function renderMain(ui, images) {
  bgCtx.drawImage(images['images/places/summer-bg.png'], 0, 0)
  fgCtx.clearRect(0, 0, 1080, 1920)
  renderCommon(ui, images)
}

export default renderMain
