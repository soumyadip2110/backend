import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		axios.get('/api/jokes')
		.then(response => {
			setJokes(response.data)
		})
		.catch(err => {
			console.log(err)
		})
	});

	return (
		<>
			<h1>Hello World !</h1>
			<p>Total Jokes: {jokes.length}</p>
			{
				jokes.map(joke => (
					<div key={joke.id}>
						<h3>{joke.title}</h3>
						<p>{joke.content}</p>
					</div>
				))
			}
		</>
	)
}

export default App
