// @ts-expect-error Missing type declaration for 'use'.
import { use } from 'react' // This error is expected because the "react" module does not have an exported member called 'use'.

import { GamesByCategory } from '../../lib/types'

const fetchGames = async (): Promise<GamesByCategory[]> => {
	try {
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/games?category=shooter`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-key': import.meta.env.VITE_API_KEY,
					'x-rapidapi-host': import.meta.env.VITE_API_HOST,
				},
			}
		)

		if (!response.ok) {
			throw new Error('Failed to fetch games')
		}

		const data: GamesByCategory[] = await response.json()
		console.log(data)
		return data
	} catch (error) {
		console.error('Error fetching games:', error)
		return []
	}
}

const gamesPromise = fetchGames()

export default function HomePage() {
	const games: GamesByCategory[] = use(gamesPromise)
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
			{games.map((game, index) => {
				return (
					<div className='border p-4 rounded-lg shadow-md' key={index}>
						<h3 className='text-lg font-bold'>{game.title}</h3>
						<p>Release: {game.release_date}</p>
						<p>Development By: {game.publisher}</p>
						<img
							src={game.thumbnail}
							alt={game.title}
							className='w-full h-auto my-4 rounded'
						/>
						<p className='text-xl'>{game.short_description}</p>
					</div>
				)
			})}
		</div>
	)
}
