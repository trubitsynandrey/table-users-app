export function mapUserToMaster(arr, masterId, studentToAdd, level = 0) {
  return arr.map(item => {
    if (item.id === masterId) {
      const updatedItem = {
        ...item,
        students: [...item.students, { ...studentToAdd, level: level + 1 }],
        level: level
      }

      return updatedItem
    } else if (item.students && item.students.length > 0) {
      return {
        ...item,
        students: mapUserToMaster(item.students, masterId, studentToAdd, level + 1)
      }
    } else {
      return item
    }
  })
}

function recursiveSort(item, key) {
  if (item.students.length === 0) return

  item.students.sort((a, b) => a[key].localeCompare(b[key]))
  item.students.forEach(student => recursiveSort(student, key))
}

export function sortDataByKey(data, key) {
  const copyOfData = [...data]
  copyOfData.forEach(item => recursiveSort(item, key))
  copyOfData.sort((a, b) => a[key].localeCompare(b[key]))

  return copyOfData
}

export function setKeyToLocalStorage(key, array) {
  localStorage.setItem(key, JSON.stringify(array))
}

export function getKeyFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}
