const now = new Date()

const year = now.getFullYear()
const month = now.getMonth() + 1
const day = now.getDate()
const date = `${year}-${month}-${day}`

const hours = now.getHours()
const minutes = now.getMinutes()
const seconds = now.getSeconds()
const milliseconds = now.getMilliseconds()
const time = `${hours}:${minutes}:${seconds}.${milliseconds}`

console.log(`${date}T${time}Z`)