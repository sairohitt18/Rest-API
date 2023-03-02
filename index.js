const express = require('express')
const app = express()
const userRoutes = require('./routes/user.routes')
app.use(express.json());
const port = 3000

app.use("/users",userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})