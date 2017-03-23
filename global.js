function getByClass(className) {
  return document.getElementsByClassName(className)
}

function hideByClassName(className) {
  Array.from(getByClass(className)).forEach( element => {
    Object.assign(element.style, { display: 'none' })
  })
}

function hideClassNameList(classNameList) {
  classNameList.forEach( className => hideByClassName(className) )
}

function checkIfLoaded(targetElement, className) {
  if ( targetElement.length ) {
    hideByClassName(className)
    return
  } else {
    window.setTimeout( function() {
      targetElement = getByClass(className)
      checkIfLoaded(targetElement, className)
    }, 200)
  }
}

function hideOnLoad(className) {
  checkIfLoaded(getByClass(className), className)
}
