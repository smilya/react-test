function deepClone(instance) {
  if (Array.isArray(instance)) {
    const cloneArr = [];
    for (const j of instance) {
      const item = deepClone(j);
      cloneArr.push(item);
    }
    return cloneArr
  } 
  if (instance instanceof Object) {
    const cloneObj = {}
    for (const j in instance) {
      cloneObj[j] = deepClone(instance[j])
    }
    return cloneObj;
  }
  else return instance;
}

export { deepClone };
