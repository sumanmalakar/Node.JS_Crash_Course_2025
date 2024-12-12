import path from 'path'

// join the two or more files
const full_path = path.join('path','index.js','app.js')
// console.log(full_path)

// absolute path
const absolute_path = path.resolve();
// console.log("this is my original path ",absolute_path)

// extension
const extension = path.extname('resume.pdf')
console.log(extension)