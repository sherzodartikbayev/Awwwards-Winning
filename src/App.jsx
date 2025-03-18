import { About, Hero, Navbar } from './components'

const App = () => {
	return (
		<main className='relative min-h-screen w-screen overflow-x-hidden bg-zinc-600'>
			<Hero />
			<About />
		</main>
	)
}

export default App
