const fs = require('fs')

exports.listAllDirectory = async (path) => {

        try {
            
            const basepath = await path

            let paths = {
                'basepath': basepath,
                'folders': [],
                'founded': [],
                'files': []
            }
    
            let searchedPath = fs.readdirSync(paths.basepath)
            searchedPath.forEach((path) =>{
               if( fs.lstatSync(paths.basepath + path).isDirectory() ) {
                   paths.founded.push(basepath + path + '/')
               } else {
                   paths.files.push(basepath + path)
               }
            })
        
            paths.folders.push(basepath)
        
            while( true ){

                if( paths.founded.length === 0 ){
                    break
                }

                paths.founded.forEach( (newpath) =>{
                    paths.folders.push(newpath)
                    paths.founded = paths.founded.filter((path) => {
                    return path != newpath // When Returning False, It Will Remove This Path From Paths Founded
                })

                    const searchedPath = fs.readdirSync(newpath)
                    searchedPath.forEach((foundedPath) => {
                    if( fs.statSync(newpath + foundedPath).isDirectory() ){
                        paths.founded.push(newpath + foundedPath + '/')
                    } else {
                        paths.files.push(newpath + foundedPath)
                    }
                })
                
                })

          
            }

            return paths
            
        }catch(e){
            return e

        }
     
}