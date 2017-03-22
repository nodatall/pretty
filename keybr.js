function byClass(className) {
  return document.getElementsByClassName(className)
}

Array.from(byClass('Supporter-placeholder')).forEach( element => {
  Object.assign(element.style, { display: 'none' })
})
