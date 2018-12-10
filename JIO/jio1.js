const schema = require('./rating-schema')

const result = schema.validate({ 
   username: 'brunoluiz',
   rating: 5,
   email: 'contact@brunoluiz.net' 
})
console.log(result) // result.error will be null

// result.error will show an error due to missing e-mail
const resultWithError = schema.validate({ 
   username: 'brunoluiz',
   rating: 5,
})
console.log(resultWithError)