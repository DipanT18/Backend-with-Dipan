require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 6969

const github_data = {
    "login": "DipanT18",
    "id": 211667671,
    "node_id": "U_kgDODJ3K1w",
    "avatar_url": "https://avatars.githubusercontent.com/u/211667671?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/DipanT18",
    "html_url": "https://github.com/DipanT18",
    "followers_url": "https://api.github.com/users/DipanT18/followers",
    "following_url": "https://api.github.com/users/DipanT18/following{/other_user}",
    "gists_url": "https://api.github.com/users/DipanT18/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/DipanT18/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/DipanT18/subscriptions",
    "organizations_url": "https://api.github.com/users/DipanT18/orgs",
    "repos_url": "https://api.github.com/users/DipanT18/repos",
    "events_url": "https://api.github.com/users/DipanT18/events{/privacy}",
    "received_events_url": "https://api.github.com/users/DipanT18/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Dipan Timalsina",
    "company": null,
    "blog": "",
    "location": "Banepa, Nepal",
    "email": null,
    "hireable": true,
    "bio": "🥇Building digital movement. \r\n🤖Professional:  Electronics hardware Engineer Student, Exploiring AI/ML, DS, and software. Into finance and economics too.\r\n",
    "twitter_username": "DipanTimalsina",
    "public_repos": 19,
    "public_gists": 0,
    "followers": 3,
    "following": 4,
    "created_at": "2025-05-14T11:30:59Z",
    "updated_at": "2026-04-19T08:27:51Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('DipanTimalsina');
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at Backend with Dipan</h1>');
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Dipan is great!</h2>')
})

app.get('/github', (req, res) => {
  res.json(github_data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
