import express from 'express'


const app = express()
app.use(express.json())

interface User {
  name: string
  email: string
}

app.get('', (request, response, ) => {
  const { name:name, email:email } = request.body
  const user = (
  if (user === name||email) {
    return response.status(200).send(user)
  }
  else {
  return response.status(400).json({message: "error"})
  }
return user
})

app.listen(3000, () => {
    console.log("Servidor on na porta 5000 http://localhost:3000/")
})
