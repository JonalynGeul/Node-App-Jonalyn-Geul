const write = require ('./write')
const read = require ('./read')
const add = require ('./add')
const present = require ('./present')
const del = require ('./del')
const update = require ('./update')
const data = process.argv

var paper = {}
 
if (data[2] == 'add'){
    // build object
    paper = {
        id: data[3],
        name: data[4],
        address: data[5],
        course: data [6]
        


    }
    var oldPaper = read ()
    add (paper , oldPaper)
    present (read())

}

if  (data[2] == 'read'){

    present (read())
}

if (data [2] ==='delete'){
    let address = data [3]
    let oldPaper= read()

    del (address, oldPaper)

    console.log (read())

}
if (data [2]=== 'update'){
    paper = {
        id:data [3],
        name:data [4],
        address:data [5],
        course:data [6]
    }
    let oldPaper= read()
    update (paper, oldPaper)
    
    present (read())
}








//write(data)
//console.log (read())

