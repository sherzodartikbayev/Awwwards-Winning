import { About, Hero, Navbar, Features } from './components'

const App = () => {
	return (
		<main className='relative min-h-screen w-screen overflow-x-hidden bg-zinc-600'>
			<Navbar />
			<Hero />
			<About />
			<Features />
		</main>
	)
}

export default App
