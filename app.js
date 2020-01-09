const listing = require('./library/dir-scanner')

listing.listAllDirectory('C://nodejs').then(result => {
    
    // Example: Log All Founded Files
    result.files.forEach((files) => {
        // Return path for every founded file
        console.log(files)
    })

    // Example: Log All Founded Directories
    result.folders.forEach((directory) => {
        // Return path for every founded directory
        console.log(directory)
    })

    // Example: Searching For Specified File
    const searchFile = result.files.filter((file) =>{
        const splitPath = file.split('/')
        const filename = splitPath[splitPath.length - 1]
        return filename === 'denah.jpg'
    })

    console.log(searchFile)
})