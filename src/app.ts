import express, { Request, Response, Application } from 'express'
import path from 'path'
import dotenv from 'dotenv'



dotenv.config({ path: path.join(__dirname, 'config', 'config.env') })
const app: Application = express();

app.get('/api', (req: Request, res: Response) => {
    res.send('Hello World');
})

// If in production send traffic to react app
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'public')));
    app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    })

} else {
    // If in development...
    app.get('*', (req: Request, res: Response) => {
        res.send('In development, use react dev server on port 3000')
    })
}

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server started in ${process.env.NODE_ENV} on port: ${PORT}`))
