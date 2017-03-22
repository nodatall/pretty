function byClass(className) {
  return document.getElementsByClassName(className)
}

function hide(className) {
  Array.from(byClass(className)).forEach( element => {
    Object.assign(element.style, { display: 'none' })
  })
}

const hideList = [
  'FacebookLikeButton',
  'Body-header',
  'Body-aside',
  'Body-footer',
  'SocialShares',
  'WebStoreBadge',
  'Avatar-image'
]

hideList.forEach( className => hide(className) )
