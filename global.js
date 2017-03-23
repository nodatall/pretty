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

function checkIfLoaded(targetElement, className, callback) {
  if ( targetElement.length ) {
    callback(className)
  } else {
    window.setTimeout( function() {
      targetElement = getByClass(className)
      checkIfLoaded(targetElement, className, callback)
    }, 200)
  }
}

function actionOnLoad(className, callback) {
  checkIfLoaded(getByClass(className), className, callback)
}
