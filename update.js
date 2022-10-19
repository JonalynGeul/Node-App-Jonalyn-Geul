const fs  = require ('fs')

const update = function (paper , oldPaper){
    const oPaper = JSON.parse ( oldPaper)
    const newPaper =oPaper.map(function (n,idx){
        if (n.id == paper.id ){
          n.name = paper.name
          n.address = paper.address
          n.course = paper.course
        }
        return n 
    })
fs.writeFileSync('./note.txt', JSON.stringify(newPaper))
}
module.exports = update