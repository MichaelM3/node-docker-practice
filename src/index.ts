import express, { Application, Request, Response } from "express"

const app: Application = express()
const PORT = 8080

app.get("/", async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: "Hello World!"
    })
})

try {
    app.listen(PORT, (): void => {
        console.log(`Connected successfully on port ${PORT}`)
    })
} catch (e: any) {
    console.error(`Error occured: ${e.message}`)
}
