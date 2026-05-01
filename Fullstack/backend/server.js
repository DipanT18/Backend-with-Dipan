import express from "express"

const app = express();

const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Server is Ready');
});

// list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Debugging",
            content: "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            id: 2,
            title: "Arrays",
            content: "Why did the JavaScript developer wear glasses? Because he could not C#."
        },
        {
            id: 3,
            title: "Backend Life",
            content: "I told my API a joke, but it returned a 500 because it could not handle it."
        },
        {
            id: 4,
            title: "Database",
            content: "My SQL query walks into a bar, approaches two tables, and asks: 'Can I join you?'"
        },
        {
            id: 5,
            title: "Deploy Day",
            content: "It works on my machine is not a bug report, it is a weather forecast."
        }
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})