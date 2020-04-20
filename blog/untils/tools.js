// 转换格式
export const objectToArray = (obj) => {
  const arr = []
  Object.keys(obj).forEach((key) => (
    arr.push(obj[key])
  ))
  console.log('arr:', arr)
  return arr
}