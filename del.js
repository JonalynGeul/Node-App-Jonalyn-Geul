const fs = require ('fs')

const del = function (num, oldPaper){
    const paper = JSON.parse(oldPaper)
    const newPaper = paper.filter(function(n,idx){
        return n.id !== num 

    }) 
    fs.writeFileSync('./note.txt', JSON.stringify(newPaper))
}
module.exports = del