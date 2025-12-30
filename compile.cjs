const fs = require('fs')
const pagedown = require('pagedown')

const compiledDir = './compiled'

if (!fs.existsSync(compiledDir)){
  fs.mkdirSync(compiledDir)
}

const homeMD = fs.readFileSync('./src/home.md', 'utf8')

mdConverter = new pagedown.Converter()
homeHTML = mdConverter.makeHtml(homeMD)

fs.writeFileSync(`${compiledDir}/home.in`, homeHTML)
