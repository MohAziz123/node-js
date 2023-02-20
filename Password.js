var generator = require('generate-password')
var password = generator.generate({
    length:200 ,
    Number: true 
}
)

console.log(password)