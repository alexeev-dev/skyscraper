import renderCommon from '../common'
import renderResult from './result'

const bgCtx = document.getElementById('bg').getContext('2d')
const fgCtx = document.getElementById('fg').getContext('2d')

function renderGameplay(state, images) {
  bgCtx.drawImage(images['images/places/summer-bg.png'], 0, 0)
  fgCtx.clearRect(0, 0, 1080, 1920)
  renderCommon(state.ui, images)
  if (state.ui.result.isOpen) {
    renderResult(state.ui, images)
  }
}

export default renderGameplay
