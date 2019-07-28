const path = require('path')
const express = require('express')

const PUBLIC_PATH = path.join(__dirname, './public')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static(PUBLIC_PATH))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})