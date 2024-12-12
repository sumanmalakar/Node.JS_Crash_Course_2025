import {readFile,writeFile, appendFile,mkdir,readdir} from 'fs/promises'

// Read File Content
const readfileContent = async (filePath) =>{
 try {
    const data = await readFile(filePath,'utf-8')
    console.log(data)
 } catch (error) {
    console.error(error)
 }
}
// readfileContent('file.txt')

// Write File or Create new file
const createFile = async (filePath,content) =>{
   await writeFile(filePath,content);
   console.log("file created successfully..!")
}

// createFile('superman.php',"This is php file")

// Append data to file
const append_data_to_file = async (filePath,content) =>{
await appendFile(filePath, content);
console.log("New content added successfully...!")
}

// append_data_to_file('superman.py',' Adding the extra content')
 
// create directory
const create_directory = async (dirPath) =>{
 await mkdir(dirPath,{recursive:true})
}

// await create_directory("src/js");

// src/components/Superman.jsx
// python/day1/day2

// read directory content
const read_dir = async (dirPath) =>{
const files = await readdir(dirPath)
console.log(files)
}

// read_dir('src')