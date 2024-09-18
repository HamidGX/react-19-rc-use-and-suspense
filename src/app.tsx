import { Suspense } from 'react'
import HomePage from './pages/home/page'
import HomeLayout from './pages/home/layout'

export default function App() {
	return (
		<Suspense
			fallback={
				<div className='container mx-auto flex items-center justify-center text-center text-3xl min-h-screen w-full h-full'>
					Loading...
				</div>
			}
		>
			<HomeLayout>
				<HomePage />
			</HomeLayout>
		</Suspense>
	)
}
