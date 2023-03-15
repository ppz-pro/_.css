export
function RSize(rawWidth, target = 'body') {
  if(typeof target == 'string')
    target = document.querySelector(target)
  const width = target.getBoundingClientRect().width
  target.style.setProperty('--toft-raw-size', rawWidth)
  target.style.setProperty('--toft-size', width)
  target.style.setProperty('--toft-ratio', width / rawWidth)
}
