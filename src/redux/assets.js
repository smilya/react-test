function deepClone(instance) {
  if (instance instanceof Array) {
    const cloneArr = [...instance];
    for (let i=0; i < cloneArr.length; i++) {
      if (cloneArr[i] instanceof Object) {
        cloneArr[i] = deepClone(instance[i])
      }
    }  
    return cloneArr
  } 
  if (instance instanceof Object) {
    const cloneObj = {...instance}
    for (const j in cloneObj) {
      if (cloneObj[j] instanceof Object) {
        cloneObj[j] = deepClone(instance[j])
      }
    }
    return cloneObj;
  }
  else return instance;
}

export { deepClone };
