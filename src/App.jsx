
import PokeGrid from './components/PokeGrid';
function App() {
  return (
    <>
      <main className='w-full min-h-screen bg-black flex items-center flex-col overflow-y-auto pt-5 overscroll-none'>
        <h1 className='font-bold text-sm md:text-3xl font-poppins text-white mb-4'>
          TheGoodGame Theory Assignment
        </h1>
          <PokeGrid/>
      </main>
    </>
  )
}

export default App
