import express from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.PORT;

const githubData = {
  "login": "soumyadip2110",
  "id": 151815659,
  "node_id": "U_kgDOCQyF6w",
  "avatar_url": "https://avatars.githubusercontent.com/u/151815659?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/soumyadip2110",
  "html_url": "https://github.com/soumyadip2110",
  "followers_url": "https://api.github.com/users/soumyadip2110/followers",
  "following_url": "https://api.github.com/users/soumyadip2110/following{/other_user}",
  "gists_url": "https://api.github.com/users/soumyadip2110/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/soumyadip2110/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/soumyadip2110/subscriptions",
  "organizations_url": "https://api.github.com/users/soumyadip2110/orgs",
  "repos_url": "https://api.github.com/users/soumyadip2110/repos",
  "events_url": "https://api.github.com/users/soumyadip2110/events{/privacy}",
  "received_events_url": "https://api.github.com/users/soumyadip2110/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Soumyadip Chowdhury ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-11-23T06:24:08Z",
  "updated_at": "2025-06-28T15:16:22Z"
}

app.get('/', (req, res) => {
  res.send('Hello World from Soumyadip!')
})

app.get('/tweets', (req, res) => {
  res.send('tweets')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login to continue...</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
