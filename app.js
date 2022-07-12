const Express = require('express')
const app = Express()
const mainRoute = require("./Controllers/mainRoute")

const PORT = 5000

app.use(mainRoute)

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

