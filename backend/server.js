const express = require("express")
const dotenv = require("dotenv")
const { chats } = require("./data/data")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")



const app = express()
app.use(express.json())
dotenv.config()
connectDB()
const PORT = process.env.PORT 

app.listen(PORT, console.log(`App started successfully ${PORT}`))

app.get("/", ((req,res) => {
    res.send("Alhamdulillah ya ")
}))

app.use('/api/user',userRoutes)

app.use(notFound)
app.use(errorHandler)

app.get("/api/chats", ((req,res) => {
    res.send(chats)
}))

// app.get("/api/chat/:id", ((req,res) => {
//     const chat = chats.find( chat => chat._id === req.params.id)
//     res.send(chat)
// }))



